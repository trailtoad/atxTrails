import axios from 'axios';
import { FETCH_USER } from './types';

//Whenever action creator is called, it will return a function, redux-thunk will auto call it with the dispatch
export const fetchUser = () => async dispatch => {
    //GET request to the backend server API
    const res = await axios.get('/api/current_user')

    //When we have our response, we will dispatch
    dispatch({ type: FETCH_USER, payload: res.data })
};

