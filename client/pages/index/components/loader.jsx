const React = require('react');
const Api = require('../../../lib/api.js');
const browserHistory = require('react-router').browserHistory;

export default class Loader extends React.Component {

	constructor(props) {

		super(props);

		this.state = {};
	}

	render() {

		return (
			<div className="loader">
				<svg className="circular" viewBox="25 25 50 50">
					<circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
				</svg>
			</div>
       	);
	}
}