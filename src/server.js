const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.handlebars', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    // Aquí puedes enviar la lista de productos a través del WebSocket cuando se conecte un cliente
    // ws.send(JSON.stringify(listaDeProductos));
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
