// components/ThemeToggleButton.tsx
import { useThemeStore } from "../../store/themeStore";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher(){
  const { themeStatus, toggleThemeMode } = useThemeStore();

  const isDark = themeStatus.themeValue === "dark";

  return (
    <button
      onClick={toggleThemeMode}
      aria-label="Toggle Theme"
   className="btn w-fit"
    >
      {isDark ? <FaSun title="Switch to Light Mode" /> : <FaMoon title="Switch to Dark Mode" />}
    </button>
  );
};

