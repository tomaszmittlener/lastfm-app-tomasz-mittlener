import React from 'react';
import cx from 'classnames';

class Page extends React.Component {

  render() {

    return (
      <section className={cx('page', this.props.className)}>

        <div className="page__logo">
          <span className="page__logo__text">Last.fm</span>
        </div>

        <div className="page__main-container">
          {this.props.children}
        </div>

      </section>
    );
  }
}

export default Page;
