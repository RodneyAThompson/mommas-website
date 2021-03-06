import "../App.scss";
import { Login } from "./Login";
import { Register } from "./Register";
import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.RightSide.classList.add("right");
  }

  // signInUser() {
  //   this.setState({loggedIn: !this.state.loggedIn})
  // }

  changeState() {
    const { isLoginActive } = this.state;
    if (isLoginActive) {
      this.RightSide.classList.remove("right");
      this.RightSide.classList.add("left");
    } else {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.add("right");
    }

    this.setState({ isLoginActive: !isLoginActive });
    console.log ('stateChange')
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "Login" : "Register";

    return (
      <div className="App">
        <div className="Login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLoginActive && (
              <Login containerRef={(ref) => (this.current = ref)} signInUser={this.props.setLoggedIn}/>
            )}
            {!isLoginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.RightSide = ref)}
            handleClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={() => {props.handleClick()}}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginPage;