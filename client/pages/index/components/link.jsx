const React = require('react');
const browserHistory = require('react-router').browserHistory;

import { Link as RouterLink } from 'react-router';

export default class Link extends React.Component {

	constructor(props) {

		super(props);

		this.state = {};
	}

	componentDidMount() {
		if (!this.props.to)
			throw new Error('Component Link must have prop "to"');
	}

	render() {
		return (
			<RouterLink style={{color:'inherit',fontStyle:'inherit',textDecoration:'inherit'}} to={this.props.to} target="_blank" onClick={(event) =>{
					event.preventDefault();
					
					if (this.props.external)
						return window.location = this.props.to;

					browserHistory.push(this.props.to)
				}}>
				{ this.props.children }
			</RouterLink>
		);
	}
}