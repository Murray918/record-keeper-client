import axios from 'axios';
import {
	UNAUTH_USER,
	AUTH_USER,
	AUTH_ERROR,
	FETCH_DATA,
	LOADING,
	SEARCH,
	ADD_RECORD
} from './types';
//localhost url
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function(dispatch) {
		// submit email and password to server
		const request = axios.post(`${ROOT_URL}/signin`, { email, password });
		request
			.then(response => {
				// -Save the JWT token
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user', email);
				// -if request is good, we need to update state to indicate user is authenticated
				dispatch({
					type: AUTH_USER,
					payload: email
				});
			})

			// If request is bad...
			// -Show an error to the user
			.catch(() => {
				dispatch(authError('bad login info'));
			});
	};
}

export function signoutUser() {
	localStorage.removeItem('token');
	localStorage.removeItem('user');
	return {
		type: UNAUTH_USER
	};
}

export function signupUser({ email, password, passwordConfirmation }) {
	return function(dispatch) {
		axios
			.post(`${ROOT_URL}/signup`, { email, password, passwordConfirmation })
			.then(response => {
				dispatch({
					type: AUTH_USER,
					payload: email
				});

				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user', email);
			})
			.catch(({ response }) => {
				dispatch(authError(response.data.error));
			});
	};
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function fetchData() {
	return function(dispatch) {
		axios
			.get(`${ROOT_URL}/spotify/album/Bitches%20Brew`, {
				headers: { authorization: localStorage.getItem('token') }
			})
			.then(response => {
				console.log(response.data);
				dispatch({
					type: FETCH_DATA,
					payload: response.data
				});
			});
	};
}
//TODO let redux know our data is loading
export function isLoading() {
	return {
		type: LOADING
	};
}
//TODO get data from spotify api dynamically
export function search() {
	return {
		type: SEARCH
	};
}

//TODO add record to the database
export function addRecord() {
	//we need to have a fetch with our auth and our record to add and a user email
	console.log(AUTH_USER);
	// dispatch({
	// 	type: ADD_RECORD
	// });
}
