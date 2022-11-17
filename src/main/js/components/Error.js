import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";

const React = require("react");


export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.error("Error: " + this.props.error);

        return (
            <Container>
                <Row className="justify-content-center">
                    <FontAwesomeIcon icon="bug" className="standAloneIcon" size="3x"/>
                </Row>
                <Row className="justify-content-center">
                    <p>An error occurred...</p>
                    <p>We would appreciate it if you could report the error through GitHub's <a target="_blank" rel="noopener noreferrer"  href="https://github.com/mSorok/NaturalProductsOnline/issues">issues tracker</a> in order to help us improve LOTUS.</p>
                </Row>
            </Container>
        );
    }
}