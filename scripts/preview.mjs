// Tiny static server for previewing the exported site (out/).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = join(process.cwd(), 'out');
const PORT = process.env.PORT || 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
};

createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = normalize(path).replace(/\\/g, '/').replace(/^\/+/, '');
    if (!file || file.endsWith('/')) file += 'index.html';
    let abs = join(ROOT, file);
    if (!abs.startsWith(join(ROOT, '..')) && abs.startsWith(ROOT)) {
      const data = await readFile(abs);
      res.writeHead(200, { 'content-type': MIME[extname(abs)] || 'application/octet-stream' });
      res.end(data);
    } else {
      res.writeHead(403); res.end('Forbidden');
    }
  } catch {
    try {
      const data = await readFile(join(ROOT, '404.html'));
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
  }
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}`));