import React, { Component }  from 'react';

class Header extends React.Component {
    render() {
      return <header>Ciao, {this.props.nome}</header>;
    }
  }
export default Header;