import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Utils from "../Utils";

const React = require("react");


//This is the small cards that appear on the home page - need to find what catches the search

export default class NaturalProductCardItem extends React.Component {
    render() {
        const linkToCompoundPage = "/compound/lotus_id/" + this.props.naturalProduct.lotus_id;
        const structure = Utils.drawMoleculeBySmiles(this.props.naturalProduct.smiles2D);

        console.log(this.props.naturalProduct);

        //TODO either here (test for Tanimoto field), either create a Tanimoto card

        let card_main_id = this.props.naturalProduct.lotus_id;

        if(naturalProduct.wikidata_id != null){
            card_main_id = naturalProduct.wikidata_id.split("/")[naturalProduct.wikidata_id.split("/").length-1] ;
        }

        var cardTitle = <Card.Link href={linkToCompoundPage} className="cardItemHeadline">{card_main_id}</Card.Link>;






        if(this.props.naturalProduct.hasOwnProperty('tanimoto') && this.props.naturalProduct.tanimoto &&  this.props.naturalProduct.tanimoto>0 ){

            var tanomotoScore =  Math.round((this.props.naturalProduct.tanimoto*100 + Number.EPSILON) * 100)/100;


            cardTitle = <>
                <Card.Link href={linkToCompoundPage} className="cardItemHeadline">{card_main_id}&nbsp;&nbsp;</Card.Link>
                <p style={{color: "#FC6B1E"}}>{tanomotoScore} %</p>
            </>;
        }


        return (
            <Card className="cardBrowserItem">
                <Card.Link href={linkToCompoundPage} className="cardItemImg"><Card.Img variant="top" src={structure.toDataURL()} alt="🥥"/></Card.Link>
                <Card.Body>
                    <Card.Title>
                        {cardTitle}
                    </Card.Title>
                    <Card.Subtitle>{Utils.capitalize(this.props.naturalProduct.traditional_name) || this.props.naturalProduct.iupac_name }</Card.Subtitle>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Mol. formula</td>
                            <td>{this.props.naturalProduct.molecular_formula || this.props.naturalProduct.molecularFormula}</td>
                        </tr>
                        <tr>
                            <td>Mol. weight</td>
                            <td>{ Math.round((this.props.naturalProduct.molecular_weight + Number.EPSILON)  * 100) / 100 }</td>
                        </tr>
                        <tr>
                            <td>Tmp. LOTUS id</td>
                            <td>{this.props.naturalProduct.lotus_id}</td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}