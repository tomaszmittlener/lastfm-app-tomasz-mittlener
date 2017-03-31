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

        <div className="page__main-container__title">
          <span className="page__main-container__title__text">Welcome to the last.fm top tracks history app!</span>
        </div>

        <div className="input-container">
          <form className="input-container__form" onSubmit={this._onSubmit.bind(this)}>
            <input className="input-container__input" type="text" placeholder="enter username" onChange={this._onUsernameInput.bind(this)} />
          </form>
        </div>
      </Page>
    )
  }
}

export default HomePage;
