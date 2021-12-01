import React from 'react';
import { Link } from 'react-router-dom';


function CartButton(props) {
    const { cartItemsCount } = props;

    return (
        <Link to="/cart">
            <div className="d-flex cart-button">
                <h5 className="p-2">Cart</h5>
                <h5 className="cart-items-count p-2">{cartItemsCount}</h5>
            </div>
        </Link>
    );
}

export default CartButton;

