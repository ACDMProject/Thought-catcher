import React from "react";

import Logo from "./Logo.png";


class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="content">
            <div className="image">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <h6 className="slogan">
              a place to write and understand your thoughs...
            </h6>
            <div className="container">
              <ul className="actions">
                <div className="btn-group">
                  <button type="button" className="btn-sign-in">
                    <div>Log in</div>
                  </button>
                  <button type="button" className="btn-sign-up">
                    <span>Sign up</span>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
