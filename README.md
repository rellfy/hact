# hact

Simple, easily scalable base architecture for web servers running Node.

## Client

The client uses React. This project is also using React Router.

Client source is located at `/client`. Media files may be placed under `/client/media`, which would be moved to `/public` to be statically served publicly along with transpiled React source, which may be placed under `/client/pages`.

All files in `/client` will be transfered to `/public` upon change/server initialization by Gulp, some of those can be transpiled. This means all files under `/client` should be accessible publicly, unless altered.

## Server

The server uses Hapi. This project is also using Glue to compose the server.

Initial server architecture is simple to acknowledge as all folders are self describing. This (first) version only supports MongoDB for database.

## Other Dependencies

- ES6
- Babel
- Webpack
- MongoDB
- Redux
- NPM

## License

MIT