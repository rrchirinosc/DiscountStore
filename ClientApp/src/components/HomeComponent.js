import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';


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
                <div className="col-lg-8">
                    {items.map(item =>     
                        <Card className="my-4">
                            <CardBody>
                                <CardTitle className="d-flex justify-content-between">
                                    <div><span className="item-data">{item.sku}</span></div>
                                    <div>Price: <span className="item-data">{item.price}€</span></div>
                                </CardTitle>
                                {item.discountPrice ? <CardText className="discount-text">{item.discountCount} for {item.discountPrice}€ </CardText> : <CardText className="discount-text-clear">"-"</CardText>}
                                <CardText>{item.description}</CardText>                                
                            </CardBody>
                            <CardFooter className="card-footer">
                                <a href="#" className="btn btn-warning float-right">Add to Cart</a>
                            </CardFooter>
                        </Card>
                    )}
                </div>
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
                    <h5>Sale Items</h5>
                    {items}
                </div>
            </React.Fragment>
        );
    }
}
