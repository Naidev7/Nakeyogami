UPDATE project SET `desc` = 'algolalala' WHERE id = 1;

INSERT INTO project (name, slogan, repo, demo, technologies, `desc`, image) VALUES 
('el coro', 'voces lgtb', 'full', 'dsvsd', 'sjlkdknsd','evfbvf', 'ncsjcncowecwoemp.jpg'),
('sobreviviré', 'sobreviviré a js', 'stack','fgnfx', 'js', 'érase una vez unas capsuilass de vaca', 'djvnjfdvndf.jpg'),
('perfiles de cargo', 'gestión de perfiles psicológicos', 'dfjnvld', 'fbsfg', 'rrhh y react', 'genera perfiles cargo por medio de un formulario','dvdsav51dvndf.jpg'),
('nadine', 'tu regalo a medida', 'millonaria', 'dcsd', 'react sass html5', 'tu hijopuede elegir sus regalos favoritos', 'djvnjfsdfvsddvndf.jpg'),
('micdfvaedhell', 'ruidfvz', 'stasddvvck','regv', 'edrfvadf', 'rtgbhrw', 'djvnjfdvndfvdf.jpg');


INSERT INTO autor (name, lastname, job, photo ) VALUES 
 ('yolanda', 'lopez de rica', 'full', 'ncsjcncowecwoemp.jpg'),
 ('Queralt', 'clavé', 'stack', 'djvnjfdvndf.jpg'),
 ('gabriela', 'pinto', 'back', 'dvdsav51dvndf.jpg'), 
 ('nadine', 'estrella vacas', 'millonaria', 'djvnjfsdfvsddvndf.jpg'), 
 ('michell', 'ruiz', 'stasdvck', 'djvnjfdvndfvdf.jpg');

-- insertar project --

SELECT * FROM project ;

SELECT * FROM project WHERE name LIKE ' %vivir%';

SELECT * FROM project ORDER BY name ASC;

INSERT INTO project ( name, slogan, repo, demo, technologies, `desc`, image) VALUES
('harry potter', 'muglers sangres sucias','no hay filtros','lsccmds', 'htmlcsss', 'un mago joven que la lia muchop es intrepido', 'cbsnkdjcvnsdjnvld..jpg');