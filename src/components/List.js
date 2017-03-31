import React from 'react';
import cx from 'classnames';

class List extends React.Component {

  render() {

    return (
      <section className={cx('list', this.props.className)}>
        {this.props.children}
      </section>
    );
  }
}

export default List;
