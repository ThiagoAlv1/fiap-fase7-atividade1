import {Link} from "react-router-dom";

function Nav() {

    return (
        <header className="menu">
            <nav className="navmenu">
                <ul>
                    <Link to="/sobre" className="tlink">Sobre mim</Link>
                    <Link to="/formacao" className="tlink">Formação</Link>
                    <Link to="/experiencia" className="tlink">Experiência</Link>
                    <Link to="/hobbies" className="tlink">Hobbies</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;