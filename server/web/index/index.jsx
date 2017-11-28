const React = require('react');
const Layout = require('../_layouts/default.jsx');
const config = require('../../config.json');

class Page extends React.Component {

    render() {

        const feet = <script src="/public/pages/index.min.js"></script>;

        return (
            <Layout
                title={config.web.routes.index.title}
                feet={feet}
            >
            </Layout>
        );
    }
}

module.exports = Page;