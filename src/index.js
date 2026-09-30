import { createServer } from 'node:http';
import { config } from './config.js';

const server = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('envcheck-playground\n');
});

server.listen(config.port, () => {
  console.log(`listening on ${config.port} (log level ${config.logLevel})`);
});
