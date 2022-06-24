import React, { useState } from 'react'
import { useEffect } from 'react'
import axios, { Axios } from 'axios'
import { Col, Container ,Row,Card,Button,Anchor,Spinner} from 'react-bootstrap'
import './Photo.css'


export default function Photo() {
    const [photos,setPhotos]= useState([
        {
          "id": "0",
          "author": "Alejandro Escamilla",
          "width": 5616,
          "height": 3744,
          "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
          "download_url": "https://picsum.photos/id/0/5616/3744"
        },
       ])
    // useEffect(() => {
    //     axios.get("https://picsum.photos/v2/list")
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // },[])
    useEffect( () => {
        const getphotos = async () => {
            try{
                const res = await axios.get("https://picsum.photos/v2/list");
               
            }catch(err){
              
            }
        }
        getphotos();
    })

   
  return (
   
    <Container>
        <Row>
            
            { photos.length ? photos.map((photo) => {
                     return(
                    <Col md = {4} className = "mt-4" key = {photo.id}>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img height={203} variant="top" src={photo.download_url} />
                            <Card.Body className='cardBody'>
                                <Card.Title>Random photo</Card.Title>
                                <Card.Text>
                                {photo.author}
                                </Card.Text>
                                <Button variant="dark"><Anchor href= {photo.url} style = {{ color: "white",textDecoration: "none"}} target = "_blank" >View</Anchor></Button>
                            </Card.Body>
                    </Card>
               </Col>)
            } ):<div><Spinner animation="border" /></div>}
            
        </Row>
    </Container>
  )
}
