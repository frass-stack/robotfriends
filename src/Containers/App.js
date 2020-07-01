import React, { Component } from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
//import { robots } from './robots';
import './App.css';


class App extends Component {
   constructor() {
   	 super()
   	 this.state = {
   	 	robots: [],
		searchfield: ''
   	 }
   }

   componentDidMount() {
   	fetch('https://jsonplaceholder.typicode.com/users')
   		.then(response=> {
   		 return response.json();
   	  	})
   		.then(users=> {
   		  this.setState({ robots: users})
   	  	}
   	)
   }

   onSearchChange = (event) => {
   	 this.setState({ searchfield: event.target.value })
   }

   render() {
    const {robots, searchfield} = this.state;
	 const filteredRobots = robots.filter(robot =>{
   		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
   	 })
   	 if(!robots.length){
   	 	return <h1>Loading</h1>
   	 }else {
		 return (
		   <div className='tc'>
		  	 <h1 className='f2'>RoboFriends</h1>
		  	 <SearchBox searchChange={this.onSearchChange}/>
		  	 <Scroll>
		  	 	<CardList robots={filteredRobots} />
		  	 </Scroll>
		   </div> 
	 	 );
	  }
   }
}

export default App;