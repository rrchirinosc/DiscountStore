import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function onCartItemsChange () {
    alert("cart count changed");
}

function DisplayDiscount({ item }) {

    if (item.discountPrice !== 0) {
        return (
            <CardText className="discount-text">Get {item.discountCount} for {item.discountPrice}&#8364;
            </CardText>
        );
    }
    return null;
}

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
                    (item.count / item.discountCount) * item.discountPrice;
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


function Cart(props) {

    const { cartItemsCount, cartItems } = props;

    if (cartItemsCount === 0) {
        return (
            <div>
                <h3 className="page-header">Your shopping cart is empty</h3>
            </div>
        );
    }
    else {
        return (
            <>
                <div>
                    <h3 className="page-header">Cart</h3>
                </div>
                <div className="d-flex">
                    <div className="col-lg-8">
                        {cartItems.map(item =>
                            <Card key={item.id}>
                                <CardBody>
                                    <CardTitle className="d-flex justify-content-between">
                                        <div><span className="item-data">{item.sku}</span></div>
                                        <div>Price: <span className="item-data">{item.price}&#8364;</span></div>
                                    </CardTitle>
                                    <DisplayDiscount item={item}/>
                                    <CardText>{item.description}</CardText>
                                </CardBody>
                                <CardFooter className="card-footer">
                                    <div className="input-group float-right">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quantity</label>
                                        </div>
                                        <select value={item.count} className="custom-select" id="inputGroupSelect01" onChange={onCartItemsChange}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                    <CartSubtotal cartItems={cartItems} cartItemsCount={cartItemsCount}/>
                </div>
            </>
        );
    }
 }

//class Cart extends Component {
//  static displayName = Cart.name;

//  constructor(props) {
//    super(props);
//    this.state = { currentCount: 0 };
//    this.incrementCounter = this.incrementCounter.bind(this);
//  }

//  incrementCounter() {
//    this.setState({
//      currentCount: this.state.currentCount + 1
//    });
//  }

//  render() {
//    return (
//      <div>
//        <h1>Cart</h1>
//      </div>
//    );
//  }
//}


export default Cart;