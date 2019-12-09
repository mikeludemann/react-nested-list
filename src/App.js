import React from 'react';
import logo from './logo.svg';
import './App.css';

import NestedList from './components/nestedList';

let data = [{
	id: 1,
	name: "Managing Director",
	people: [
		{
			id: 2,
			name: "Sales Director" 
		}, {
			id: 3,
			name: "IT Director",
			people: [
				{
					id: 4,
					name: "Technical Lead",
					people: [
						{
							id: 5,
							name: "Software Developer"
						},
						{
							id: 6,
							name: "Support Technician"
						}
					]
				} 
			]
		}, {
			id: 7,
			name: "HR Department",
			people: [
				{
					id: 8,
					name: "HR Officer",
					people: [{
						id: 9,
						name: "HR Assistant 1"
					}, {
						id: 10,
						name: "HR Assistant 2"
					}]
				}
			]
		}
	]
}]

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<NestedList 
					dataList={data}
				></NestedList>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
