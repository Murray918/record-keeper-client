import { combineReducers } from 'redux';
//with es6 we can rename what we are importing by useing the as operator
//this is very helplful here because we do not want a reducer named reducer floating around in the index of our reducers
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import msg from './message_reducer';

const rootReducer = combineReducers({
	form,
	auth,
	msg
});

export default rootReducer;
