const Joi = require('joi');
const Boom = require('boom');

exports.register = function(server, options, next) {

	server.route({
		method: 'POST',
		path: '/login',
		config: {
			plugins: {
				'hapi-auth-cookie': {
					redirectTo: false
				}
			},
			auth: {
				mode: 'try',
				strategy: 'session'
			},
			validate: {
				payload: {
					username: Joi.string().min(4).max(24).lowercase().required(),
					password: Joi.string().min(4).max(24).required()
				}
			},
			pre: [{
				assign: 'accountCheck',
				method: (request, reply) => {

					/* Checks if username is unique, then continue to handler */
					reply(true);
				}
			}]
		},
		handler: (request, reply) => {

			/* Example authentication */

			const user = {
				id: parseInt(Math.random() * 100),
				username: request.payload.username
			};

			request.server.app.cache.set(user.id, { account: user }, 0, (error) => {
		        if (error)
		            return reply({ error });

		        request.cookieAuth.set(user);

		        reply({ error: null });
		    });
		}
	});

	next();
}

exports.register.attributes = {
	name: 'api/login'
}