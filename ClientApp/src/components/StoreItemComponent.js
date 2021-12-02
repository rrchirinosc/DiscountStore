import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


/* Renders the item discount if any */
function DisplayDiscount({ item }) {

    if (item.discountPrice !== 0) {
        return (
            <CardText className="discount-text">Get {item.discountCount} for {item.discountPrice}&#8364;
            </CardText>
        );
    }
    return null;
}

/* Component that renders store item with all the pertinent info about it */
function StoreItem(props) {

    const { item } = props;

    return (
           <Card>
                <CardBody>
                    <CardTitle className="d-flex justify-content-between">
                        <div><span className="item-data">{item.sku}</span></div>
                        <div>Price: <span className="item-data">{item.price}&#8364;</span></div>
                    </CardTitle>
                    <DisplayDiscount item={item} />
                    <CardText>{item.description}</CardText>
                </CardBody>                    
            </Card>
        );
}

export default StoreItem;
