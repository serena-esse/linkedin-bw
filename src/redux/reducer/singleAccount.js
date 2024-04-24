import { PUT_TOKEN } from "../action";
import { GET_FETCH } from "../action";
import { PUT_FETCH } from "../action";
import { PUT_IMG } from "../action";
import { GET_ESPERIENZE } from "../action";
import { GET_ALLPOST } from "../action";



const initialState = {
    apikey: [],
    utente: {},
    esperienze: [],
    post: [],
    

}

const singleAccount = function (state = initialState, action) {
    switch (action.type) {

        case PUT_TOKEN:
            return {
                ...state,
                apikey: [action.payload]
            }

        case GET_FETCH:
            return {
                ...state,
                utente: action.payload
            }
        case PUT_FETCH:
            return {
                ...state,
                utente: action.payload
            }
        case PUT_IMG:
            return {
                ...state,
                utente: action.payload
            }

        case GET_ESPERIENZE:
            return {
                ...state,
                esperienze:action.payload
            }
        case GET_ALLPOST:
            return {
                ...state,
                post:action.payload
            }
        default:
            return state;
    }

}
export default singleAccount;