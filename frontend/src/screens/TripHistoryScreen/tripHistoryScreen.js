import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TripHistoryScreen = () => {
  const [myTrips, setMyTrips] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      setloading(true)
      const data = await (
        await axios.post('/api/bus/userTrips', {
          userid: JSON.parse(localStorage.getItem('userInfo'))._id,
        })
      ).data
      setMyTrips(data)
      setloading(false)
    } catch (error) {
      setloading(false)
      seterror(true)
    }
  }, [])

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>error.....</h1>
      ) : (
        <>
          <br></br>
          <center>
            <h1 style={{color:'white'}}>Trip History</h1>
          </center>
          <Link to='/balance' className='btn btn-dark my-3'>
            Go Back
          </Link>
          <br></br>

          <Table
            striped
            bordered
            hover
            variant='dark'
            responsive
            className='table-sm'
            style={{ paddingLeft: '10px' }}
          >
            <thead>
              <tr>
                <th>EMAIL</th>
                <th>BUS ID</th>
                <th>BUS STATION</th>
                <th>TIME</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              {myTrips.map((trip) => (
                <tr key={trip._id}>
                  <td>{JSON.parse(localStorage.getItem('userInfo')).email}</td>
                  <td>{trip.busId}</td>
                  <td>{trip.busStation}</td>
                  <td>{trip.createdAt}</td>
                  <td>{trip.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  )
}

export default TripHistoryScreen
