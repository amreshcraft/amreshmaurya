import ThemeProvider from "./provider/ThemeProvider";
import "./App.css";
import ThemeSwitcher from "./components/theme";
import SkillsSection from "./components/skills";
import Contact from "./components/contact";
import HeroSection from "./components/hero";
import CodingProfiles from "./components/profiles";
import Navbar from "./components/navbar";

export default function ThemeToggle() {
  return (
    <>
      <ThemeProvider />
      <main className="main-app">
        <ThemeSwitcher />
        <Navbar/>
        <HeroSection />
        <CodingProfiles/>
        <SkillsSection />
        <Contact />
      </main>
    </>
  );
}
