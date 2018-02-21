import { ADD_RECORD, SEARCH } from '../actions/types';

export default function recordReducer(state = {}, action) {
	switch (action.type) {
		case ADD_RECORD:
			return { ...state, album: action.payload };
		case SEARCH:
			return { ...state, searchResults: action.payload };
		default:
			return state;
	}
}
