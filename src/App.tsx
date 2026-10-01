import { WorkExperience } from './components/WorkExperience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import Skills from './components/Skills'
import ProfileHero from './components/ProfileHero'
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main>
        <ProfileHero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>

  )
}
