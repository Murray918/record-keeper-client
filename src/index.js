import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactRouter from 'react-router';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
//If we have a token, consider the user to be signed in
if (token) {
	// We need to update application state
	store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/signin" component={Signin} />
					<Route path="/signout" component={Signout} />
					<Route path="/signup" component={Signup} />
					<Route path="/feature" component={RequireAuth(Feature)} />
				</Switch>
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
