import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="nav-bar">
            <Navbar variant="dark" className="nav">
                <Navbar.Brand href="#home">
                    <Image
                        alt="logo"
                        src={logo}
                        width="50"
                        height="30"
                        className="" />
                        Brain Trainers Academy
                </Navbar.Brand>
                <Nav className="mr-auto " >
                    <Nav.Link href="#home">Programs</Nav.Link>
                    <Nav.Link href="#career">Career</Nav.Link>
                    <Nav.Link href="#resources">Resources</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;