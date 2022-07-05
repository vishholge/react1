import React, { Component } from 'react'
import { useState } from 'react'

import { Form } from 'react-bootstrap'
import {Container ,Navbar, Nav} from 'react-bootstrap'
import photologo from '../../assests/photo_app.jpg'
import { NavLink } from 'react-router-dom'
import Signup from '../Signup/Signup'




function BootstrapComponant() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                
                <img
                    alt=""
                    src={photologo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{borderRadius: "50%"}}
                />{' '}
                <Navbar.Brand href="#home">Photo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  as = {NavLink} to = '/' >Home</Nav.Link>
                        <Nav.Link as = {NavLink} to = '/about'  >AboutUs</Nav.Link>
                                                        
                    </Nav>
                    <Nav>
                       <Nav.Link as = {NavLink} to ='/signup' onClick={<Signup />} >signIn</Nav.Link>
                       <Nav.Link  as = {NavLink} to = '/login'>login</Nav.Link>
                       {/* <NavLink
                            to="messages"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Messages
                        </NavLink> */}

                    </Nav>
                </Navbar.Collapse>
             </Container>

        </Navbar>
        
  </>
    
  )
}

export default BootstrapComponant
