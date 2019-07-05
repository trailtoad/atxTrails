import { FETCH_USER } from '../actions/types';

//Authentication Reducer - Will either return null, User Model, or false
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            //User model if logged in or false if not
            return action.payload || false;
            
        default:
            return state;
    }
}; 