import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './nestedList.css';

class NestedList extends Component { 
	render() {

		let nodes = this.props.dataList.map((person) => {

			return (
				<List node={person} children={person.people} />
			);

		}); 

		return (
			<div>
				<ul className="org">
					{nodes}
				</ul> 
			</div>
		);
	}
}

class List extends Component {

	render() { 

		let childnodes = null;

		if(this.props.children) {

			childnodes = this.props.children.map((childnode) => {

				return (
					<List node={childnode} children={childnode.people} />
				);

			});

		}

		return (
			<li key={this.props.node.id}> 
				<span>{this.props.node.name}</span> 
				{ childnodes ?
					<ul>{childnodes}</ul>
				: null }
			</li>
		);
	}
}

NestedList.propTypes = {
	dataList: PropTypes.array.isRequired
}

export default NestedList;