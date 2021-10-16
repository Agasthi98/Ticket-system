import React, { useState, useEffect } from 'react'
import FormContainer from '../../components/FormContainer'
import { Form, Button, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import visa from '../RechargeFormScreen/VisaLogo.png'
import master from '../RechargeFormScreen/master.png'

const RechargeFormScreen = () => {
  const [rechargeAmount, setRechargeAmount] = useState()
  const [paymentMethod, setPaymentMethod] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ paddingRight: '400px' }}>
      <FormContainer>
        <Card
          style={{
            backgroundColor: '#22303c',
            width: '900px',
            padding: '60px',
          }}
        >
          <h1 style={{ color: 'white' }}>RECHARGE YOUR ACCOUNT</h1>
          <br />
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='rechargeAmount'>
              <Form.Label as='legend'>Recharge Amount</Form.Label>
              <Form.Control
                required
                type='number'
                placeholder='Enter recharge amount'
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            {/* <Form.Group controlId='paymentMethod'>
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Control required
                                          type='text'
                                          placeholder='Enter paymnet method'
                                          value={paymentMethod}
                                          onChange={(e) => setPaymentMethod(e.target.value)}
                                    ></Form.Control>
                              </Form.Group> */}

            <Form.Group>
              <Form.Label as='legend'>Select Payment Method</Form.Label>

              <Col>
                <Form.Check
                  type='radio'
                  label='Visa'
                  id='dhl'
                  name='paymentMethod'
                  value='Visa'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
                <img
                  src={visa}
                  style={{ width: '10%', height: '20%', marginLeft: '10px' }}
                />

                <Form.Check
                  type='radio'
                  label='Master'
                  id='post'
                  name='paymentMethod'
                  value='Master'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
                <img
                  src={master}
                  style={{ width: '10%', height: '20%', marginLeft: '10px' }}
                />
              </Col>
            </Form.Group>
            <br />

            <center>
              <LinkContainer
                to={`/recharge/${rechargeAmount}/${paymentMethod}`}
              >
                <Button className='btn btn-outline-success'>NEXT</Button>
              </LinkContainer>
            </center>
            <br></br>
          </Form>
        </Card>
      </FormContainer>
    </div>
  )
}

export default RechargeFormScreen
