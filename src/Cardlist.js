import React from 'react';
import Card from './Card';

const Cardlsit = ({Robot}) =>{
	const cardComponemt = Robot.map((user,i)=>{
		return <Card id={Robot[i].id} name={Robot[i].name} email={Robot[i].email}/>
	})
	return(
		<div>
		{cardComponemt}

		</div>
		);
}
export default Cardlsit;