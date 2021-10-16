import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const user = JSON.parse(localStorage.getItem('userInfo'))

const RechargehistoryScreen = () => {
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


      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(async () => {
            try {
                  setloading(true);
                  const data = await (
                        await axios.post("/api/recharge/userRecharges", {
                              userid: JSON.parse(localStorage.getItem("userInfo"))._id,
                        })
                  ).data;
                  setmybookings(data);
                  setloading(false);
            } catch (error) {
                  setloading(false);
                  seterror(true);
            }
      }, []);

      return (
            <div>
                  {loading ? (
                        <h1>Loading....</h1>
                  ) : error ? (
                        <h1>error.....</h1>
                  ) : (

                        <>
                              <br></br>
                              <center><h1 style={{color:'white'}}>Recharge History</h1></center>
                              <Link to='/' className='btn btn-dark my-3' style={{marginLeft:'20px'}}>
                                    Go Back
                              </Link>
                              <br></br>
                             
                              <Table striped bordered hover variant="dark" responsive className='table-sm' style={{ paddingLeft: '10px' }}>
                                    <thead >
                                          <tr >

                                                <th>EMAIL</th>
                                                <th>DATE & TIME</th>
                                                <th>RECHARGE AMOUNT</th>
                                                <th>PAYMENT METHOD</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {myrecharges.map((recharge) => (
                                                <tr key={recharge._id}>

                                                      <td>{JSON.parse(localStorage.getItem('userInfo')).email}</td>
                                                      <td>{recharge.createdAt}</td>
                                                      <td>{recharge.rechargeAmount}</td>
                                                      <td>{recharge.paymentMethod}</td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </Table>
                        </>
                  )}
            </div>
      )
 
  
}

export default RechargehistoryScreen
