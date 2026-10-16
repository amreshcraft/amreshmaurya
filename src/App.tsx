import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";




















export default function App() {


  return (
    <>
      <main id="top">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <div className="wrap">© Amresh Maurya</div>
      </footer>
    </>
  );
}
