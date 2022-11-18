import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const React = require("react");

export default class Introduction extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <p style={{textAlign: "justify"}}>Natural Products Online is an open source project for Natural Products (NPs) storage, search and analysis.
                        This page hosts LOTUS, one of the biggest and best annotated resources for NPs occurrences available free of charge and without any restriction.
                        LOTUS is a living database, which is hosted both here and on <a  target="_blank" rel="noopener noreferrer" href={"https://www.wikidata.org/"}>Wikidata</a>.
                        The Wikidata version allows for community curation and addition of novel data. 
                        The current version allows a more user friendly experience (such as structural search, taxonomy oriented query, flat table and structures exports).
                        <br/>
                        If you use LOTUS in your research, please cite the following work:
                        Adriano Rutz, Maria Sorokina, Jakub Galgonek, Daniel Mietchen, Egon Willighagen, Arnaud Gaudry, James G Graham, Ralf Stephan, Roderic Page, Jiří Vondrášek, Christoph Steinbeck, Guido F Pauli, Jean-Luc Wolfender, Jonathan Bisson, Pierre-Marie Allard (2022) The LOTUS initiative for open knowledge management in natural products research. eLife 11:e70780. <a  target="_blank" rel="noopener noreferrer"   href={"https://doi.org/10.7554/eLife.70780"}>https://doi.org/10.7554/eLife.70780</a> </p>
                </Row>
            </Container>
        );
    }
}
