import React from 'react';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: []
    };
  }

  render(){
    return(
      <div className="main-container">
        <div className="homePage-sidebar-left"/>
        <div className="homePage-input-container">

          <form className="username-form">
            <input className="username-input" type="text" placeholder="enter username"/>
            <input className="username-submit" type="submit" value="Submit"/>
          </form>

        </div>
        <div className="homePage-sidebar-right"/>
      </div>
    )
  }
}

export default HomePage;
