import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER } from './actions/types';
//components used
import Header from './components/header';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import { PrivateRoute } from './components/auth/require_auth';
import Feature from './components/feature';
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
			<div className="container">
				<Header />
				<Route path="/" exact={true} component={Welcome} />
				<Route path="/signin" component={Signin} />
				<Route path="/signout" component={Signout} />
				<Route path="/signup" component={Signup} />
				<PrivateRoute path="/feature" component={Feature} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
