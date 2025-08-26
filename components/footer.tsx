"use client";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-600">
      <div className="container mx-auto px-6">
        <p className="mb-2">
          © {new Date().getFullYear()} Verba. All rights reserved.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Sed sit amet facilisis urna.
        </p>
      </div>
    </footer>
  );
}
