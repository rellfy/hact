const React = require('react');
const PropTypes = require('prop-types');

const propTypes = {
    children: PropTypes.node,
    feet: PropTypes.node,
    neck: PropTypes.node,
    title: PropTypes.string
};

class Default extends React.Component {

    render() {

        return (
            <html>
                <head>
                    <title>{ this.props.title }</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/public/core.min.css" />
                    <link rel="shortcut icon" href="/public/media/logo.png" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    { this.props.neck }
                </head>
                <body>
                    <div id="root">
                        { this.props.children }
                    </div>
                    <script src="/public/core.min.js"></script>
                    { this.props.feet }
                </body>
            </html>
        );
    }
}

Default.propTypes = propTypes;

module.exports = Default;
