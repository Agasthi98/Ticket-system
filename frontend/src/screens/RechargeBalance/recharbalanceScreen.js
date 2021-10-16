import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import FormContainer from '../../components/FormContainer'
import FormContainer2 from '../../components/FormContainer2'
import { LinkContainer } from 'react-router-bootstrap'

const user = JSON.parse(localStorage.getItem('userInfo'))

const RecharbalanceScreen = () => {
  const [myrecharges, setmybookings] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      setloading(true)
      const data = await (
        await axios.post('/api/recharge/userRecharges', {
          userid: JSON.parse(localStorage.getItem('userInfo'))._id,
        })
      ).data
      setmybookings(data)
      setloading(false)
    } catch (error) {
      setloading(false)
      seterror(true)
    }
  }, [])

  const tot = myrecharges.reduce(
    (acc, recharges) => acc + recharges.rechargeAmount,
    0
  )

  const pes = tot / 5000
  const bul = pes * 100
  //   console.log(pes)
  return (
    <>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>error..</h1>
        ) : (
          <>
            <FormContainer2>
              <div style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                <Card
                  style={{
                    width: '500px',
                    paddingBottom: '10px',
                    backgroundColor: '#22303c',
                    color: 'white',
                  }}
                >
                  <Card.Body style={{ fontSize: '20px' }}>
                    <p>Hi,</p>
                    <p>{JSON.parse(localStorage.getItem('userInfo')).fname}</p>
                    <p style={{ fontSize: '30px' }}>Welcome to the Bus App</p>
                  </Card.Body>
                </Card>
              </div>
              <div style={{ paddingTop: '50px', alignContent: 'center' }}>
                <center>
                  <div style={{ width: 300, height: 300 }}>
                    <CircularProgressbar
                      value={bul}
                      text={`${bul}%`}
                      styles={buildStyles({
                        pathColor: '#0af528',
                        textColor: '#ffff',
                        trailColor: '#ffff',
                      })}
                    />
                  </div>
                </center>
                <center>
                  <div
                    style={{
                      paddingTop: '20px',
                      width: '500px',
                      paddingBottom: '20px',
                    }}
                  >
                    <Card
                      style={{
                        backgroundColor: '#22303c',
                        color: 'white',
                      }}
                    >
                      <Card.Body style={{ fontSize: '20px' }}>
                        Account Balance
                      </Card.Body>
                      <Card.Body
                        style={{ fontSize: '50px', fontWeight: 'bold' }}
                      >
                        LKR {tot}.00
                      </Card.Body>
                      <Card.Body>
                        <LinkContainer to='/rechargeacc'>
                          <Button variant='success'>Recharge</Button>
                        </LinkContainer>
                      </Card.Body>
                    </Card>
                  </div>
                </center>
              </div>
              <div style={{ paddingTop: '40px' }}>
                <center>
                  <LinkContainer to='/trpHistory'>
                    <Button variant='success'>TRIP HISTORY</Button>
                  </LinkContainer>{' '}
                  <LinkContainer to='/rechargehistory'>
                    <Button variant='success'>RECHARGE HISTORY</Button>
                  </LinkContainer>{' '}
                  <LinkContainer to='/busIns'>
                    <Button variant='success'>BUS IN</Button>
                  </LinkContainer>
                </center>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </FormContainer2>
          </>
        )}
      </div>
    </>
  )
}

export default RecharbalanceScreen
