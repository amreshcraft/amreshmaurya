import ThemeProvider from './provider/ThemeProvider';
import "./App.css"
import ThemeSwitcher from './components/theme';
import SkillsSection from './components/skills';
import Contact from './components/contact';

export default function ThemeToggle() {

  return (<>
    <ThemeProvider/>
    <main className='main-app'>
      <ThemeSwitcher/>
<SkillsSection/>
<Contact/>
    </main>
  </>
  );
}
