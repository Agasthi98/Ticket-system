import { BUS_INSERT_REQUEST, BUS_INSERT_SUCCESS, BUS_INSERT_FAIL } from '../constants/busConstant.js'


export const BusInsertReducer = (state = {}, action) => {
    switch (action.type) {
        case BUS_INSERT_REQUEST:
            return { loading: true }
        case BUS_INSERT_SUCCESS:
            return { loading: false, businfo: action.payload }
        case BUS_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

