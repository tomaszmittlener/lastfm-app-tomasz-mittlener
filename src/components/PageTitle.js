import React from 'react';
import cx from 'classnames';

class PageTitle extends React.Component {

  render() {

    return (
      <h1 className={cx('page-title', this.props.className)}>
        {this.props.children}
      </h1>
    );
  }
}

export default PageTitle;
