import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import {robots} from './robots.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
  			searchfield: ''
		}
	}		

	onSearchChange = (event) =>  {
		this.setState({searchfield: event.target.value })

	}

				

		render() {
			const {robots, searchfield} = this.state;

	const filteredRobots = robots.filter(robots => {
		return robots.name.toLowerCase().includes(
			searchfield.toLowerCase());
			})

		return !robots.length ?
			 <h1> Loading </h1> : (
		
	<div>
		<h1 className='tc'> RoboFriends </h1>	
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		<ErrorBoundary>
		<CardList robots = {filteredRobots} />
		</ErrorBoundary>
		</Scroll>
		  </div>
		);
		}
  
}


export default App;
