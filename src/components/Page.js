import React from 'react';
import cx from 'classnames';

class Page extends React.Component {

  render() {

    return (
      <section className={cx('page', this.props.className)}>
        {this.props.children}
      </section>
    );
  }
}

export default Page;
