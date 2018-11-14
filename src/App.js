import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Router } from '@reach/router';
import Home from './components/Home.jsx';
import * as api from './utils/api.js';
import LinkReddit from './components/LinkReddit.jsx';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';
import SpecificArticle from './components/SpecificArticle/SpecificArticle';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import ArticlesByTopic from './components/ArticlesByTopic/ArticlesByTopic.jsx';

class App extends Component {

	state = {
		articles: [],
		loading: true,
		username: ''
	};

	render() {
    	return (
      		<div className="App">
				<Header login={this.login} username={this.state.username} />
				<Sidebar />
				<div className="ContentContainer">
					<Router primary={false} >
						<Home path="/" articles={this.state.articles} />
						<LinkReddit path="/notneddit"/>
						<CreateArticle path="/create_article" />
						<SpecificArticle path="/article/:article_id" />
						<Login path="/login" login={this.login} />
						<Profile path="/users/:username" login={this.login} />
						<ArticlesByTopic path="/topics/:topic" />
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

	login = (user) => {
		if (user){
			this.setState({ username: user });
		}

	};



};

export default App;
