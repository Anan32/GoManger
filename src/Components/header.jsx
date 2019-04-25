import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {
    render() {
        return (
    <div>
        <Navbar style={{backgroundColor: "orange"}} color="faded" light>
          <NavbarBrand href="/" className="mr-auto">GO-Manger</NavbarBrand>    
        </Navbar>
    </div>
        );
    }
}