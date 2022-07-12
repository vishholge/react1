import React, { useState } from 'react'
import { Container,Row, Col,Card,Button } from 'react-bootstrap'
import './Products.css'


const Products = () => {
    

                // render() {
                //    const {products } = this.state;
                const [products, setProducts] = useState([])
    return (
      <div>

        
        <Container>
            <Row>

                <h1> Wecome to Vish's Shopping App</h1>
                {products.map(product => {
                    return(
                    <Col md = {4}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" 
                            src={product.image} 
                            style = {{ padding: "20px", height: "300px"}}
                        />
                        <Card.Body style={{ textAlign: "start" }}>
                            <Card.Header style={{}}>

                            <Card.Title style={{maginRight: "4px"}}>{product.title.substring(0,20) + ".."}</Card.Title>
                            <Card.Title style={{float: "right",color: "green"}}>{"$" + product.price}</Card.Title>
                            </Card.Header>

                            
                            
                            
                            <Card.Text>
                            {product.description.substring(0,50) + "..."}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                     </Col>
                    )
                })};
                
            </Row>
        </Container>
        
      </div>
    )
  
}
export default Products;
