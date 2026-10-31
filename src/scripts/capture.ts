// Inline request form. Turnstile's script loads only after the form is focused.
type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
};

function turnstile(): TurnstileApi | undefined {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

let loader: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (turnstile()) return Promise.resolve();
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loader = null;
      reject(new Error('turnstile'));
    };
    document.head.appendChild(script);
  });
  return loader;
}

function widgetId(form: HTMLFormElement): string | undefined {
  return form.dataset.widgetId || undefined;
}

async function ensureWidget(form: HTMLFormElement): Promise<void> {
  const sitekey = form.dataset.sitekey || '';
  const mount = form.querySelector<HTMLElement>('[data-turnstile]');
  if (!sitekey || !mount || widgetId(form)) return;
  await loadTurnstile();
  const api = turnstile();
  if (!api) return;
  mount.hidden = false;
  form.dataset.widgetId = api.render(mount, {
    sitekey,
    action: form.dataset.purpose || '',
    theme: 'light',
  });
}

function setStatus(form: HTMLFormElement, message: string) {
  const status = form.querySelector<HTMLElement>('[data-status]');
  if (status) status.textContent = message;
}

function field(form: HTMLFormElement, name: string): string {
  const el = form.elements.namedItem(name);
  if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement) return el.value;
  return '';
}

async function submit(form: HTMLFormElement) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (button) button.disabled = true;
  setStatus(form, 'Storing this request…');
  const body: Record<string, unknown> = {
    email: field(form, 'email'),
    page_url: field(form, 'page_url'),
    purpose: field(form, 'purpose'),
    consent: form.querySelector<HTMLInputElement>('input[name="consent"]')?.checked === true,
    consent_text: field(form, 'consent_text'),
    company: field(form, 'company'),
  };
  for (const name of ['brand', 'code', 'equipment', 'topic', 'interval_days']) {
    const value = field(form, name);
    if (value) body[name] = value;
  }
  const token = field(form, 'cf-turnstile-response');
  if (token) body['cf-turnstile-response'] = token;
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => null) as { message?: string } | null;
    setStatus(form, data?.message || (response.ok ? 'Request stored. Nothing was sent.' : 'This request could not be stored.'));
    if (response.ok) {
      const email = form.querySelector<HTMLInputElement>('input[name="email"]');
      const consent = form.querySelector<HTMLInputElement>('input[name="consent"]');
      if (email) email.value = '';
      if (consent) consent.checked = false;
    }
  } catch {
    setStatus(form, 'This request could not be stored. Try again.');
  } finally {
    const id = widgetId(form);
    if (id) turnstile()?.reset(id);
    if (button) button.disabled = false;
  }
}

function attach(form: HTMLFormElement) {
  const arm = () => { void ensureWidget(form).catch(() => setStatus(form, 'The check could not load. Try again.')); };
  form.addEventListener('focusin', arm, { once: true });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const sitekey = form.dataset.sitekey || '';
    const token = field(form, 'cf-turnstile-response');
    if (sitekey && !token) {
      void ensureWidget(form)
        .then(() => setStatus(form, 'Finish the check, then store the request again.'))
        .catch(() => setStatus(form, 'The check could not load. Try again.'));
      return;
    }
    void submit(form);
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-capture]').forEach(attach);
