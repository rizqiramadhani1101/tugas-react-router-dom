import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Galery1 from'../img/gallery-2.jpg'
import Galery2 from'../img/gallery-3.jpg'
import Galery3 from'../img/gallery-4.jpg'

const Galery = () => {
  return (
    <div className=' gallery min-vh-100' id='gallery'>
       <Container>
        <Row className='row-cols-lg-4 row-cols-md-4 row-cols-sm-4 row-cols-1 g-4 '>
            <Col><img src={Galery1} alt="unplash.com" className='w-100'/></Col>
            <Col><img src={Galery2} alt="unplash.com"className='w-100' /></Col>
            <Col><img src={Galery3} alt="unplash.com"className='w-100' /></Col>
           
        </Row>
       </Container>
    </div>
  )
}

export default Galery
