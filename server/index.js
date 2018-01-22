global.production = process.env.NODE_ENV === 'production';

const Hapi = require('hapi');
const Glue = require('glue');
const path = require('path');
const BabelRegister = require('babel-core/register');

const manifest = require('./manifest.js');
const config = require('./config.json');
const HTTPS = require('./ssl/redirect.js');

if (config.web.httpsPort)
	HTTPS('localhost', config.web.httpPort);

const options = {
	relativeTo: path.join(__dirname, '../'),
	preRegister: (server, next) => {
		BabelRegister();
		next();
	}
};

Glue.compose(manifest, options, (error, server) => {
	server.start((error) => {
		if (error)
			throw new Error(error);
		
		console.log('Server started on port ' + server.info.port);
	});
});