import Introduction from "./Introduction";
import CompoundBrowser from "./compoundbrowser/CompoundBrowser";
import Container from "react-bootstrap/Container";

const React = require("react");


export default class Index extends React.Component {
    render() {
        return (
            <Container>
                <Introduction />
                <br/>
                <CompoundBrowser />
            </Container>
        );
    }
}