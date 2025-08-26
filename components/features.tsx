// Features.tsx
"use client";

import { Button } from "./ui/button";
import { Github } from "lucide-react";

export function Features() {
  return (
    <section
      id="features"
      className="relative isolate min-h-dvh w-full flex flex-col items-center justify-center px-6 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Verba
      </h2>
      <p className="mt-3 mx-auto max-w-2xl text-lg text-gray-600">
        Verba is a modern alternative to LaTeX, designed to make writing and
        publishing documents simpler and more accessible. The project is
        currently in active development — stay tuned for updates!
      </p>

      <div className="mt-8">
        <Button asChild size="lg">
          <a
            href="https://github.com/cheetahbyte/verba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            Follow on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
