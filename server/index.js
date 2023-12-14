// eslint-disable-next-line no-undef
const jsonServer = require('json-server');
// eslint-disable-next-line no-undef
const path = require('path');

const server = jsonServer.create();
// eslint-disable-next-line no-undef
const router = jsonServer.router(path.resolve(__dirname + '/db.json'));
const middlewares = jsonServer.defaults({
    // eslint-disable-next-line no-undef
    static: path.resolve(__dirname + '/../build/')
});

const port = "http://localhost:4001";

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running');
});