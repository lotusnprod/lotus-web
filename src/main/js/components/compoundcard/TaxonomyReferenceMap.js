import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


const React = require("react");

import WikidataLogo from "../../../resources/images/wikidatalogo.png";
import CoconutIcon from "../../../resources/images/lotus_logo.png";
import Image from "react-bootstrap/Image";



export default class TaxonomyReferenceMap extends React.Component{

    render(){

        const naturalProduct = this.props.naturalProduct;

        let taxonomyReferenceObjects = naturalProduct.taxonomyReferenceObjects;

        var dois = [];
        for(var k in taxonomyReferenceObjects) dois.push(k);



        let full_table = [];

        for(let i=0; i<dois.length; i++){

            let all_db_tabs = [];

            let doi2url = dois[i].replaceAll("$x$x$", "\."); // nice doi

            let allTaxonomiesObject = taxonomyReferenceObjects[dois[i]];

            var db_names = [];
            for(var k in allTaxonomiesObject)db_names.push(k);

            var tabs_key = null;

            for( let j = 0;j<db_names.length;j++){



                let taxo_table = [];
                let taxo_lines = [];


                /**just the table header**/
                let taxo_header = [];


                let to = allTaxonomiesObject[db_names[j]][0];

                var header_ranks = [];
                for(var k in to) header_ranks.push(k);


                if(header_ranks.includes("domain") && to.domain != null){
                    taxo_header.push(
                        <th >Domain</th>
                    )
                }

                if(header_ranks.includes("superkingdom") && to.superkingdom != null){
                    taxo_header.push(
                        <th >Superkingdom</th>
                    )
                }

                if(header_ranks.includes("kingdom") && to.kingdom != null){
                    taxo_header.push(
                        <th >Kingdom</th>
                    )
                }

                if(header_ranks.includes("phylum") && to.phylum != null){
                    taxo_header.push(
                        <th>Phylum</th>
                    )
                }

                if(header_ranks.includes("class") && to.class != null){
                    taxo_header.push(
                        <th>Class</th>
                    )
                }

                if(header_ranks.includes("order") && to.order != null){
                    taxo_header.push(
                        <th>Order</th>
                    )
                }

                if(header_ranks.includes("family") && to.family != null){
                    taxo_header.push(
                        <th>Family</th>
                    )
                }

                if(header_ranks.includes("genus") && to.genus != null){
                    taxo_header.push(
                        <th>Genus</th>
                    )
                }

                if(header_ranks.includes("species") && to.species != null){
                    taxo_header.push(
                        <th>Species</th>
                    )
                }
                if( db_names[j] != "VASCAN"  && db_names[j] != "ITIS") {
                    taxo_header.push(
                        <th style={{width: "100px"}}>
                            Link to taxonomy
                        </th>
                    );
                }




                if("Open Tree of Life" == db_names[j]  ){
                    taxo_header.push(
                        <th style={{width:"100px"}}>
                            Link to Wikidata
                        </th>
                    );
                }


                /** the rest**/




                for(let ti = 0; ti<allTaxonomiesObject[db_names[j]].length;ti++){
                    let tax_object = allTaxonomiesObject[db_names[j]][ti];

                    var ranks = [];
                    for(var k in tax_object) ranks.push(k);

                    let taxo_line = [];

                    let organismURL = "";

                    if(db_names[j] == "Open Tree of Life"){
                        organismURL = "https://tree.opentreeoflife.org/opentree/argus/ottol@"+tax_object.cleaned_organism_id ;

                        tabs_key ="Open_Tree_of_Life";





                    }else if(db_names[j] == "NCBI"){
                        organismURL = "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id="+tax_object.cleaned_organism_id ;
                        if(tabs_key == null){
                            tabs_key = "NCBI";
                        }
                    }else if(db_names[j] == "GBIF Backbone Taxonomy"){
                        organismURL = "https://www.gbif.org/species/"+tax_object.cleaned_organism_id ;
                        if(tabs_key == null){
                            tabs_key = "GBIF_Backbone_Taxonomy";
                        }
                    }else if(db_names[j] == "iNaturalist"){
                        organismURL = "https://www.inaturalist.org/taxa/"+tax_object.cleaned_organism_id ;
                        if(tabs_key == null){
                            tabs_key = "iNaturalist";
                        }
                    }/*else if(db_names[j] == "ITIS"){
                        organismURL = ""+tax_object.cleaned_organism_id ;
                    }*/
                    else if(db_names[j] == "Index Fungorum"){
                        organismURL = "http://www.indexfungorum.org/names/NamesRecord.asp?RecordID="+tax_object.cleaned_organism_id ;
                        if(tabs_key == null){
                            tabs_key = "Index_Fungorum";
                        }
                    }/*else if(db_names[j] == "VASCAN"){
                        organismURL = ""+tax_object.cleaned_organism_id ;
                    }*/



                    if(ranks.includes("domain") && tax_object.domain != null ){
                        taxo_line.push(
                            <td style={{"whiteSpace":"nowrap","border":"thin solid #dee2e6"}}>&nbsp;{tax_object.domain}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("superkingdom") && tax_object.superkingdom != null){
                        taxo_line.push(
                            <td style={{"whiteSpace":"nowrap","border":"thin solid #dee2e6"}}>&nbsp;{tax_object.superkingdom}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("kingdom") && tax_object.kingdom != null){
                        taxo_line.push(
                            <td style={{"whiteSpace":"nowrap","border":"thin solid #dee2e6"}}>&nbsp;{tax_object.kingdom}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("phylum") && tax_object.phylum != null){
                        taxo_line.push(
                            <td style={{"border":"thin solid #dee2e6"}}>&nbsp;{tax_object.phylum}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("class") && tax_object.class != null ){
                        taxo_line.push(
                            <td style={{"border":"thin solid #dee2e6"}}>&nbsp;{tax_object.class}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("order") && tax_object.order != null){
                        taxo_line.push(
                            <td style={{"border":"thin solid #dee2e6"}}>&nbsp;{tax_object.order}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("family") && tax_object.family != null){
                        taxo_line.push(
                            <td style={{"border":"thin solid #dee2e6"}}>&nbsp;{tax_object.family}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("genus") && tax_object.genus != null){
                        taxo_line.push(
                            <td style={{"border":"thin solid #dee2e6"}}>&nbsp;{tax_object.genus}&nbsp;</td>
                        )
                    }

                    if(ranks.includes("species") && tax_object.species != null){
                        taxo_line.push(
                            <td style={{"whiteSpace":"nowrap", "border":"thin solid #dee2e6"}}>&nbsp;{tax_object.species}&nbsp;</td>
                        )
                    }

                    if( db_names[j] != "VASCAN"  && db_names[j] != "ITIS"){
                        taxo_line.push(
                            <td style={{
                                "whiteSpace": "nowrap",
                                "minWidth": "130px",
                                "alignItems": "center",
                                "justifyContent": "center",
                                "border": "thin solid #dee2e6",
                                "margin": "3px",
                                "textAlign": 'center'
                            }}>
                                <Button id={"linkTo_" + tax_object.cleaned_organism_id} variant="outline-primary"
                                        size="md" href={organismURL} target="_blank">
                                    <FontAwesomeIcon icon="sitemap" fixedWidth/>
                                </Button>
                            </td>
                        );
                    }

                    if( tax_object.wikidata_id != null ){
                        taxo_line.push(
                            <td style={{"whiteSpace":"nowrap", "minWidth":"130px", "justifyContent": "center", "border":"thin solid #dee2e6", "margin":"3px",  "textAlign": 'center'}}>

                                <Button id={"linkTo_wikidata_" + tax_object.cleaned_organism_id} variant="outline-success" size="sm" href={tax_object.wikidata_id} target="_blank">

                                    <Image id={"wikidatalogo"+tax_object.wikidata_id} alt="Wikidata logo"  src={WikidataLogo}/>
                                </Button>
                            </td>
                        )
                    }


                    taxo_lines.push(
                        <tr>
                            {taxo_line}
                        </tr>
                    );



                }

                taxo_table.push(
                    <Row id={i+"row_tax"}  className="justify-content-xl-left ">
                    <Table id={i+"tax"} size="sm" striped bordered hover responsive="xl">
                        {/*mt-xl-4*/}
                        <thead >
                        <tr>
                            {taxo_header}
                        </tr>
                        </thead>
                        <tbody>
                        {taxo_lines}
                        </tbody>
                    </Table>
                    </Row>
                );




                all_db_tabs.push(
                    <Tab eventKey={db_names[j].replaceAll(" ","_")} title={db_names[j]} >
                        <br/>
                        {taxo_table}
                    </Tab>
                );

            }

            let ref_buttons = [];
            ref_buttons.push(
                <Col>
                    <Button className="btn btn-default" id={"linkTo_" + doi2url} variant="outline-primary" size="sm" href={"https://doi.org/"+doi2url} target="_blank">
                        Ref: <FontAwesomeIcon icon="external-link-alt" fixedWidth/>
                    </Button>
                </Col>
            );
            if("Open Tree of Life" in taxonomyReferenceObjects[dois[i]]){
                ref_buttons.push(
                    <Col>
                        <Button className="btn btn-default" id={"linkTo_wikidata_ref_" + taxonomyReferenceObjects[dois[i]]["Open Tree of Life"][0].cleaned_organism_id} variant="outline-success" size="sm" href={taxonomyReferenceObjects[dois[i]]["Open Tree of Life"][0].reference_wikidata_id} target="_blank">

                            <Image id={"wikidatalogo_ref_"+taxonomyReferenceObjects[dois[i]]["Open Tree of Life"][0].reference_wikidata_id} alt="Wikidata logo" className="img-fluid mt-2 mb-1" size={"xs"} src={WikidataLogo}/>
                        </Button>
                    </Col>
                );

            }


            full_table.push(
                <Row className="align-items-center" style={{flex:1}} >

                    <Col xs={10}>
                        <Tabs id = "taxo_tabs" defaultActiveKey={tabs_key} variant="pills" >
                            {all_db_tabs}
                        </Tabs>
                    </Col>

                    <Col sm={2} >
                        <Row className="align-items-center btn-group" >
                            {ref_buttons}
                        </Row>
                    </Col>

                </Row>);
        }







        return (

            <Card className="compoundCardItem">
                <Card.Body>
                    <Card.Title className="text-primary">Organism taxonomy</Card.Title>
                    <br />

                    <Container >

                        {full_table}
                    </Container>

                </Card.Body>
            </Card>
        );
    }


}