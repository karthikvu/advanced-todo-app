import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


export default function withAuth(WrappedComponent, allowedRoles) {
    class AuthorizedContainer extends React.Component {
        render() {
        console.log("container : ", this.props, allowedRoles)
        const user = this.props.session.user;
        return user ? <WrappedComponent {...this.props}/> : <Redirect to="/login" />
      }
    }

    
    const mapStateToProps = state => ({
        session: state.session
    })
    return  connect(mapStateToProps)(AuthorizedContainer);
  }