import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Home from './HomeComponent';
import Cart from './CartComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true, cartItemsCount:0, cartItems: [] };

        this.cartAddItem = this.cartAddItem.bind(this);
        this.cartRemoveItem = this.cartRemoveItem.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    /* Count cart items */
    countCartItems(inCart) {

        let count = 0;
        inCart.map(item => { count += item.count; });

        return count;
    }

    /* Callback to reflect adding items to the Cart */
    //TODO: simplify
    cartAddItem(item, count = 1) {

        let inCart = [...this.state.cartItems];
        let index = inCart.length === 0 ? -1 : this.state.cartItems.findIndex((elem) => elem.id === item.id);

        if (index === -1) {
          
            let anItem = { ...item };
            anItem.count = count;
            // Apply max 5 items per article limit
            //TODO: issue a message
            if (anItem.count > 5) {
                anItem.count = 5;
            }
            inCart.push(anItem);
        }
        else {
            let anItem = { ...inCart[index] };

            anItem.count += count;

            // Apply max 5 items per article limit
            //TODO: issue a message
            if (anItem.count > 5) {
                anItem.count = 5;
            }
            inCart[index] = anItem;
        }
        this.setState({ cartItems : inCart });
        this.setState({ cartItemsCount: this.countCartItems(inCart) });
    }

    /* Callback to reflect removing items from the Cart */
    //TODO: simplify
    cartRemoveItem(item, count = 1) {

        let inCart = [...this.state.cartItems];
        if (inCart.length === 0)
            return; // should show some kind of error

        let index = this.state.cartItems.findIndex((elem) => elem.id === item.id);
        if (index === -1) 
            return; // should show some kind of error

        let anItem = { ...inCart[index] };
        anItem.count = (anItem.Count === 0 || anItem.Count < count) ? 0 : (anItem.count - count);  

        inCart[index] = anItem;

        //TODO: check boundaries!!!!
        this.setState({ cartItems: inCart });
        this.setState({ cartItemsCount: this.countCartItems(inCart) });
    }

    /* Retrieve all available items */
    async fetchItems() {
        const response = await fetch('/api/items');
        const data = await response.json();
        //console.log(await response.text());
        this.setState({ items: data, loading: false });
    }

    render() {
        const HomePage = () => {
            return (
                <Home items={this.state.items} loading={this.state.loading} cartAddItem={this.cartAddItem} />
            );
        }

        const CartPage = () => {

            return (             
                <Cart cartItemsCount={this.state.cartItemsCount} cartItems={this.state.cartItems} cartAddItem={this.cartAddItem} cartRemoveItem={this.cartRemoveItem}/>
            );
        }

        return (
            <div>
                <Layout cartItemsCount={this.state.cartItemsCount} items={this.state.items}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/cart" component={CartPage} />
                        <Redirect to="/" />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default Main;