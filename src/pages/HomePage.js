import React from 'react';
import Page from '../components/Page';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      isSubmitDisabled: true,
      onSubmit: this._onSubmit.bind(this)
    };
  }

  componentDidMount() {
    document.getElementById('form').addEventListener('submit', this.state.onSubmit);
  }

  componentWillUnmount() {
    document.getElementById('form').removeEventListener('submit', this.state.onSubmit);
  }

  _onSubmit(e) {
    this.props.history.push(`/toptracks/${this.state.username}`);
    e.preventDefault();
  }

  _onUsernameInput(e){
    this.setState({
      username: e.target.value,
      isSubmitDisabled: !!(e.target.value.length <= 0)
    })
  }

  render(){
    return(
      <Page className="homePage">

        <div className="page__main-container__title">
          <span className="page__main-container__title__text">Welcome to the last.fm top tracks history app!</span>
        </div>

        <div className="input-container">
          <form id="form"
                className="input-container__form">
            <input className="input-container__input"
                   type="text"
                   placeholder="enter username"
                   onChange={this._onUsernameInput.bind(this)}
                   required/>

            <button type="submit" disabled={this.state.isSubmitDisabled}>submit</button>
          </form>
        </div>
      </Page>
    )
  }
}

export default HomePage;
