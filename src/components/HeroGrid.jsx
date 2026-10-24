import React from "react";
import { useEffect, useState } from 'react';
import DotGrid from './rb/DotGrid/DotGrid.jsx';
// Decorative only. Not rendered with reduced motion or on small screens.
export default function HeroGrid() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ok = !matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(min-width: 900px)').matches;
    setOn(ok);
  }, []);
  if (!on) return null;
  return <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}><DotGrid dotSize={3} gap={22} baseColor="#3b3a36" activeColor="#ff6a1a" proximity={120} shockRadius={180} shockStrength={3} glow={0.3} opacity={0.9} clickShock={false} /></div>;
}
