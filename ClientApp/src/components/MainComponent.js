import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Home from './HomeComponent';
import Cart from './CartComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true, cartItemsCount:0 };

        //this.updateTable = this.updateTable.bind(this);
        this.onCartChanged = this.onCartChanged.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    /* Callback to reflect a items count change with the Cart */
    onCartChanged(items) {
        this.setState({ cartItemsCount: this.state.cartItemsCount + 1 });
        this.setState({ items : items})
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
                <Home items={this.state.items} loading={this.state.loading} onCartChanged={this.onCartChanged} />
            );
        }

        const CartPage = () => {

            let cartItems = [];
            this.state.items.map(item => { if (item.count > 0) cartItems.push(item); return 0;});
             return (             
                 <Cart cartItemsCount={this.state.cartItemsCount} cartItems={cartItems}/>
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