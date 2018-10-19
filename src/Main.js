import React, { Component } from 'react';
import styles from './App.css';
import List from './List';
import ListDesactive from './ListDesactive';
import axios from 'axios';
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

  // componentDidMount() {
  //   window.addEventListener('load', this.handleLoad);
  // }

  // using axios
  state = {
    items: []
  }
  componentDidMount() {
  	window.addEventListener('load', this.handleLoad);
    axios.get('https://api.myjson.com/bins/hraj4')
      .then(res => {
        const items = res.data;
        const longeur = res.data.length;
        this.setState({ items, longeur });
      });
      axios.get('https://api.myjson.com/bins/7mqaw')
      .then(result => {
        const itemsD = result.data;
        const longeurD = result.data.length;
        this.setState({ itemsD, longeurD });
      })
  }


  

  handleLoad() {
    this.handleClick();
  }
  

  render() {
    return (
      <Router>
        <main className={styles['main']} >
        	<div className={styles['aside']}>
        		<h4 className={styles['pl-10']}>&#10000; All Threads</h4>
        		<div className={styles['pl-10']}>Channels <span className={styles['icon-plus']}>&#10010;</span></div>
        		<ul>
							<li>&#9839; General</li>
							<li>&#9839; Product</li>
							<li>&#9839; Random</li>
							<li>&#9839; UX</li>
        		</ul>
        		<div className={styles['pl-10']}>Direct Messages <span className={styles['icon-plus']}>&#10010;</span></div>
        		<ul>
							<li><span className={styles['loged']}>&#10061;</span> Aaron</li>
							<li><span className={styles['nloged']}>&#10061;</span> Adele</li>
							<li><span className={styles['loged']}>&#10061;</span> Cheryl</li>
							<li><span className={styles['loged']}>&#10061;</span> Jacob</li>
        		</ul>
        	</div>
        	<div className={styles['main-content']}>
	        	<div>
			        <div className={styles['title-page']}>
			          <h2>User Management</h2>
			        </div>
			        <div className={styles['tool-bar']}>
			          <Link to="/" onClick={this.handleClick} className={`${styles.tabs} ${styles.none}`} id="first">
	       					Active Accounts ({ this.state.longeur })
	     					</Link>
	     					<Link to="/ListDesactive" onClick={this.handleClick} className={styles['tabs']}>
	       					Desactive Accounts ({ this.state.longeurD })
	     					</Link>
			          <div className={styles['search-box']}><input type="text" className={styles['search-item']} placeholder="Search for users" /><div className={styles['search-icon']}>&#128269;</div></div>
			        </div>
	        	</div>
	          <Route exact path="/" component={List} />
		        <Route exact path="/ListDesactive" component={ListDesactive} />
        	</div>
        </main>
      </Router>
    );
  }
}

export default Main;