import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Navigator() {
    return (
        <header className="nav-out">
        <div className="nav d-flex justify-content-center">
            <Nav variant="underline" defaultActiveKey="/sobre">
                <Nav.Item>
                    <Link to="/sobre" className="nav-link">
                        Sobre
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/formacao" className="nav-link">
                        Formação
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/experiencia" className="nav-link">
                        Experiência
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/hobbies" className="nav-link">
                        Hobbies
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
        </header>
    );
}

export default Navigator;
