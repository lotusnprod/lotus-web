import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const React = require("react");

export default class Introduction extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <p style={{textAlign: "justify"}}>Natural Products Online is an open source project for Natural Products (NPs) storage, search and analysis.
                        This page hosts LOTUS, the naturaL prOducTs occUrrence databaSe, one of the biggest and best annotated resources for NPs occurrences available free of charge and without any restriction.
                        LOTUS is a living database which is hosted in parallel at <a  target="_blank" rel="noopener noreferrer"   href={"https://www.wikidata.org/"}>Wikidata</a> and here.
                        The Wikidata version allows for community curation and addition of novel data. The current version allows a more user friendly experience (such as structural search, taxonomy oriented query, flat table and structures exports).</p>
                </Row>
            </Container>
        );
    }
}
