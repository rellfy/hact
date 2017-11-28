exports.register = function (server, options, next) {

    const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
    server.app.cache = cache;

    server.auth.strategy('session', 'cookie', {
        password: server.app.config.web.cookie.pwd,
        cookie: server.app.config.web.cookie.name,
        isSecure: server.app.config.web.httpsPort ? true : false,
        redirectTo: server.app.config.web.cookie.authRedirect,
        validateFunc: function (request, session, callback) {

            cache.get(session.id, (err, cached) => {

                if (err) {
                    return callback(err, false);
                }

                if (!cached) {
                    return callback(null, false);
                }

                return callback(null, true, cached.account);
            });

        }
    });

    next();
};

exports.register.attributes = {
    name: 'auth'
};
