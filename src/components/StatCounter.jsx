import React from "react";
import { useEffect, useState } from 'react';
import Counter from './rb/Counter/Counter.jsx';
// Server renders the plain number; the rolling counter is a decorative enhancement.
export default function StatCounter({ value }) {
  const [anim, setAnim] = useState(false);
  useEffect(() => { setAnim(!matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  if (!anim) return <span>{value}</span>;
  return <span><span className="sr-only">{value}</span><span aria-hidden="true"><Counter value={value} fontSize={44} fontWeight={700} textColor="inherit" motionBlur={false} /></span></span>;
}
