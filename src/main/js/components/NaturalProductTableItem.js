import Image from "react-bootstrap/Image";
import {LinkContainer} from "react-router-bootstrap";
import Utils from "../Utils";

const React = require("react");


export default class NaturalProductTableItem extends React.Component {
    render() {
        const linkToCompoundPage = "/compound/lotus_id/" + this.props.naturalProduct.lotus_id;
        const structure = Utils.drawMoleculeBySmiles(this.props.naturalProduct.smiles2D);

        let taxonomyReferenceObjects =  this.props.naturalProduct.taxonomyReferenceObjects;

        let dois2displaylist = [];
        let dois2display = [];

        let tax2displayList = [];
        let tax2display = [];

        let card_main_id = this.props.naturalProduct.lotus_id;

        if(naturalProduct.wikidata_id != null){
            card_main_id = naturalProduct.wikidata_id.split("/")[naturalProduct.wikidata_id.split("/").length-1] ;
        }


        var dois = [];
        for(var k in taxonomyReferenceObjects) dois.push(k);

        for(let i=0; i<dois.length; i++){
            let doi2url = dois[i].replaceAll("$x$x$", "\."); // nice doi
            dois2displaylist.push(<li><a  target="_blank" href={doi2url}>DOI</a></li>);

            //get the curated organisms
            let allTaxonomiesObject = taxonomyReferenceObjects[dois[i]];

            //console.log(allTaxonomiesObject["Open Tree of Life"]);

            if("Open Tree of Life" in allTaxonomiesObject) {

                for(let ti = 0; ti<allTaxonomiesObject["Open Tree of Life"].length;ti++){
                    let tax_object = allTaxonomiesObject["Open Tree of Life"][ti];

                    tax2displayList.push(<li><a target="_blank" href={"https://tree.opentreeoflife.org/opentree/argus/ottol@"+tax_object.cleaned_organism_id}>{tax_object.organism_value}</a></li>)

                }
            }
        }

        dois2display.push(<ul style={{listStyleType:'none' }}>{dois2displaylist}</ul>);
        tax2display.push(<ul style={{listStyleType:'none' }}>{tax2displayList}</ul>)

        return (
            <LinkContainer to={linkToCompoundPage}>
                <tr>
                    <td><Image src={structure.toDataURL()} alt="🥥" fluid/></td>
                    <td>{card_main_id}</td>
                    <td>{this.props.naturalProduct.lotus_id}</td>
                    <td>{Utils.capitalize(this.props.naturalProduct.traditional_name) ||  this.props.naturalProduct.iupac_name}</td>
                    <td>{this.props.naturalProduct.molecular_formula || this.props.naturalProduct.molecularFormula}</td>
                    <td>{Math.round((this.props.naturalProduct.molecular_weight + Number.EPSILON)  * 100) / 100}</td>
                    <td>{dois2display}</td>
                    <td>{tax2display}</td>
                </tr>
            </LinkContainer>
        );
    }
}