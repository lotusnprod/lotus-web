import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "../Spinner";
import Error from "../Error";
import Utils from "../../Utils";
import NavigationSidebar from "./NavigationSidebar";
import Overview from "./Overview";
import Representations from "./Representations";
import MolecularProperties from "./MolecularProperties";
import MolecularDescriptors from "./MolecularDescriptors";
import CrossReferences from "./CrossReferences";
import KnownStereochemicalVariants from "./KnownStereochemicalVariants";
import References from "./References";
import Synonyms from "./Synonyms";
import ChemClassification from "./ChemClassification";
import TaxonomyReferenceMap from "./TaxonomyReferenceMap";

const React = require("react");
const restClient = require("../../restClient");


export default class NaturalProductCompoundCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            naturalProduct: []
        };
    }

    componentDidMount() {
        const identifier = this.props.match.params.identifier;
        const identifierValue = this.props.match.params.identifierValue;

        this.fetchNaturalProductByIdentifier(identifier, identifierValue);
    }

    fetchNaturalProductByIdentifier(identifier, identifierValue) {
        restClient({
            method: "GET",
            path: "/api/compound/search/findBy" + Utils.capitalize(identifier) + "?" + identifier + "=" + encodeURIComponent(identifierValue)
        }).then(
            (response) => {
                this.setState({
                    isLoaded: true,
                    naturalProduct: response.entity._embedded.lotusUniqueNaturalProducts[0]
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        const { error, isLoaded, naturalProduct } = this.state;

        if (error) {
            return <Error/>;
        } else if (!isLoaded) {
            return <Spinner/>;
        } else {
            const compoundCardItems = [
                "overview",
                "representations",
                "taxonomy_&_references",
                "chemical_ontology",
                "molecular_properties",
                "molecular_descriptors",

                //"cross_references"

                //Idea: add an empty string at the beginning?

            ];


            return (
                <Container id="npcompoundbigcard">
                    <Row>
                        {/*<Col sm={3}>
                            <NavigationSidebar navigationItems={compoundCardItems} />
                        </Col>*/}
                        <Col >{/*sm={9}*/}
                            <Row id={compoundCardItems[0]} className="compoundCardRow">
                                <Overview naturalProduct={naturalProduct}/>
                            </Row>
                            <br/>
                            <Row id={compoundCardItems[1]} className="compoundCardRow">
                                <Representations naturalProduct={naturalProduct}/>
                            </Row>
                            <br/>
                            <Row id={compoundCardItems[2]} className="compoundCardRow">
                                <TaxonomyReferenceMap naturalProduct={naturalProduct}/>
                            </Row>
                            <br/>
                            <Row id={compoundCardItems[3]} className="compoundCardRow">
                                <ChemClassification naturalProduct={naturalProduct}/>
                            </Row>
                            <br/>
                            <Row id={compoundCardItems[4]} className="compoundCardRow">
                                <MolecularProperties naturalProduct={naturalProduct}/>
                            </Row>
                            <br/>
                            <Row id={compoundCardItems[5]} className="compoundCardRow">
                                <MolecularDescriptors naturalProduct={naturalProduct}/>
                            </Row>

                            <br/>


                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}