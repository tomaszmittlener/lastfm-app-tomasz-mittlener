import React from 'react';
import Page from '../components/Page';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  _onSubmit(e) {
    this.props.history.push(`/toptracks/${this.state.username}`);
    e.preventDefault();
  }

  _onUsernameInput(e){
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return(
      <Page className="homePage">
        <div className="input-container">
          <form className="input-container__form" onSubmit={this._onSubmit.bind(this)}>
            <input className="input-container__input" type="text" placeholder="enter username" onChange={this._onUsernameInput.bind(this)} />
            <input className="input-container__submit" type="submit" value="Submit"/>
          </form>
        </div>
      </Page>
    )
  }
}

export default HomePage;
