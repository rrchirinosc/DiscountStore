import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import StoreItem from './StoreItemComponent';

/* Handles Adding/Removing items from the cart */
function handleCartChange(item, value, cartAddItem, cartRemoveItem) {

    if (item.count < value) {
        return cartAddItem(item, value - item.count);
    }
    else {
        if (item.count > value)
            return cartRemoveItem(item, item.count - value);
        else
            return; // no change
    }
 }

/* Holds the item's adding/removing items to/from the cart control.*/
/* Sits below the cart item's display */
function CartItemFooter({ item, cartAddItem, cartRemoveItem }) {

    return (
        <div className="card-bottom" >
            <div className="input-group float-right">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="itemQuantity">Quantity</label>
                </div>
                <select value={item.count} className="custom-select" id="itemQuantity" onChange={e => handleCartChange(item, e.target.value, cartAddItem, cartRemoveItem)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div >
    );
}

/* Calculates and displays the checkout's subtotal */
function CartSubtotal({ cartItems, cartItemsCount }) {
    
    if (cartItemsCount === 0)
        return (<div></div>);
    else {
        let subTotal = 0.0;
        cartItems.map(item =>
        {
            if (item.discountCount === 0) {
                subTotal += item.count * item.price;
            }
            else {
                subTotal += ((item.count % item.discountCount) * item.price) +
                    parseInt((item.count / item.discountCount), 10) * item.discountPrice;
            }
            return subTotal;
        })

        return (
            <div className="col-lg-4 col-sm-6 checkout d-flex flex-column p-3 mb-5 ">
                <h5>Subtotal ({cartItemsCount} items): {subTotal.toFixed(2)}&#8364;</h5>
                <Link to="/">
                    <Button className="btn btn-warning mt-5">Continue Shopping</Button>
                </Link>
            </div>
        );
    }
}

/* Cart component in charge of displaying and/or modifying the selected items. */
/* It also displays the checkout box */
function Cart(props) {

    const { cartItemsCount, cartItems, cartAddItem, cartRemoveItem } = props;

    if (cartItemsCount === 0) {
        return (
            <div>
                <h3 className="page-header">Your shopping cart is empty</h3>
            </div>
        );
    }
    else {
        // previously cart item with quantity now set to zero still 
        // shows as so this is by design
        return (
            <>
                <div>
                    <h3 className="page-header">Cart</h3>
                </div>
                <div className="d-flex">
                    <div className="col-lg-8">  
                        {cartItems.map(item =>
                            <div key={item.id} className= "cart-item mb-2">
                                <StoreItem item={item} />
                                <CartItemFooter item={item} cartAddItem={cartAddItem} cartRemoveItem={cartRemoveItem} />
                            </div>
                        )}
                    </div>
                    <CartSubtotal cartItems={cartItems} cartItemsCount={cartItemsCount}/>
                </div>
            </>
        );
    }
 }

export default Cart;