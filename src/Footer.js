import React, { Component } from 'react';
import styles from './App.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles['app-footer']}>
        <p className={styles['made']}>Made With ❤ by Leonel Oliveira</p>
      </footer>
    );
  }
}

export default Footer;