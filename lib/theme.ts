export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "ft-theme";
export const DEFAULT_THEME: Theme = "dark";

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function readStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(value)) return value;
    if (value === "system") {
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
}

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var dark;if(t==="light")dark=false;else if(t==="dark")dark=true;else if(t==="system")dark=!window.matchMedia("(prefers-color-scheme: light)").matches;else dark=true;var theme=dark?"dark":"light";var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(theme);r.style.colorScheme=theme;r.dataset.theme=theme;}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";document.documentElement.dataset.theme="dark";}})();`;
