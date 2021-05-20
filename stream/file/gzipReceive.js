const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const {join: joinPath} = require('path');

const server = http.createServer((req, res) => {
    const filename = req.headers.filename;
    const filepath = joinPath(__dirname, 'output/' + filename);
    console.log('File path: ' + filepath);

    req
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filepath))
        .on('finish', () => {
            res.writeHead(201, {'Content-Type': 'text/plain'});
            res.end("That's it\n");
            console.log(`File saved: ${filepath}`);
        });
});

server.listen(3000, () => console.log('Listening'));