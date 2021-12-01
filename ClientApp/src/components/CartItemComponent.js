import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';

function CartItem(props) {

    const { items } = props;

    return (
        <div className="col-lg-8">
            {items.map(item =>
                <Card key={item.id}>
                    <CardBody>
                        <CardTitle className="d-flex justify-content-between">
                            <div><span className="item-data">{item.sku}</span></div>
                            <div>Price: <span className="item-data">{item.price}&#8364;</span></div>
                        </CardTitle>
                        <DisplayDiscount item={item} />
                        <CardText>{item.description}</CardText>
                    </CardBody>                    
                </Card>
            )}
        </div>
        );
}
