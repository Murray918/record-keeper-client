import { EMAIL_COMPONENT, PASSWORD_COMPONENT } from '../actions/types';

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case EMAIL_COMPONENT:
			return { ...state, updateComponent: action.type };
		case PASSWORD_COMPONENT:
			return { ...state, updateComponent: action.type };
		default:
			return state;
	}
}
