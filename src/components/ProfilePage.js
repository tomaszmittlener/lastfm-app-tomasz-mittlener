import React from 'react';
import cx from 'classnames';

class ProfilePage extends React.Component {

  render() {

    return (
      <section className={cx('ProfilePage', this.props.className)}>

        <div className="profile-page__main-container">
          {this.props.children}
        </div>

      </section>
    );
  }
}

export default ProfilePage;
