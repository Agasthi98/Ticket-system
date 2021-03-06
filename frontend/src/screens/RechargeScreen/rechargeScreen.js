import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import StripeCheckout from 'react-stripe-checkout'

const RechargeScreen = ({ history, match }) => {
  async function tokenHander(token) {
    console.log(token)
    const rechargeDetails = {
      token,
      userid: JSON.parse(localStorage.getItem('userInfo'))._id,
      rechargeAmount: match.params.rechargeAmount,
      paymentMethod: match.params.paymentMethod,
    }

    try {
      const result = await axios.post(
        '/api/recharge/addrecharge',
        rechargeDetails
      )
      console.log(result)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <br />
      <center>
        <h1 style={{ color: 'white' }}>Please confirm the information below</h1>
      </center>
      <div style={{ paddingRight: '300px' }}>
        <FormContainer>
          <Card
            style={{
              backgroundColor: '#22303c',
              width: '900px',
              padding: '80px',
            }}
          >
            <Form>
              <Form.Group controlId='name'>
                <Form.Label>Recharge Amount</Form.Label>
                <Form.Control
                  required
                  disabled
                  type='number'
                  placeholder='Enter room name'
                  value={match.params.rechargeAmount}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='type'>
                <Form.Label>Payment method</Form.Label>
                <Form.Control
                  required
                  disabled
                  type='text'
                  placeholder='Enter max count'
                  value={match.params.paymentMethod}
                ></Form.Control>
              </Form.Group>
            </Form>
            <br />

            <center>
              <style type='text/css'>
                {`
                        .btn-flat {
                              background-color:#ff9900;
                              color: white;
                         }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                  }
                   `}
              </style>
              <StripeCheckout
                Checkout
                amount={match.params.rechargeAmount * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51JPWGjSI37Hyu4LS14ggmcl7QaBe64PshUwoHcOqfMgFrpRqT2jmYQ2VpskMdLGcKUkROnXRy8YZ87FfkEJMSVcw00Os62ys8R'
                currency='LKR'
              >
                <Button style={{ width: '200px' }} type='submit' variant='flat'>
                  PAy
                </Button>
              </StripeCheckout>
            </center>
            <br></br>
          </Card>
        </FormContainer>
      </div>
    </>
  )
}

export default RechargeScreen
