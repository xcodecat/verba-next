"use client";
import { Button } from "./ui/button";
import { Github, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-dvh w-full flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtiles Background-Highlight */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Verba
        </span>{" "}
        — a modern LaTeX alternative
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
        Write structured documents with a simple, developer-friendly syntax.
        Verba is currently in active development — stay tuned for updates!
      </p>

      <div className="mt-8 flex gap-4">
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

        {/* Fancy "Coming Soon" Button */}
        <Button
          size="lg"
          variant="outline"
          className="relative overflow-hidden"
        >
          <Sparkles className="w-4 h-4" />
          Coming Soon
          <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-primary/10 to-transparent" />
        </Button>
      </div>
    </section>
  );
}
