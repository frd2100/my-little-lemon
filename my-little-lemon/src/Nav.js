import React from 'react';

class Nav extends React.Component {
    render() {
      return <nav>Ciao, {this.props.nome}</nav>;
    }
  }
export default Nav;