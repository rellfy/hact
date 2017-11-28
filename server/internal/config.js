const config = require('../config.json');

exports.register = function (server, options, next) {

	// Config file is also available within server's scope.
    server.app.config = config;

    next();
};

exports.register.attributes = {
    name: 'config'
};