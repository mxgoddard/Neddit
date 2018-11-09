import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Router } from '@reach/router';
import Home from './components/Home.jsx';
import * as api from './utils/api.js';

class App extends Component {

	state = {
		articles: [],
		loading: true
	};

	render() {
    	return (
      		<div className="App">
				<Header />
				<Sidebar />
				<div className="ContentContainer">
					<Router>
						<Home path="/" articles={this.state.articles} />
					</Router>
				</div>

      		</div>
    	);
	};
	  
	componentDidMount(){
		this.fetchArticles();
	};

	fetchArticles = () => {
		api.getArticles().then(articles => {
			this.setState({ articles, loading: false });
		})
	};

};

export default App;
