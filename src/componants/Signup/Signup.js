import React,{Component} from 'react'
import { Modal ,Button} from 'react-bootstrap';
import { useState } from 'react';


const Signup = () => {
  const [validated, setValidated] = useState(false);

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
      
    </>
  );

}
export default Signup