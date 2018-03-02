import {
	EMAIL_COMPONENT,
	PASSWORD_COMPONENT,
	DROPDOWN_SHOW,
	DROPDOWN_HIDE
} from '../actions/types';

export default function userReducer(state = { menu: false }, action) {
	switch (action.type) {
		case EMAIL_COMPONENT:
			return { ...state, updateComponent: action.type };
		case PASSWORD_COMPONENT:
			return { ...state, updateComponent: action.type };
		case DROPDOWN_SHOW:
			return { ...state, menu: true };
		case DROPDOWN_HIDE:
			return { ...state, menu: false };
		default:
			return state;
	}
}
