import http from 'http';
import { createReadStream } from 'fs';

const PORT = 3000;

const app = http.createServer(async (req, res) => {
  const [, route, fileName] = req.url.toLowerCase().split('/');

  if (route !== 'sls-team' || !fileName) {
    res.writeHead(404);
    return res.end('Not Found!');
  }

  const stream = createReadStream(`./data/${fileName}.json`, {
    encoding: 'utf8',
  });

  stream.on('error', (err) => {
    res.writeHead(404);
    res.end('Not Found!');
  });

  stream.on('open', () => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    stream.pipe(res);
  });
});

app.listen(PORT);
