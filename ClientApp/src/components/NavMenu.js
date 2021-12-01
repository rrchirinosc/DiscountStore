import React from 'react';
import { Container, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartButton from './CartButtonComponent';
import '../shared/NavMenu.css';

function NavMenu(props) {
    const { cartItemsCount } = props;

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-bk" light>
                <Container>
                    <NavbarBrand tag={Link} to="/"><h2>DiscountStore</h2></NavbarBrand>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <CartButton cartItemsCount={cartItemsCount}/>
                        </NavItem>
                    </ul>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavMenu;

