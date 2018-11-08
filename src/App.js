import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Router } from '@reach/router';
import Home from './components/Home.jsx';

class App extends Component {

	state = {

	};
	
	render() {
    	return (
      		<div className="App">
				<Header />
				<Sidebar />
				<div className="ContentContainer">
					<Router>
						<Home path="/" />
					</Router>
				</div>

      		</div>
    	);
  	};
};

export default App;
