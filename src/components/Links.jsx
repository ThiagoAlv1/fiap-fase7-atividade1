
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import {EstiloLinks, LinkExterno} from "../css/EstiloLinks.jsx";

function Links() {
    return (
        <EstiloLinks>
            <div>
                <LinkExterno href="https://github.com/ThiagoAlv1" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </LinkExterno>
                <LinkExterno href="https://linkedin.com/in/thiagoalv1" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin />
                </LinkExterno>
            </div>
        </EstiloLinks>
    );
}
export default Links;

