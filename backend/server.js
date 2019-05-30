const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

wss.on('connection', function connection (ws) {
  ws.on('message', function incoming (data) {
    wss.clients.forEach(function each (client) {
      if (chat !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})
///
