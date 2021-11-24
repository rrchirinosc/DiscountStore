import React, { Component } from 'react';
//import { Nav, Tab, Row, Col } from 'react-bootstrap';


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true };

        //this.updateTable = this.updateTable.bind(this);
    }

    /* Load members table on start */
    componentDidMount() {
        this.fetchItems();
    }

    static displayName = Home.name;

    /* Render members table */
    static renderItemsTable(items) {
        return (

            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Price (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item =>
                        <tr key={item.id}>
                            <td>{item.sku}</td>
                            <td>{item.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    /* Retrieve all available items */
    async fetchItems() {
        const response = await fetch('/api/items');
        const data = await response.json();
        //console.log(await response.text());
        this.setState({ items: data, loading: false });
    }

    render() {

        let items = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderItemsTable(this.state.items);

        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <h5>Items list</h5>
                    {items}
                </div>
            </React.Fragment>
        );
    }
}
