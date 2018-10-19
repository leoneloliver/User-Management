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
    axios.get('https://api.myjson.com/bins/hraj4')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className={`${styles.items} ${styles.container}`}>
        <Helmet title="SoapBox - Panel" />
        <div className={styles['row']}>
        <table>
          <tr className={styles['list-topbar']}>
            <th colspan="2">Name</th>
            <th>Last<span className={styles['only-desktop']}> Visit</span><span className={styles['only-mobile']}>...</span></th>
            <th colspan="2">Conv<span className={styles['only-desktop']}>ersation</span><span className={styles['only-mobile']}>...</span></th>
          </tr>
          {this.state.items.map(item => (
          <tr className={`${styles.eachitem} class-static`} data-name={ item.name } data-avatar={ item.photo } data-email={ item.email }>
            <td width="10px"><img src={ item.photo } className={styles['avatar']} /></td>
            <td>
              <div className={styles['name']}>{ item.name }</div>
              <div className={styles['email']}>{ item.email }</div>
            </td>
            <td>{ item.visit }</td>
            <td className={styles['center']}>{ item.conversation }</td>
            <td width="30px"><a href="#">&#9776;</a></td>
          </tr>
          ))}
        </table>
        </div>
        <div className={styles['add-new']}>&#10010;</div>
      </div>
    )
  }
}
export default List;