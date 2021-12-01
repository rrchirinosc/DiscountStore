import React from 'react';
import { Button } from 'reactstrap';
import StoreItem from './StoreItemComponent';


function StoreItemFooter({ items, item, onCartChanged }) {

    return (
        <div className="card-bottom" >
            <Button className="btn btn-warning float-right" onClick={() => addItemToCart(items, item, onCartChanged)}>Add to Cart</Button>
        </div >
    );
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
               <div key={item.id} className="cart-item mb-2">
                   <StoreItem item={item} />
                   <StoreItemFooter items={items} item={item} onCartChanged={onCartChanged}/>
                </div>
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

