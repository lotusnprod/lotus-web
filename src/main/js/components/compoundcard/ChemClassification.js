import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, Redirect} from "react-router-dom";

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
                <Table id={"npc"+naturalProduct.lotus_id} size="sm" striped bordered hover >
                    <thead >
                    <tr>
                        <td>Pathway</td>
                        <td>Superclass</td>
                        <td>Class</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id={"npc1"}>{naturalProduct.chemicalTaxonomyNPclassifierPathway}</td>
                        <td id={"npc2"}>{naturalProduct.chemicalTaxonomyNPclassifierSuperclass}</td>
                        <td id={"npc3"}>{naturalProduct.chemicalTaxonomyNPclassifierClass}</td>
                    </tr>
                    </tbody>
                </Table>
            );

            all_tabs.push(
                <Tab eventKey="npclassifier"  id={"chem_tab_npc"+naturalProduct.lotus_id} title="NP Classifier" >
                    <br/>
                    <br/>
                    {npcTable}
                </Tab>
            );

        }



        if(naturalProduct.chemicalTaxonomyClassyfireKingdom != null || naturalProduct.chemicalTaxonomyClassyfireSuperclass != null || naturalProduct.chemicalTaxonomyClassyfireClass != null || naturalProduct.chemicalTaxonomyClassyfireDirectParent != null){
            let classyfire_tab = [];

            //todo fill the table

            classyfire_tab.push(
                <Table id={"classyf"+naturalProduct.lotus_id} size="sm" striped bordered hover >
                    <thead >
                    <tr>
                        <td>Kingdom</td>
                        <td>Superclass</td>
                        <td>Class</td>
                        <td>Direct Parent</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id={"cf1"}>{naturalProduct.chemicalTaxonomyClassyfireKingdom}</td>
                        <td id={"cf2"}>{naturalProduct.chemicalTaxonomyClassyfireSuperclass}</td>
                        <td id={"cf3"}>{naturalProduct.chemicalTaxonomyClassyfireClass}</td>
                        <td id={"cf4"}>{naturalProduct.chemicalTaxonomyClassyfireDirectParent}</td>
                    </tr>
                    </tbody>
                </Table>

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