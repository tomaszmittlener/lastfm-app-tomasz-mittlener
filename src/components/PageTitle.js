import React from 'react';
import cx from 'classnames';

class PageTitle extends React.Component {

  render() {

    return (
      <h2 className={cx('page-title', this.props.className)}>
        {this.props.children}
      </h2>
    );
  }
}

export default PageTitle;
