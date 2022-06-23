import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/' >
                    <h1>BeSpoked Bikes</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/products' activeStyle>
                        Products
                    </NavLink>
                    <NavLink to='/salespersons' activeStyle>
                        Salespersons
                    </NavLink>
                    <NavLink to='/managers' activeStyle>
                        Managers
                    </NavLink>
                    <NavLink to='/customers' activeStyle>
                        Customers
                    </NavLink>
                    <NavLink to='/sales' activeStyle>
                        Sales
                    </NavLink>
                    <NavLink to='/discount' activeStyle>
                        Discount
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;