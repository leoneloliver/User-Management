import React, { Component } from 'react';
import styles from './App.css';
import List from './List';
import ListDesactive from './ListDesactive';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component { 
  render() {
    return (
      <Router>
        <main className={styles['main']} >
        	<div>
		        <div className={styles['title-page']}>
		          <h2>User Management</h2>
		        </div>
		        <div className={styles['tool-bar']}>
		          
		          <Link to="/" className={`${styles.tabs} ${styles.none}`} id="first">
       					Active Accounts (7)
     					</Link>
     					<Link to="/ListDesactive" className={styles['tabs']}>
       					Desactive Accounts (0)
     					</Link>
		          <div className={styles['search-box']}><input type="text" className={styles['search-item']} placeholder="Search for users" /><div className={styles['search-icon']}>&#128269;</div></div>
		        </div>
        	</div>
          <Route exact path="/" component={List} />
	        <Route exact path="/ListDesactive" component={ListDesactive} />
        </main>
      </Router>
    );
  }
}

export default Main;







