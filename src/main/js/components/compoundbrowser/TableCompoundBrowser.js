import Table from "react-bootstrap/Table";
import NaturalProductTableItem from "../NaturalProductTableItem";

const React = require("react");


export default class TableCompoundBrowser extends React.Component {
    render() {
        const naturalProductTableItems = this.props.naturalProducts.map(naturalProduct =>
            <NaturalProductTableItem key={naturalProduct.lotus_id} naturalProduct={naturalProduct}/>

        );

        return (
            <Table responsive="lg" bordered hover size="sm">
                <thead>
                <tr>
                    <th className="tableThumbnail"></th>
                    <th>Wikidata id</th>
                    <th>Tmp. LOTUS id</th>
                    <th>Name</th>
                    <th>Mol. formula</th>
                    <th>Mol. weight</th>
                    <th>References</th>
                    <th>Organisms</th>
                </tr>
                </thead>
                <tbody>
                    {naturalProductTableItems}
                </tbody>
            </Table>
        );
    }
}