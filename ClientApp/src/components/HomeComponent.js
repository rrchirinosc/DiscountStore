import React from 'react';
import { Button } from 'reactstrap';
import StoreItem from './StoreItemComponent';


function StoreItemFooter({ items, item, cartAddItem }) {

    return (
        <div className="card-bottom" >
            <Button className="btn btn-warning float-right" onClick={() => addItemToCart(item, cartAddItem)}>Add to Cart</Button>
        </div >
    );
}

function addItemToCart(item, cartAddItem) {

    cartAddItem(item);
}

/* Render sale items */
function RenderStoreItems({ items, cartAddItem }) {

   return (
        <div className="col-lg-8">
           {items.map(item =>
               <div key={item.id} className="cart-item mb-2">
                   <StoreItem item={item} />
                   <StoreItemFooter items={items} item={item} cartAddItem={cartAddItem}/>
                </div>
            )}
        </div>
    );
}


function Home(props) {

    const { items, loading, cartAddItem } = props;

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    else {    
        return (
            <>
                <div className="col-lg-12">
                    <h3 className="page-header">Sale Articles<h5>(max 5 items per article)</h5></h3>
                    <RenderStoreItems items={items} cartAddItem={cartAddItem}/>
                </div>
            </>
        );
     }
}

export default Home;

