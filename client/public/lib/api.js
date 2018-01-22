const JsonFetch = require('./json-fetch');

class API {

    static get(url, query, cb) {
        if (typeof query == 'function') cb = query;
        const request = { method: 'GET', url, query };
        this.makeRequest(request, cb);
    }

    static post(url, data, cb) {
        if (typeof data == 'function') cb = data;
        const request = { method: 'POST', url, data };
        this.makeRequest(request, cb);
    }

    static put(url, data, cb) {
        if (typeof data == 'function') cb = data;
        const request = { method: 'PUT', url, data };
        this.makeRequest(request, cb);
    }

    static patch(url, data, cb) {
        if (typeof data == 'function') cb = data;
        const request = { method: 'PATCH', url, data };
        this.makeRequest(request, cb);
    }

    static delete(url, query, cb) {
        if (typeof query == 'function') cb = query;
        const request = { method: 'DELETE', url, query };
        this.makeRequest(request, cb);
    }

    static makeRequest(request, cb) {
        JsonFetch(request, (error, response) => {
            if (error)
                return console.error(error);

            cb(response);
        });
    }
}

module.exports = API;