import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';

class Page extends React.Component {

  render() {
    return (
      <section className={cx('page', this.props.className)}>

        <div className="page__nav">
          <Link className="nav-items" to="/">
            <svg className="nav-item__logo" viewBox="0 0 24 24">
              <path d="M10.584 17.209l-.88-2.392s-1.43 1.595-3.573 1.595c-1.897 0-3.244-1.65-3.244-4.289 0-3.381 1.704-4.591 3.382-4.591 2.419 0 3.188 1.567 3.849 3.574l.88 2.75c.879 2.667 2.528 4.811 7.284 4.811 3.409 0 5.719-1.044 5.719-3.793 0-2.227-1.265-3.381-3.629-3.932l-1.76-.385c-1.209-.275-1.566-.77-1.566-1.594 0-.935.742-1.485 1.952-1.485 1.319 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.491-4.729-3.491-2.474 0-4.893.935-4.893 3.931 0 1.87.907 3.052 3.188 3.602l1.869.439c1.402.33 1.869.907 1.869 1.705 0 1.017-.989 1.43-2.858 1.43-2.776 0-3.932-1.457-4.591-3.464l-.907-2.749c-1.155-3.574-2.997-4.894-6.653-4.894-4.041-.001-6.186 2.556-6.186 6.899 0 4.179 2.145 6.433 5.993 6.433 3.107.001 4.591-1.457 4.591-1.457z"/>
            </svg>
          </Link>
        </div>

        <div className="page__container">
          {this.props.children}
        </div>

      </section>
    );
  }
}

export default Page;
