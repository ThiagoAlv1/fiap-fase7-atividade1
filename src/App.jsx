import Navigator from './components/Navigator.jsx'
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {EstiloContainer} from "./css/EstiloContainer.jsx";
import {EstiloFooter} from "./css/EstiloFooter.jsx";
import {EstiloNav} from "./css/EstiloNav.jsx";
import {EstiloOutlet} from "./css/EstiloOutlet.jsx";

function App() {
    return (
        <EstiloContainer>
            <Container className="meu-container">
                <Row>
                    <Col className="text-center">

                        <EstiloNav>
                            <Navigator/>
                        </EstiloNav>

                        <EstiloOutlet>
                            <Outlet/>
                        </EstiloOutlet>


                    </Col>
                </Row>
            </Container>

            <EstiloFooter>
                <Footer/>
            </EstiloFooter>

        </EstiloContainer>

        )
}

export default App
