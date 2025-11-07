import http from 'node:http'

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return res.end('Hello, World!')
  }

  return res.writeHead(404).end('Not Found')
})

server.listen(3333, () => console.log('Server is running on port 3333'))
