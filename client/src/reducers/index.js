import { combineReducers } from 'redux';
//Because it's confusing to have reducer as a variable
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
});
