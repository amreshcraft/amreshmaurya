import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

const ThemeProvider = () => {
  const { themeStatus, toggleThemeMode } = useThemeStore();

  useEffect(() => {
          toggleThemeMode();
    }
  , [])

  useEffect(() => {
    // 2. Apply theme class to <html>
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(themeStatus.themeValue);
  }, [themeStatus.themeValue]);

  return null;
};

export default ThemeProvider;
