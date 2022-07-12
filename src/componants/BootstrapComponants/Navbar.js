import React, { Component } from 'react'
import { useState } from 'react'
import { Modal,Button ,Row,Col,InputGroup,} from 'react-bootstrap'

import { Form } from 'react-bootstrap'
import {Container ,Navbar, Nav} from 'react-bootstrap'
import photologo from '../../assests/photo_app.jpg'
import { NavLink } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Confirmpass from '../Signup/Confirmpass'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt,FaKey,FaLock} from "react-icons/fa";





function BootstrapComponant() {
    const [signupShow, setsignupShow] = useState(false);
    const [loginShow, setloginShow] = useState(false);


    const [validated, setValidated] = useState(false);

    const handleSignupClose = () => setsignupShow(false);
    const handleLoginClose = () => setloginShow(false);

    const handleSignupShow = () => setsignupShow(true);
    const handleLoginShow = () => setloginShow(true);

    
   const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
                        <Nav.Link as = {NavLink} to = '/contact'  >Contact Us</Nav.Link>
                                                        
                    </Nav>
                    <Nav>
                       <Nav.Link as = {NavLink} to ='/signup' onClick={handleSignupShow} >signIn</Nav.Link>
                       <Nav.Link  as = {NavLink} to = '/login' onClick={handleLoginShow}>login</Nav.Link>
                       {/* <NavLink
                            to="messages"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Messages
                        </NavLink> */}

                    </Nav>
                    <Modal show={signupShow} onHide={handleSignupClose} style = {{justifyContent:"center", alignItems: "center"}}>
                        <Modal.Header closeButton>
                        <Modal.Title>Please Enter your Details to SignUp</Modal.Title>
                        </Modal.Header>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{padding: "15px",backgroundColor: "azure"}}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label><MdEmail></MdEmail> Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                    type="text"
                                    placeholder="abc@gmail.com"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                                </Form.Group>
                            </Row>
                            <Form.Group className='mb-3' controlId="validationCustom03">
                                <Form.Label><FaPhoneAlt></FaPhoneAlt> Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row className="mb-3">
                                
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label><FaKey></FaKey> Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom05">
                                <Form.Label><FaKey></FaKey> Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="confirm Password" onKeyUp={<Confirmpass/>} required />
                                <Form.Control.Feedback type="invalid">
                                    password doesn't match.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid">
                                    Password Match!!.
                                </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">SignUp</Button>
                            <Button variant="secondary" onClick={handleSignupClose}>
                            Close
                            </Button>
                            </Form>
                        <Modal.Footer>
                        
                        
                        </Modal.Footer>
                    </Modal>
                    <Modal show={loginShow} onHide={handleLoginClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>LogIn Using Mail!!</Modal.Title>
                        
                        </Modal.Header>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} style = {{padding: "15px",backgroundColor: 'azure'}}>
                            <Form.Group  controlId="validationCustomUsername">
                            <Form.Label><MdEmail></MdEmail> Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                type="text"
                                placeholder="abc@gmail.com"
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Please enter a mail.
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className='mb-4' controlId="validationCustom04">
                                    <Form.Label><FaLock></FaLock> Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit">LogIn</Button>
                            <Button variant="secondary" onClick={handleLoginClose}>
                            Close
                            </Button>
                        </Form>
                        <Modal.Footer>
                        
                        </Modal.Footer>
                    </Modal>
                </Navbar.Collapse>
             </Container>

        </Navbar>
        
  </>
    
  )
}

export default BootstrapComponant
