import React, { Component } from 'react';
import styles from './App.css';
import axios from 'axios';
import Helmet from 'react-helmet';

class ListDesactive extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/1bznuw')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (
      <div className={`${styles.items} ${styles.container}`}>
        <Helmet title="SoapBox - Delete List" />
        <div className={styles['row']}>
        <table>
          <tr className={styles['list-topbar']}>
            <th colspan="2">Name</th>
            <th>Last Visit</th>
            <th colspan="2">Conversation</th>
          </tr>
          
          <tr className={styles['each-item']}>
            <td colspan="4" className={`${styles.alert} ${styles.empty}`}>
              <div className={`${styles.alert} ${styles.empty}`}>Empty List</div>
            </td>
          </tr>
   
        </table>
        </div> 
        
      </div>
    )
  }
}
export default ListDesactive;



