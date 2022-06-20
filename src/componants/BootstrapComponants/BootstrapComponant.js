import React, { Component } from 'react'

import { Form } from 'react-bootstrap'
import {Container ,Navbar, Nav} from 'react-bootstrap'


function BootstrapComponant() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                                                        
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
