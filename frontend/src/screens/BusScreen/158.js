import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row, Tab, Nav, Container, Dropdown, SplitButton, DropdownButton } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MoraScreen = ({ location, history }) => {


    const [busId, setId] = useState('158 - Moratuwa - Piliyandala')
    const [busStation, setStation] = useState('')

   



    const submitHandler = (e) => {
        e.preventDefault()
       
    }


    return (

        <>
           
            <Container>
                <h1 style={{ marginBottom: '30px', color:'white' }}>158 - Moratuwa - Piliyandala</h1>

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='busId'>
                        <Form.Label>Bus Route</Form.Label>
                        <Form.Control style={{ height: '40px' }}
                            type='text'
                            placeholder='Enter Bus Route'
                            value={busId}
                            onChange={(e) => setId(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    

                    <Form.Group controlId='busStation'>
                        <Form.Label className='mt-3'>Select Get In Location</Form.Label>
                        <Form value={busStation} onChange={(e) => setStation(e.target.value)}>
                            <select style={{width:'100%'}}>
                                <option value=''>Select Location</option>
                                <option value='Rawthawatta'>Rawthawatta</option>
                                <option value='Moratumulla'>Moratumulla</option>
                                <option value='Suwarapola'>Suwarapola</option>
                            </select>
                        </Form>
                    </Form.Group>

                    {/* <DropdownButton value={busStation}onChange={(e) => setStation(e.target.value)} className='mt-4' variant='dark' id="dropdown-item-button" title="Dropdown button">
                        <Dropdown.Item as="button" value="Rawthawatta">Rawthawatta</Dropdown.Item>
                        <Dropdown.Item as="button" value="Moratumulla">Moratumulla</Dropdown.Item>
                        <Dropdown.Item as="button" value="Suwarapola">Suwarapola</Dropdown.Item>
                    </DropdownButton> */}
                    
                    <LinkContainer to = {`/tripAmount/${busId}/${busStation}`}>
                    <Button className='mt-3' type='submit' variant='dark'  >
                        Confirm
                    </Button>
                    </LinkContainer>
                </Form>

            </Container>


        </>
    )
}

export default MoraScreen