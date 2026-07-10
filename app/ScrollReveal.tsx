"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observedElements = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    const revealElement = (element: HTMLElement) => {
      if (observedElements.has(element)) return;

      observedElements.add(element);

      const delay = element.dataset.revealDelay;
      if (delay) {
        element.style.setProperty("--reveal-delay", `${delay}ms`);
      }

      if (reduceMotion.matches) {
        element.classList.add("is-visible");
        return;
      }

      observer.observe(element);
    };

    const revealElements = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => revealElement(element));
    };

    revealElements(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.matches("[data-reveal]")) {
            revealElement(node);
          }

          revealElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
