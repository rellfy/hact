const Cookie = require('cookie');
const Qs = require('qs');
const Xhr = require('xhr');

const jsonFetch = (options, callback) => {

    const cookies = Cookie.parse(document.cookie);
    const config = {
        url: options.url,
        method: options.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (cookies.crumb) {
        config.headers['X-CSRF-Token'] = cookies.crumb;
    }

    if (options.query) {
        config.url += '?' + Qs.stringify(options.query);
    }

    if (options.data) {
        config.body = JSON.stringify(options.data);
    }

    Xhr(config, (err, response, body) => {

        if (err) {
            return callback(err);
        }

        if (response.statusCode >= 200 && response.statusCode < 300) {
            if (response.headers.hasOwnProperty('x-auth-required')) {
                console.log('[hurp log | json-fetch.js] authentication is required, redirecting to /login')
                window.location.href = '/login';
            }
            else {
                callback(null, JSON.parse(body));
            }
        }
        else {
            const httpError = new Error(response.rawRequest.statusText);

            callback(httpError, JSON.parse(body));
        }
    });
};

module.exports = jsonFetch;