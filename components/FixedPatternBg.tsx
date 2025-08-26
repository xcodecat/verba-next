// components/FixedPatternBg.tsx
"use client";

export function FixedPatternBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, #f3f4f6 1px, transparent 1px),
          linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundColor: "#fff",
        WebkitMaskImage: `
          radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)
        `,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "cover",
        maskImage: `
          radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)
        `,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "cover",
      }}
    />
  );
}
