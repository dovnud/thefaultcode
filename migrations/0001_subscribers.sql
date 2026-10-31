-- Base table for the shared minisplitzip-subscribers database.
-- The live table already exists (primary key email, purpose). Do not drop it.
-- Site column: migrations/0002_site.sql. The Function applies both on first use.

CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  page_url TEXT NOT NULL,
  purpose TEXT NOT NULL,
  extra TEXT NOT NULL,
  consent_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  ip_hash TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS subscribers_dedupe ON subscribers (email, purpose, page_url);

CREATE TABLE IF NOT EXISTS subscribe_hits (
  ip_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS subscribe_hits_lookup ON subscribe_hits (ip_hash, created_at);
