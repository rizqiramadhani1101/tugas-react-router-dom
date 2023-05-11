import React from 'react'
import {Container, Row,Col} from "react-bootstrap";

const Home = () => {
  return (
    <div className='Home min-vh-500 w-100'>
       <Container>
        <Row>
            <Col className='text-white text-center'>
                <h1> Belajar Router DOM </h1>
                <h2 className='text-white-50'> Bersama Eduwork</h2>
                <input  className='input' placeholder='Cari Materi disini'/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
