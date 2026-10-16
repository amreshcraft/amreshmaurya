import { BiSolidSun } from "react-icons/bi";
import useTheme from "../theme/useTheme";

export default function Navbar() {

    const toggleTheme = useTheme();

    return <nav>
        <div className="wrap">
            <a className="logo" href="#top">
                Amresh Maurya
            </a>
            <div className="links">
                <a className="hide-sm" href="#experience">Experience</a>
                <a className="hide-sm" href="#skills">Skills</a>
                <a className="hide-sm" href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                    <BiSolidSun />
                </button>
            </div>
        </div>
    </nav>
}