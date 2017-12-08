import React, {Component} from 'react';

const Authorized = (allowedRoles, user) => {

   return (WrappedComponent) => {

    return class WithAuthorization extends Component {
      render() {
        const {role} = user;
        if (allowedRoles.includes(role)) {
          return <WrappedComponent {...this.props} />
        } else {
          return <h1>No page for you!</h1>
        }
      }
    }
  }
}

export default Authorized;