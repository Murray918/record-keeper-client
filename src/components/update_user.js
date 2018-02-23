import React from 'react';
import { connect } from '';
import * as actions from '../actions';
import PasswordUPdateForm from './password_update_form';
import EmailUpdateForm from './email_update_form';

class UpdateUser extends Component {
	render() {
      //get the state and dry it out
      const component = this.props.updateComponent;
      //plug state into the cnditional switch
		switch (component) {
      case conponent === 'change_email':
          return (<div><EmailUpdateForm/></div>);
      case copmonent === 'change_password':
          return (<div><PasswordUpdateForm /></div>)
          //this is what should apear first
      default:
        return(
        <div clasName = 'container center'>
          <div><button>Change Email</button></div>
          <div><button>Change Password</button></div>
        </div>
    )
	}
}

function mapStateToProps(state){
  updateComponent : state.user.updateComponent
}

export default connetct(mapStateToProps, actoins)(UpdateUser);
