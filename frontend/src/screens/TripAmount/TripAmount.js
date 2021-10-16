import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { busAdd } from '../../actions/busAction'
import { Link } from 'react-router-dom'

const TripAmount = ({ match, history }) => {

    var price = 0

    const dispatch = useDispatch()

    const [busId, setBusId] = useState(match.params.busId)

    const [busStation, setBusStation] = useState(match.params.busStation)



    const BusIns = useSelector(state => state.BusIns)
    const { loading, error, businfo } = BusIns

    useEffect(() => {
        if (businfo) {
            history.push('/')

        }
    }, [history, businfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(busAdd(
            busId,
            busStation,
            price
        ))
    }


    if (match.params.busStation === 'Moratumulla') {
        price = 200

    } else if (match.params.busStation === 'Rawthawatta') {
        price = 100

    } else if (match.params.busStation === 'Suwarapola') {
        price = 300

    } else if (match.params.busStation === 'Malabe') {
        price = 100

    } else if (match.params.busStation === 'Batharamulla') {
        price = 200

    } else if (match.params.busStation === 'Boralla') {
        price = 300

    }

    return (
        <div>
            <Link to='/busIns' className='btn btn-dark my-3' style={{marginLeft:'20px'}}>
                    Go Back
                </Link>
            <FormContainer>
                
                <h1 style={{ color: 'white' }}>trip summary</h1>


                <Form onSubmit={submitHandler} >
                    <Form.Group controlId='bus'>
                        <Form.Label>Bus Route</Form.Label>
                        <Form.Control
                            type='bus'
                            placeholder=''
                            value={busId}
                            onChange={(e) => setBusId(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='station' className='mt-2'>
                        <Form.Label>Bus Station</Form.Label>
                        <Form.Control
                            type='station'
                            placeholder=''
                            value={busStation}
                            onChange={(e) => setBusStation(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price' className='mt-2'>
                        <Form.Label>Price </Form.Label>
                        <Form.Control
                            type='price'
                            placeholder=''
                            value={price}
                        ></Form.Control>
                    </Form.Group>


                    <Button className='mt-3' type='submit' variant='dark'  >
                        Confirm
                    </Button>
                </Form>
            </FormContainer>
        </div>
    )
}

export default TripAmount
