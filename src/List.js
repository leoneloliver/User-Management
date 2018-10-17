import React, { Component } from 'react';
import styles from './App.css';
import axios from 'axios';
import Helmet from 'react-helmet';

class List extends React.Component {
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
        <div className={styles['title-page']}>
          <h2>User Management</h2>
        </div>
        <div className={styles['tool-bar']}>
          <div className={`${styles.tabs} ${styles.active}`}>Active Accounts (7)</div>
          <div className={styles['tabs']}>Desactive Accounts (0)</div>
          <div className={styles['search-box']}><input type="text" className={styles['search-item']} placeholder="Search for users" /><div className={styles['search-icon']}>&#128269;</div></div>
        </div>
        <Helmet title="SoapBox - Panel" />
        <div className={styles['row']}>
        <table>
          <tr className={styles['list-topbar']}>
            <th colspan="2">Name</th>
            <th>Last Visit</th>
            <th colspan="2">Conversation</th>
          </tr>
          {this.state.items.map(item => (
          <tr className={styles['each-item']}>
            <td width="10px"><img src={ item.photo } className={styles['avatar']} /></td>
            <td>
              <div className={styles['name']}>{ item.name }</div>
              <div className={styles['email']}>{ item.email }</div>
            </td>
            <td>{ item.visit }</td>
            <td>{ item.conversation }</td>
            <td><a href="#">&#9776;</a></td>
          </tr>
          ))}
        </table>
        </div>
      </div>
    )
  }
}
export default List;



