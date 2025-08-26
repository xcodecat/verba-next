// app/page.tsx
"use client";

import { FixedPatternBg } from "@/components/FixedPatternBg";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full grid grid-rows-[auto_1fr_auto]">
      <FixedPatternBg />

      {/* Row 1: Header */}
      <Navigation />

      {/* Row 2: Content */}
      <div className="flex flex-col">
        <Hero />
        {/*<div className="flex-1 flex">
          <Features />
        </div>*/}
      </div>

      {/* Row 3: Footer */}
      {/*<Footer />*/}
    </main>
  );
}
