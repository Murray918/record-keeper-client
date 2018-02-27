import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_DATA,
	SEARCH,
	CHANGE_PASSWORD,
	CHANGE_EMAIL
} from '../actions/types';

export default function formReducer(state = {}, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, error: '', authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
		case FETCH_DATA:
			return { ...state, message: action.payload };
		case SEARCH:
			return { ...state, search: true };
		case CHANGE_PASSWORD:
			return { ...state, changePassMessage: action.payload };
		case CHANGE_EMAIL:
			return { ...state, changeEmailMessage: action.payload };
		default:
			return state;
	}
}
