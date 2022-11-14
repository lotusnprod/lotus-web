import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, Redirect} from "react-router-dom";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";



const React = require("react");



export default class ChemClassification extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchSubmitted: false,
            queryString: null,
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    }

    handleSearchSubmit(e, value){


        this.setState(
            {
                queryString:value,
                searchSubmitted:true
            }
        );

    }




    render() {
        const naturalProduct = this.props.naturalProduct;

        let api_url = "/search/chemclass?query=";


        let all_tabs = [];
        let full_table = [];



        if(naturalProduct.chemicalTaxonomyNPclassifierPathway != null || naturalProduct.chemicalTaxonomyNPclassifierSuperclass || naturalProduct.chemicalTaxonomyNPclassifierClass != null) {

            let npcTable = [];


            npcTable.push(
                <Row id={"npcrow"+naturalProduct.lotus_id} className="justify-content-xl-left ml-1 mr-3">
                    <Table id={"npc"+naturalProduct.lotus_id} size="sm" striped bordered hover>
                        <thead >
                        <tr>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Pathway</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Superclass</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Class</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"npc1"}>{naturalProduct.chemicalTaxonomyNPclassifierPathway || "-"}</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"npc2"}>{naturalProduct.chemicalTaxonomyNPclassifierSuperclass || "-"}</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"npc3"}>{naturalProduct.chemicalTaxonomyNPclassifierClass || "-"}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            );

            all_tabs.push(
                <Tab eventKey="npclassifier"  id={"chem_tab_npc"+naturalProduct.lotus_id} title="NP Classifier" >
                    <br/>
                    {npcTable}
                </Tab>
            );

        }



        if(naturalProduct.chemicalTaxonomyClassyfireKingdom != null || naturalProduct.chemicalTaxonomyClassyfireSuperclass != null || naturalProduct.chemicalTaxonomyClassyfireClass != null || naturalProduct.chemicalTaxonomyClassyfireDirectParent != null){
            let classyfire_tab = [];


            classyfire_tab.push(
                <Row id={"classyfrow"+naturalProduct.lotus_id} className="justify-content-xl-left  ml-1 mr-3">
                    <Table  id={"classyf"+naturalProduct.lotus_id} size="sm" striped bordered hover>
                        <thead >
                        <tr>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Kingdom</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Superclass</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Class</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}}>Direct Parent</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            // ideally, there would be associated identifiers from the ClassyFire ontology available in the `naturalProduct`
                            // object for each of the 4 classifications that could be used to generate links via the bioregistry, 
                            // e.g., with https://bioregistry.io/classyfire:0000001 for "Inorganic compounds"
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"cf1"}>{naturalProduct.chemicalTaxonomyClassyfireKingdom || "-"}</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"cf2"}>{naturalProduct.chemicalTaxonomyClassyfireSuperclass || "-"}</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"cf3"}>{naturalProduct.chemicalTaxonomyClassyfireClass || "-"}</td>
                            <td style={{"whiteSpace":"nowrap",  "border":"thin solid #dee2e6"}} id={"cf4"}>{naturalProduct.chemicalTaxonomyClassyfireDirectParent || "-"}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>

            );



            all_tabs.push(
                <Tab eventKey="classyfire" id={"chem_tab_classy"+naturalProduct.lotus_id} title="ClassyFire">
                    <br/>
                    {classyfire_tab}
                </Tab>
            );
        }



        //todo push all tabs to full_table

        full_table.push(

            <Tabs  defaultActiveKey="npclassifier" variant="pills" className='ml-1 mr-1' >
                {/*id = "chem_class_tabs"*/}

                {all_tabs}
            </Tabs>
        );






        return (
            <Card className="compoundCardItem">
                <Card.Body>
                    <Card.Title className="text-primary">Chemical ontology</Card.Title>
                    <br />
                    {full_table}

                </Card.Body>
                {/*this.state.searchSubmitted && <Redirect to={"/search/chemclass/" + encodeURIComponent(this.state.queryString)}/> */}
            </Card>


        );
    }


}
