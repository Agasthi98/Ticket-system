import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row, Tab, Nav, Container, Card } from 'react-bootstrap'
import KaduScreen from './177'
import MoraScreen from './158'
import { Link } from 'react-router-dom'


const BusScreen = () => {



    return (

        <>

            <Container className='mt-4' >
                <h2 style={{color:'white', textAlign:'center'}}>Select Your Bus Route</h2>
                <Link to='/balance' className='btn btn-dark my-3'>
                    Go Back
                </Link>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3} >

                            <Nav className='nav' variant='pills' className="flex-column">
                                <Nav.Item className='mt-4' >
                                    <Nav.Link eventKey="first">177 Kaduwela-Kollupitiya</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='mt-4' >
                                    <Nav.Link eventKey="second">158 Moratuwa-Piliyandala</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </Col>

                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" style={{ color: 'white' }}>
                                    <KaduScreen />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" style={{ color: 'white' }}>
                                    <MoraScreen />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        </>
    )
}

export default BusScreen