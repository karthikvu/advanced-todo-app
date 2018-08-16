import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


export default function withAuth(WrappedComponent, allowedRoles) {
    class AuthorizedContainer extends React.Component {
        render() {
        console.log("container : ", this.props, allowedRoles)
        const user = this.props.session.user;
        const isAllowed = allowedRoles.indexOf(user.role) > -1;
        console.log(">>> isAllowed", isAllowed)
        if(!user){
            return <Redirect to="/login" />;
        } else {
            return isAllowed ? <WrappedComponent {...this.props}/> : <Redirect to="/" />;
        }
      }
    }

    
    const mapStateToProps = state => ({
        session: state.session
    })
    return  connect(mapStateToProps)(AuthorizedContainer);
  }