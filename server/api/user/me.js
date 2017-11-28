
exports.register = function(server, options, next) {

	server.route({
		method: 'GET',
		path: '/user/me',
		config: {
			plugins: {
				'hapi-auth-cookie': {
					redirectTo: false
				}
			},
			auth: {
				strategy: 'session',
				mode: 'try'
			}
		},
		handler: (request, reply) => {

			if (!request.auth.isAuthenticated)
				return reply({ error: 'You are not authenticated' });
			
			const credentials = request.auth.credentials;

			// Returns one's own credentials.
			return reply({ error: null, credentials });
		}
	});

	next();
}

exports.register.attributes = {
	name: 'api/me'
}