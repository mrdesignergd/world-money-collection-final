"use client";

import { useRef } from "react";

type MobileNavProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function MobileNav({ items }: MobileNavProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <details ref={detailsRef} className="group md:hidden">
      <summary className="list-none rounded-full border border-[#d8b45f]/25 bg-[#173d2d] px-4 py-2 text-sm font-bold text-[#f2cf7d] transition hover:border-[#d8b45f]/60">
        Меню
      </summary>
      <div className="absolute right-5 top-[calc(100%+0.5rem)] z-50 grid w-[min(18rem,calc(100vw-2.5rem))] gap-2 rounded-lg border border-[#d8b45f]/20 bg-[#101311]/96 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.36)] backdrop-blur-xl">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => {
              if (detailsRef.current) {
                detailsRef.current.open = false;
              }
            }}
            className="rounded-md px-4 py-3 text-sm font-medium text-[#efe8d0]/86 transition hover:bg-[#173d2d] hover:text-[#f2cf7d]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </details>
  );
}
