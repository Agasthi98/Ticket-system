import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row, Tab, Nav, Container } from 'react-bootstrap'
import KaduScreen from './177'
import MoraScreen from './158'


const BusScreen = () => {



    return (

        <>

            <Container className='mt-4'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">177 Kaduwela-Kollupitiya</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">158 Moratuwa-Piliyandala</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <KaduScreen/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <MoraScreen/>
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