import React, { Component } from 'react';

export class CartButton extends Component {
    static displayName = CartButton.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
    }

    render() {
        return (
            <a href="/cart">
                <div className="d-flex cart-button">                
                    <h6 className="p-2">Cart</h6>
                    <h6 className="cart-items-count p-2">4</h6>                
                </div>
            </a>
        );
    }
}