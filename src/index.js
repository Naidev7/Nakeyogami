const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//1 crear el servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
const port = 5001;

server.listen(port, () => {
  console.log(
    `el servidor se esta ejecutando en el puerto http://localhost:${port}`
  );
});

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_admin-nakeyogami',
    password: 'Rp@qW9m@?kD5tK#',
    database: 'freedb_projectos-molones-Nakeyogami',
  });
  await connection.connect();

  if (connection) {
    console.log('conexion ejecutandose');
  } else {
    console.log('hay un error');
  }

  return connection;
}

//enpoints

server.get('/api/projects', async (req, res) => {
  const conex = await getConnection();
  const sql =
    'SELECT autor.* , project.* FROM autor INNER JOIN project ON autor.id = project.fk_autor_id ';
  const [results, fields] = await conex.query(sql);
  console.log(results);
  console.log(fields);

  conex.end();
  res.json({ success: true, data: results });
});

server.post('/api/addProject', async (req, res) => {
  const conex = await getConnection();
  console.log(req.body);
  const insertAutor =
    'insert into autor (nameAutor, lastname, job, photo) values (?, ?, ?, ?)';

  //esto viene del front
  const [resultAutor] = await conex.query(insertAutor, [
    req.body.nameAutor,
    req.body.lastname,
    req.body.job,
    req.body.photo,
  ]);
  const lastInsertAutor = resultAutor.insertId;

  const insertProject =
    'insert into project (name, slogan, repo, demo, technologies, image, `desc`, fk_autor_id) values (?, ?, ?, ?, ?, ?, ?, ?)';
  const [resultProject] = await conex.query(insertProject, [
    req.body.name,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    req.body.image,
    req.body.desc,
    lastInsertAutor,
  ]);
  res.json({
    success: true,
    cardURL: `http://localhost:5001/detail/${resultProject.insertId}`,
  });
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

//crear end poit de tipo get y la ruta q /detail/:id

const staticServer = './web/dist';
server.use(express.static(staticServer));

// {
//   "name": "nombre proyecto",
//   "lastname": "aaaa",
//   "slogan": "hola cara cola",
//   "repo": "asdf",
//   "demo": "asdf",
//   "technologies": "asdf",
//   "image": "asdf",
//   "desc": "asdf",
//   "photo": "asd",
//   "autor": "sara",
//   "job": "hola"

// }
