import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Router } from '@reach/router';
import Home from './components/Home.jsx';
import * as api from './utils/api.js';
import LinkReddit from './components/LinkReddit.jsx';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';

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
						<LinkReddit path="/notneddit"/>
						<CreateArticle path="/create_article" />
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
