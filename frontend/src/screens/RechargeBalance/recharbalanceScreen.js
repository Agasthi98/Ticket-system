import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

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
            <div style={{ paddingTop: '20px', paddingLeft: '30px' }}>
              <Card
                style={{
                  width: '500px',
                  paddingBottom: '10px',
                }}
              >
                <Card.Body style={{ fontSize: '20px' }}>Hi,</Card.Body>
                <Card.Body style={{ fontSize: '20px' }}>
                  {JSON.parse(localStorage.getItem('userInfo')).fname}
                </Card.Body>
              </Card>
            </div>

            <div style={{ paddingTop: '50px' }}></div>
            <center>
              <div style={{ width: 300, height: 300 }}>
                <CircularProgressbar
                  value={bul}
                  text={`${bul}%`}
                  styles={buildStyles({
                    pathColor: 'gold',
                  })}
                />
              </div>
            </center>
            <center>
              <div
                style={{
                  paddingTop: '10px',
                  width: '500px',
                  paddingBottom: '10px',
                }}
              >
                <Card>
                  <Card.Body style={{ fontSize: '20px' }}>
                    Account Balance
                  </Card.Body>
                  <Card.Body style={{ fontSize: '50px', fontWeight: 'bold' }}>
                    LKR {tot}.00
                  </Card.Body>
                  <Card.Body>
                    <Button variant='warning'>Recharge</Button>
                  </Card.Body>
                </Card>
              </div>
            </center>

            <a href='/rechargeacc'>
              <button>Recharge</button>{' '}
            </a>

            <a href='/balance'>
              <button>Balance</button>{' '}
            </a>

            <a href='/rechargehistory'>
              <button>Recharge History</button>{' '}
            </a>
            <a href='/busIns'>
              <button>bus</button>{' '}
            </a>

            <a href='/trpHistory'>
              <button>Trip</button>{' '}
            </a>
          </>
        )}
      </div>
    </>
  )
}

export default RecharbalanceScreen
