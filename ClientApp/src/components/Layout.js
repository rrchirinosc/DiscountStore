import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

/* App skeleton */
function Layout(props) {

   const { children, cartItemsCount, items } = props;

    return (
        <div>
            <NavMenu cartItemsCount={cartItemsCount} items={items}/>
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default Layout;
