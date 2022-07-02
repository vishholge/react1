import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import {Container ,Navbar, Nav} from 'react-bootstrap'
import photologo from '../../assests/photo_app.jpg'



function BootstrapComponant() {
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
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#about">AboutUs</Nav.Link>
                                                        
                    </Nav>
                    <Nav>
                       <Nav.Link href="#home">signIn</Nav.Link>
                       <Nav.Link href="#link">login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
             </Container>

        </Navbar>
        
  </>
    
  )
}

export default BootstrapComponant
