// components/FixedPatternBg.tsx
"use client";

export function FixedPatternBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundColor: "#fff",
      }}
    />
  );
}
