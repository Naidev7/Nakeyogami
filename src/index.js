const express = require('express');

const cors = require('cors');

//1 crear el servidor
const server = express();
server.use(cors());
const port = 5001;

server.listen(port, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${port}`);
});

//2 endpoints

// server.get('/api/alladalabers', (req, resp) => {

//   resp.json(adalabers);
// });

//http://localhost:5001/api/alladalabers

// server.get('/api/oneadalaber', (req, resp) => {
//   resp.json({ name: 'tere' });
// });

//ejecutar desde el servidor un servidor de estatico
//tener una pagina estatica en mi proyecto

const staticServer = './web/dist';
server.use(express.static(staticServer));
