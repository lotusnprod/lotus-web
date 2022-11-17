import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NPIcon from "../../../resources/images/NP3_S.png";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";

const React = require("react");


export default class Footer extends React.Component {
    render() {
        return (
            <Container fluid id="footer" className="sticky-bottom border-top">
                <Container className="align-content-center text-muted">

                    <Row>

                        <Col sm={1} className="align-content-center">
                            <a href="https://naturalproducts.net" target="_blank"><Image id="headerIcon" alt="Natural Products portal" className="img-fluid" src={NPIcon}/></a>
                        </Col>

                        <Col sm={10} className="align-justify-self-end">

                            <p style={{textAlign: "justify"}}>Natural Products Online is an open-source open-data portal for natural products cheminformatics.
                                Please submit bug reports, feature requests and general issues through <a target="_blank" rel="noopener noreferrer"  href="https://github.com/mSorok/LOTUSweb/issues">the issues tracker at GitHub</a>.
                                LOTUS is a collaborative project developed and maintained <a target="_blank" rel="noopener noreferrer"  href="https://gitlab.com/lotus7">here</a> and <a target="_blank" rel="noopener noreferrer"  href="https://www.wikidata.org/wiki/Wikidata:WikiProject_Chemistry/Natural_products">there</a>.
                                The code for this web application is released under the MIT license. The code for LOTUS is released under the GNU General Public License v3.0. Copyright © CC-BY-SA 2021</p>

                        </Col>
                    </Row>
                </Container>

            </Container>
        )
    }
}