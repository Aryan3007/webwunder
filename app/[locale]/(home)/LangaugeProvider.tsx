'use client'; 
import React, { useState, useEffect } from 'react';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "de">("de"); // Default to "de"

  // Fetch language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "de") {
      setLang(storedLang as "en" | "de");
    }
  }, []);

  return (
    <>
      {React.cloneElement(children as React.ReactElement, { lang })}
    </>
  );
}
