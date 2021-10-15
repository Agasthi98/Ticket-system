import { BUS_INSERT_REQUEST, BUS_INSERT_SUCCESS, BUS_INSERT_FAIL } from '../constants/busConstant.js'
import axios from 'axios'

export const busAdd = (busId, busStation,price) => async (dispatch,getState) => {
    try {
        dispatch({
            type: BUS_INSERT_REQUEST
        })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post('http://localhost:3500/api/bus/insertBus', { busId, busStation,price },
            config
        )

        dispatch({
            type: BUS_INSERT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('businfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: BUS_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}