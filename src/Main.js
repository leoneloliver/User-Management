import React, { Component } from 'react';
import styles from './App.css';
import List from './List';
import ListDesactive from './ListDesactive';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component { 

	handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("class-static");
      var myFunction = function() {
        var fullname = this.getAttribute("data-name");
        alert('You have no permission send a message to '+fullname+'.');
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
    }
    setTimeout(function(){ clickable(); }, 900);
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleClick();
  }
  

  render() {
    return (
      <Router>
        <main className={styles['main']} >
        	<div>
		        <div className={styles['title-page']}>
		          <h2>User Management</h2>
		        </div>
		        <div className={styles['tool-bar']}>
		          
		          <Link to="/" onClick={this.handleClick} className={`${styles.tabs} ${styles.none}`} id="first">
       					Active Accounts (7)
     					</Link>
     					<Link to="/ListDesactive" onClick={this.handleClick} className={styles['tabs']}>
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







