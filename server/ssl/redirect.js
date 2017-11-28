const Hapi = require('hapi');

const redirect = function(domain, port) {
	port   = port   || 80;
	domain = domain || '127.0.0.1';

	const http = new Hapi.Server();

	http.connection({ port });

	http.route({ method: '*', path: '/{path*}', handler: (request, reply) => {
		reply.redirect('https://' + domain + '/' + request.params.path);
	}});

	http.start((error) => {
		if (error)
			throw new Error(error);
	});
}

module.exports = redirect;