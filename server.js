import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  if (extname === '.js') {
    contentType = 'text/javascript';
  } else if (extname === '.css') {
    contentType = 'text/css';
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});