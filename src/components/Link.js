import React from "react";

export function Link({ href, children }) {
  return (
    <a
      className="block px-4 py-1 md:p-2 lg:px-4 transition-colors hover:text-pink-600"
      href={href}
    >
      {children}
    </a>
  );
}
