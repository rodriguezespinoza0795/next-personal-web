"use client";

import i18n from "@/i18n";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
