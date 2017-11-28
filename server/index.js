const Hapi = require('hapi');
const Glue = require('glue');
const path = require('path');
const manifest = require('./manifest.js');
const httpsRedirect = require('./ssl/redirect.js');
const BabelRegister = require('babel-core/register');
const config = require('./config.json');

// If using SSL, redirect user to HTTPS.
if (config.web.httpsPort)
	httpsRedirect('localhost', config.web.httpPort);

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