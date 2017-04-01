import React from 'react';
import cx from 'classnames';

class PageTitle extends React.Component {

  render() {

    return (
      <span className={cx('page-title', this.props.className)}>
        {this.props.children}
      </span>
    );
  }
}

export default PageTitle;
