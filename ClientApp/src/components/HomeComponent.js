import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';

function DisplayDiscount({ item }) {

    if (item.discountPrice !== 0) {
        return (
            <CardText className="discount-text">Get {item.discountCount} for {item.discountPrice}&#8364;
            </CardText>
        );
    }
    return null;
}

function addItemToCart(items, item, onCartChanged) {

    item.count++;
    onCartChanged(items);
}

/* Render sale items */
function RenderItemsTable({ items, onCartChanged }) {

   return (
        <div className="col-lg-8">
           {items.map(item =>
               <Card key={item.id} className="my-4">
                    <CardBody>
                        <CardTitle className="d-flex justify-content-between">
                            <div><span className="item-data">{item.sku}</span></div>
                           <div>Price: <span className="item-data">{item.price}&#8364;</span></div>
                        </CardTitle>
                        <DisplayDiscount item={item}/>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                    <CardFooter className="card-footer">
                        <Button className="btn btn-warning float-right" onClick={() => addItemToCart(items, item, onCartChanged)}>Add to Cart</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}


function Home(props) {

    const { items, loading, onCartChanged } = props;

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    else {    
        return (
            <React.Fragment>
                <div className="col-lg-12">
                    <h3 className="page-header">Sale Items</h3>                
                    <RenderItemsTable items={items} onCartChanged={onCartChanged}/>
                </div>
            </React.Fragment>
        );
     }
}

export default Home;

