import React from 'react';
import { connect } from '';
import * as actions from '../actions';
import PasswordUPdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	render() {
		// TODO condictionally choose the component that will go in the return
		return <div>{/* TODO render the right component here  */}</div>;
	}
}

export default connetct(null, actoins)(UpdateUser);
