const React = require('react');
const Api = require('../../../lib/api.js');

// // Redux
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// // Redux Actions
// import { setUser } from '../actions/index';

// Components
import Loader from '../components/loader';
import Link from '../components/link';
import Fa from '../components/fontawesome';

export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div className="page about">
                HURP is a full stack architecture to be used as a project's foundations for web applications.
            </div>
        );
    }
}

// const mapStateToProps = ({ reducers }) => {
//     return {
//         user: reducers.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ setUser }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(About);