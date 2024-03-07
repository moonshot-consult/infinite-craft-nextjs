"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </div>
  );
}
