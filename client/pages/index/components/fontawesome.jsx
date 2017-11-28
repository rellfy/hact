const React = require('react');

export default class FontAwesome extends React.Component {

	constructor(props) {

		super(props);

		this.state = {};
	}

	render() {

		return (
			<i className={'fa fa-' + this.props.i}></i>
       	);
	}
}