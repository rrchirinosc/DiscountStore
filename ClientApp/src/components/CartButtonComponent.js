import React from 'react';
import { Link } from 'react-router-dom';


function CartButton(props) {
    const { cartItemsCount } = props;

    return (
        <Link to="/cart">
            <div className="d-flex cart-button">
                <h4 className="p-2">Cart</h4>
                <h4 className="cart-items-count p-2">{cartItemsCount}</h4>
            </div>
        </Link>
    );
}

export default CartButton;

