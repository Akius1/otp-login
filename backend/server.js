const app = require('./app');
const { createServer } = require('http');

const server = createServer(app);


const PORT = process.env.PORT || 3001;

server.listen(PORT, function () {
    const { address, port } = this.address();
    const server = `http://${address === '::' ? '0.0.0.0' : address}:${port}`;
    console.log('\n\nServer Started ON:', '\x1b[36m\x1b[89m', server);
    console.log('Press Ctrl+C to quit.');
  });
  
//   export default server;