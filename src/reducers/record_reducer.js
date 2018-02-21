import { ADD_RECORD } from '../actions/types';

export default function recordReducer(state = {}, action) {
	switch (action.type) {
		case ADD_RECORD:
			return { ...state, email: action.payload, album: actions.payload };
		default:
			return state;
	}
}
