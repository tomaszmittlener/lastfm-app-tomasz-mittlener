import React from 'react';

class Page extends React.Component {

  render() {
    return (
      <section className="page">
        hjg
        {this.props.children}
      </section>
    );
  }
}

export default Page;
