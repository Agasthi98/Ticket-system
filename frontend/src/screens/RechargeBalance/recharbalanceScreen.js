import React, { useEffect, useState } from "react";
import axios from "axios";



const user = JSON.parse(localStorage.getItem('userInfo'))

const RecharbalanceScreen = () => {

      const [myrecharges, setmybookings] = useState([]);
      const [loading, setloading] = useState(false);
      const [error, seterror] = useState(false);


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

      const tot = myrecharges.reduce((acc, recharges) => acc + recharges.rechargeAmount, 0)
      console.log(tot)
      return (
            <>
                  <div>
                        {loading ? (
                              <h1>Loading</h1>
                        ) : error ? (
                              <h1>erro..</h1>
                        ) : (
                              // myrecharges.map(recharges => {
                              //       return <div className="row">
                              //             <div className="col-md-6 my-auto">
                              //                   <div className='bs m-1 p-2'>
                              //                         <h1>{recharges.rechargeAmount}</h1>

                              //                   </div>
                              //             </div>
                              //       </div>
                              // })
                              <h1>{tot}</h1>

                        )}


                  </div>
            </>

      )
}

export default RecharbalanceScreen
