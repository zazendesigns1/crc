"use client";
import { useState } from "react";

export default function SaveButton() {
  const [on, setOn] = useState(false);
  return <button className="btn ghost" type="button" aria-pressed={on} onClick={() => setOn(!on)}>{on ? "Saved ✓" : "Save"}</button>;
}
