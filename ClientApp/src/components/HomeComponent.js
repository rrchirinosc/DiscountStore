import React from 'react';
import { Button } from 'reactstrap';
import StoreItem from './StoreItemComponent';


/* Add item to the Cart going through the corresponding Main component callback */
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

/* Handles the item's adding to cart. Sits below item's display */
function StoreItemFooter({ items, item, cartAddItem }) {

    return (
        <div className="card-bottom" >
            <Button className="btn btn-warning float-right" onClick={() => addItemToCart(item, cartAddItem)}>Add to Cart</Button>
        </div >
    );
}

/* This component is in charge of displaying the store items and allow adding them to the Cart */
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
                    <div className="page-header">
                        <h3>Sale Articles</h3>
                        <h5>(max 5 items per article)</h5>
                    </div>
                    <RenderStoreItems items={items} cartAddItem={cartAddItem}/>
                </div>
            </>
        );
     }
}

export default Home;

