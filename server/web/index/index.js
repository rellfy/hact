exports.register = function(server, options, next) {

	const path = [
		'/',
		'/about',
		'/user',
	];

	// Create index routes for all paths in array `path`,
	// to be managed through the client via React Router.
	for (let i = 0; i < path.length; i++) {
		server.route({
			method: 'GET',
			path: path[i],
			handler: (request, reply) => {
				reply.view('./index/index');
			}
		});
	}

	next();
}

exports.register.attributes = {
	name: 'web/index'
}