import {
	CHANGE_PASSWORD,
	CHANGE_EMAIL,
	EMAIL_COMPONENT,
	PASSWORD_COMPONENT
} from '../actions/types';

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case CHANGE_PASSWORD:
			return { ...state, changePassMessage: action.payload };
		case CHANGE_EMAIL:
			return { ...state, changeEmailMessage: action.payload };
		case EMAIL_COMPONENT:
			return { ...state, updateComponent: action.type };
		case PASSWORD_COMPONENT:
			return { ...state, updateComponent: action.type };
		default:
			return state;
	}
}
