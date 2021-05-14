import React, { Component, createContext } from "react";
import { auth } from "../../base";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
    });
  };
  render() {
    // user : this.state.user
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
