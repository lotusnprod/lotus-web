import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import ReactMarkdown from "react-markdown";



const React = require("react");

import DocumentationMD from '../../resources/documentation/coconut_general_documentation.md';


export default class Documentation extends React.Component {


    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <a href="https://cheminf.uni-jena.de/" target="_blank">
                        <Image src="https://cheminf.uni-jena.de/wp-content/uploads/2017/12/cropped-Title_dec_2017.png" fluid/>
                    </a>
                </Row>
                <br/>
                <Row>

                    <p style={{textAlign: "justify"}}> Please submit bug reports, feature requests and general issues through the issues tracker at <a href="https://github.com/mSorok/NaturalProductsOnline/issues" target="_blank">GitHub</a>. </p>
                </Row>
                <br/>
                <Row className="justify-content-center">
                    <p>For further information visit the <a href="https://cheminf.uni-jena.de/" target="_blank"><i>Cheminformatics and Computational Metabolomics</i> homepage</a>.</p>
                </Row>

                <Row className="justify-content-center">
                    <p>LOTUS online is part of the <a href="https://naturalproducts.net" target="_blank">Natural Products Portal</a>.</p>
                </Row>





                <ReactMarkdown  source={DocumentationMD} />


            </Container>
        );
    }
}