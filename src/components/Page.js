import React from 'react';
import cx from 'classnames';

class Page extends React.Component {

  render() {

    return (
      <section className={cx('page', this.props.className)}>
        <div className="page__logo">
          <span className="page__logo__text">Last.fm</span>
        </div>

        {this.props.children}
      </section>
    );
  }
}

export default Page;
