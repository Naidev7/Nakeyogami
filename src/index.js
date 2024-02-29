const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swagger.json');

//1 crear el servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');
const port = process.env.PORT || 5001;

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
  try {
    const conex = await getConnection();
    const sql =
      'SELECT autor.* , project.* FROM autor INNER JOIN project ON autor.id = project.fk_autor_id ';
    const [results, fields] = await conex.query(sql);

    conex.end();
    res.json({ success: true, data: results });
  } catch {
    res.status(500).send({
      success: false,
      message: 'Error de conexion, refresque la pagina',
    });
  }
});

server.post('/api/addProject', async (req, res) => {
  const conex = await getConnection();
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
    cardURL: `https://project-promo-v-module-4-team-2.onrender.com/detail/${resultProject.insertId}`,
  });
});

server.get('/detail/:idProject', async (req, res) => {
  const conex = await getConnection();
  const { idProject } = req.params;
  const selectProjectId =
    'SELECT * FROM project INNER JOIN autor ON autor.id = project.fk_autor_id WHERE project.id = ?';

  const [results] = await conex.query(selectProjectId, [idProject]);
  console.log(results[0]);
  res.render('detail', { projectDetail: results[0] });
});

server.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCSS = './src/public-css';
server.use(express.static(staticServerCSS));

const staticImage = './src/images';
server.use(express.static(staticImage));
