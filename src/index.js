import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER } from './actions/types';
//components used
import Header from './components/header';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Search from './components/search';
import User from './components/user';
import { PrivateSearchRoute } from './components/auth/require_auth_search';
import { PrivateUserRoute } from './components/auth/require_auth_user';
//styling and css
import './style/style.css';
import './style/skeleton.css';
import './style/normalize.css';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(reduxThunk))
);
const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Header>
					<Route path="/" exact={true} component={Welcome} />
					<Route path="/signin" component={Signin} />
					<Route path="/signout" component={Signout} />
					<Route path="/signup" component={Signup} />
					<PrivateSearchRoute path="/Search" component={Search} />
					<PrivateUserRoute path="/User" component={User} />
				</Header>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
