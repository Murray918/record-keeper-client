import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PasswordUpdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	render() {
		const component = this.props.updateComponent;
		if (component === 'change_email') {
			return (
				<div className="container center">
					<EmailUpdateForm />
				</div>
			);
		} else if (component === 'change_password') {
			return (
				<div className="container center">
					<PasswordUpdateForm />
				</div>
			);
		} else {
			return (
				<div className="container center">
					<div>
						<button>Change Email</button>
					</div>
					<div>
						<button>Change Password</button>
					</div>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		updateComponent: state.user.updateComponent
	};
}

export default connect(mapStateToProps, actions)(UpdateUser);

// 	switch (component) {
// 		case 'change_email':
// 			return (
// 				<div className="container center">
// 					<EmailUpdateForm />
// 				</div>
// 			);
// 		case 'change_password':
// 			return (
// 				<div className="container center">
// 					<PasswordUpdateForm />
// 				</div>
// 			);
// 		//this is what should apear first
// 		default:
// 			return (
// 				<div clasName="container center">
// 					<div>
// 						<button>Change Email</button>
// 					</div>
// 					<div>
// 						<button>Change Password</button>
// 					</div>
// 				</div>
// 			);
// 	}
// }
