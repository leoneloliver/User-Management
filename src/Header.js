import React, { Component } from 'react';
import logo from './logo.png';
import styles from './App.css';

class Header extends Component {
  render() {
    return (
      <header className={styles['app-header']}>
         <img src={logo} className={styles['app-logo']} alt="logo" />
       </header>
    );
  }
}

export default Header;