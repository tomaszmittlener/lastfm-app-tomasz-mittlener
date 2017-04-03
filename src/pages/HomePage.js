import React from 'react';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';

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
      <Page className="homePage" username={this.state.username}>

        <PageTitle className="page-title--welcome">Welcome to the last.fm top tracks history app!</PageTitle>


          <form id="form"
                className="form">
            <input className="form__input"
                   type="text"
                   placeholder="enter username"
                   onChange={this._onUsernameInput.bind(this)}
                   required/>

            <button className="form__button" type="submit" disabled={this.state.isSubmitDisabled}>submit</button>
          </form>
      </Page>
    )
  }
}

export default HomePage;
