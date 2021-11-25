import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { CartButton } from './CartButtonComponent';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/"><h2>DiscountStore</h2></NavbarBrand>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                    <CartButton/>
                </NavItem>
              </ul>
          </Container>
        </Navbar>
      </header>
    );
  }
}
