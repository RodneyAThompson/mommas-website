import React from "react";
import style from "./style.scss";


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src="https://t3.ftcdn.net/jpg/02/14/18/60/360_F_214186001_8o4c4LRkpxCko4EUZpcwrMkkMREVZ0FY.jpg"></img>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                ></input>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
