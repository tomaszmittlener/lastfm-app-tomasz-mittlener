import React from 'react';
import cx from 'classnames';

class ProfilePage extends React.Component {

  render() {

    return (
      <section className={cx('details', this.props.className)}>
          {this.props.children}
      </section>
    );
  }
}

export default ProfilePage;
