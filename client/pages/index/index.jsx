// React
const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Components
import Base from './base'
import Index from './routes/index'
import About from './routes/about'

class Page {

	static load() {
        Page.render();
	}

    static render() {
        this.mainElement = ReactDOM.render(
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <IndexRoute component={Index} />
                    <Route path="/about" component={About} />
                </Route>
            </Router>,
            window.document.getElementById('root')
        );
    }
}

Page.load();