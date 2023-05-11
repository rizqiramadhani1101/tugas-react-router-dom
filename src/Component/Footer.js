import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer pb-3 pt-4'>
       <Container>
        <Row>
            <Col>
            <h3 className='fw-bold text-white'> Eduwork  </h3>
            </Col>
            <Col className='text-end'>
            <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
            <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3  mx-2"></i>
            <i class="fa-brands fa-linkedin text-white fs-1 mx-lg-3  mx-2"></i>
            <i class="fa-brands fa-twitter text-white fs-1 mx-lg-3  mx-2"></i>
            </Col>
        </Row>

        <Row>
            <Col>
            <p className='text-white text-center'> &copy; Copyright By Rizqi Ramadhani</p>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Footer
