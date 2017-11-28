const React = require('react');
const Api = require('../../lib/api.js');

// Components
import Header from './components/header';

export default class Base extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }
    
    componentWillMount() {
        Api.get('/api/user/me', (response) => {
            console.log('Received response from /api/user/me');
        }); 
    }

    render() {
        return (
        	<div>
                <Header />
                <div>
                	{ this.props.children }
                </div>
            </div>
        );
    }
}