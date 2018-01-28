exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'client/public',
                listing: true
            }
        }
    });

    next();
};


exports.register.attributes = {
    name: 'public'
};
