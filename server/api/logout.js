
exports.register = function(server, options, next) {

	server.route({
		method: 'GET',
		path: '/logout',
		handler: (request, reply) => {

			request.cookieAuth.clear();
			reply.redirect('/');
		}
	});

	next();
}
exports.register.attributes = {
	name: 'api/logout'
}