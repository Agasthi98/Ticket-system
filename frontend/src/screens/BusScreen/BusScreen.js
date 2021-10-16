import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row, Tab, Nav, Container, Card } from 'react-bootstrap'
import KaduScreen from './177'
import MoraScreen from './158'
import { Link } from 'react-router-dom'


const BusScreen = () => {



    return (

        <>
            <Link to='/' className='btn btn-dark my-3' style={{marginLeft:'20px'}}>
                Go Back
            </Link>
            <Container>
                <h2 style={{ color: 'white', textAlign: 'center', marginBottom:'30px' }}>Select Your Bus Route</h2>

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