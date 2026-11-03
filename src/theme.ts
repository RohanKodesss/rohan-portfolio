import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "rohan-theme";

function resolveTheme(): Theme {
  if (typeof document === "undefined") return "light";

  const fromDom = document.documentElement.dataset.theme;
  if (fromDom === "light" || fromDom === "dark") return fromDom;

  const param = new URLSearchParams(window.location.search).get("theme");
  if (param === "light" || param === "dark") return param;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage can be blocked; the system preference is still readable.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0D1615" : "#EDE3D0");
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolveTheme);

  useEffect(() => {
    applyTheme(theme);

    const params = new URLSearchParams(window.location.search);
    if (!params.has("theme")) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // A blocked store is not a reason to break the page.
      }
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";

      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // The visible theme still changes.
      }

      // A ?theme= value is only for testing; drop it so the choice sticks.
      const params = new URLSearchParams(window.location.search);
      if (params.has("theme")) {
        params.delete("theme");
        const query = params.toString();
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
        );
      }

      return next;
    });
  }, []);

  return { theme, toggle };
}
