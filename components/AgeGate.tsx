"use client";

import { useState } from "react";
import { AGE_STORAGE_KEY } from "@/lib/site";

export function AgeGate() {
  const [blocked, setBlocked] = useState(false);

  function enter() {
    try {
      localStorage.setItem(AGE_STORAGE_KEY, "1");
    } catch {
      // Storage can fail in private mode; still let them in this visit.
    }
    document.documentElement.dataset.age = "ok";
  }

  return (
    <div
      className="age-gate fixed inset-0 z-[80] flex items-center justify-center bg-night px-6 text-cream"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-title"
    >
      <div className="grain" />
      <div className="relative max-w-md text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
          Expressão
        </p>
        <h1
          id="age-title"
          className="mt-6 font-display text-4xl leading-none tracking-wide sm:text-5xl"
        >
          21+
        </h1>
        {blocked ? (
          <p className="mt-8 text-[1.05rem] leading-8 text-cream/85">
            Esta página não é para ti.
          </p>
        ) : (
          <>
            <p className="mt-8 text-[1.05rem] leading-8 text-cream/85">
              Esta publicação contém nu artístico. Só podes entrar se tiveres
              21 anos ou mais.
            </p>
            <div className="mt-12 flex flex-col items-center gap-6">
              <button type="button" className="cta text-cream" onClick={enter}>
                Tenho 21 anos ou mais
              </button>
              <button
                type="button"
                className="cta-quiet text-cream/60 hover:text-terracotta"
                onClick={() => setBlocked(true)}
              >
                Sair
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
