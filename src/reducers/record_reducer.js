import {
	ADD_RECORD,
	SEARCH,
	VIEW_USER_COLLECTION,
	REMOVE_RECORD
} from '../actions/types';

export default function recordReducer(state = {}, action) {
	switch (action.type) {
		case ADD_RECORD:
			return { ...state, recordMessage: action.payload };
		case REMOVE_RECORD:
			return { ...state, recordMessage: action.payload };
		case SEARCH:
			return { ...state, searchResults: action.payload };
		case VIEW_USER_COLLECTION:
			return { ...state, userCollection: action.payload };
		default:
			return state;
	}
}
