const socket = new WebSocket('ws://localhost:3000/realtimeproducts');

socket.addEventListener('open', (event) => {
    console.log('Conexión establecida con el servidor WebSocket');
});

socket.addEventListener('message', (event) => {
    const productos = JSON.parse(event.data);
    // Aquí puedes manejar los datos de productos recibidos del servidor
    console.log('Productos recibidos:', productos);
});
