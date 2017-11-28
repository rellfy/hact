const React = require('react');
const Api = require('../../../lib/api.js');
const browserHistory = require('react-router').browserHistory;

// Components
import Link from './link';

export default class Header extends React.Component {

	constructor(props) {

		super(props);

		this.state = {};
	}

	render() {

		return (
			<header>
				<div className="left">
					<div className="title">HURP</div>
				</div>
				<div className="right">
					<div className="menu">
						<Link to="/"><div className="button">Index</div></Link>
						<Link to="/about"><div className="button">About</div></Link>
					</div>
				</div>
	        </header>
       	);
	}
}

module.exports = Header;