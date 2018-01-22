const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const manifest = {
    'server': {
        'app': {
            'slogan': 'hact Project'
        }
    },
    'connections': [
        {
            /* SSL */
            'port': config.web.httpsPort || config.web.httpPort,
            'tls': config.web.httpsPort ? {
                'key': fs.readFileSync(path.join(__dirname, config.web.ssl.key)),
                'cert': fs.readFileSync(path.join(__dirname, config.web.ssl.cert)),
                'ca': fs.readFileSync(path.join(__dirname, config.web.ssl.certInt))
            } : null
        }
    ],
    'registrations': [
        /* Config Module */
        {
            'plugin': './server/internal/config'
        },
        /* External Modules */
        {
            'plugin': 'hapi-auth-cookie'
        },
        {
            'plugin': 'vision'
        },
        {
            'plugin': 'inert'
        },
        {
            'plugin': './server/auth.js'
        },
        {
            'plugin': {
                'register': 'visionary',
                'options': {
                    'engines': {
                        'jsx': 'hapi-react-views'
                    },
                    'relativeTo': __dirname,
                    'path': './web',
                    'compileOptions': {}
                }
            }
        },
        /* Internal Modules */
        {
            'plugin': {
                'register': 'nes',
                'options': {
                    'auth': {
                        'type': 'cookie',
                        'cookie': config.web.socket.name,
                        'password': config.web.socket.pwd,
                        'isSecure': false,
                        'isHttpOnly': false,
                        'route': 'session'
                    }
                }
            }
        },
        /* Server Modules */
        {
            'plugin': './server/web/public'
        },
        {
            'plugin': './server/web/index'
        },
        /* API */
        {
            'plugin': './server/api/user/me',
            'options': {
                'routes': { 'prefix': '/api' }
            }
        },
        {
            'plugin': './server/api/login',
            'options': {
                'routes': { 'prefix': '/api' }
            }
        },
        {
            'plugin': './server/api/logout',
            'options': {
                'routes': { 'prefix': '/api' }
            }
        }
    ]
}

module.exports = manifest;