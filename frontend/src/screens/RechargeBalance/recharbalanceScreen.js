import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { CircularProgressbar } from 'react-circular-progressbar'
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
            <h1>{tot}</h1>
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={bul} text={`${bul}%`} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default RecharbalanceScreen
