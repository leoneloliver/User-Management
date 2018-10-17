import React, { Component } from 'react';
import styles from './App.css';
import List from './List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component {

 
  render() {
    return (
      <Router>

        <main className={styles['main']} >
           <Route exact path="/" component={List} />
        </main>
      </Router>
    );
  }
}

export default Main;

