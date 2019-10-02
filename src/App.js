import React,{Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {Robot} from './Robot';


class App extends Component {
	constructor(){
		super()
		this.state={
			Robot: Robot,
	        searchfield: ' '
		}
	}
	onsearchchange=(event) => {
		this.setstate({searchfield: event.target.value})	
	}
	render(){
		const filterrobots=this.state.Robot.filter(Robot =>{
		return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
		<div className='tc'>
		<h1>RobotFreinds</h1>
		<SearchBox searchchange={this.onsearchchnage}/>
		<Cardlist Robot={filterrobots}/>
		</div>
		);
}
}
export default App;