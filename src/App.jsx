import Nav from './components/Nav.jsx'
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
        )
}

export default App
