import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import recordReducer from './record_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
	form,
	auth: authReducer,
	records: recordReducer,
	user: userReducer
});

export default rootReducer;
