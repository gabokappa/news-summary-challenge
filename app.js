const httpserver = require('http-server');
const port = 3000
const path = require("path");

const pathToHtml = path.join(__dirname, 'public', 'index.html');

const server = httpserver.createServer(pathToHtml);





server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});
