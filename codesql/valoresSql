--- categorias---
INSERT INTO categorias (id, categoria) 
VALUES (1, 'Admin'), (2, 'Cliente');

--- generos ---
INSERT INTO generos (id, genero)
VALUES (1, 'Accion'), (2, 'Aventuras'), (3, 'Ciencia ficcion'), (4, 'Comedia'), (5, 'Documental'), (6, 'Drama'), (7, 'Fantasia'), (8, 'Musical'), (9, 'Suspenso'), (10, 'Terror');

--- actores  ---
INSERT INTO actores (id, nombre, apellido)
VALUES (1, 'Adam','Sandler'), (2, 'Leonardo', 'Di Caprio'), (3, 'Kate', 'Winslet'),(4, 'Johnny', 'Depp'), (5, 'Katherine', 'Waterston'),
(6, 'Daniel', 'Radcliffe'), (7, 'Emma', 'Watson'), (8, 'Rupert', 'Grint'), (9, 'Keira', 'Knightley'), (10, 'Robert', 'Downey Jr.'),
(11, 'Scarlett', 'Johansson'), (12, 'Peter', 'Jackson'), (13, 'Jack', 'Black'), (14, 'Linda', 'Blart'), (15, 'Arnold', 'Schwarzenegger'),
(16, 'Silvester', 'Stallone'), (17, 'Daniel', 'Craig'), (18, 'Vera', 'Farmiga'), (19, 'Juan Cruz', 'Romero'), (20, 'Buzz', 'Lightyear');

--- usuarios ---
INSERT INTO usuarios (id, nombre, apellido, contraseña, email, imagenUsuario, idCategoria)
VALUES(1, 'Bruno', 'Buresta', '4451', 'brunoburesta07@gmail.com', 'default.png', 1), (2, 'Mateo', 'Boiero', '4451', 'mateoboiero@gmail.com', 'default.png', 2);

--- peliculas ---
INSERT INTO peliculas (id, nombre, imagen, descripcion, precio, rating, idGenero, idActor)
VALUES(1, 'Son como niños', 'sonComoNinios.jpg','La muerte de su entrenador de baloncesto durante su infancia provoca la reunión de algunos viejos amigos, quienes se ven en el lugar en el que celebraron un campeonato años atrás. Los compañeros hablan sobre sus esposas y sus hijos, y descubren que la edad no necesariamente va de la mano con la madurez.', 599, 9.0, 4, 1),
(2, 'Son como niños 2', 'sonComoNinios2.jpg', 'Tres años después de la reunión que volvió a unirlo a sus amigos de la infancia, Lenny Feder regresa junto a su familia a su pueblo natal para poder estar más cerca de sus amigos, a los que echa verdaderamente de menos.', 599, 9.0, 4, 1),
(3, 'Titanic', 'titanic.jpg', 'Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido.', 699, 9.9, 6, 2),
(4, 'Animales fantasticos', 'animalesFantasticos.jpg', 'En 1926, el mago experto en zoología Newt Scamander hace una breve parada en Nueva York mientras viaja catalogando y capturando criaturas mágicas por el mundo. Jacob, un humano corriente, provoca por error que las criaturas escapen y se oculten por la ciudad. Scamander tendrá que atraparlas de nuevo, antes de que causen problemas.', 499, 7.0, 7, 4),
(5, 'Harry Potter y la piedra filosofal', 'harryPotter.jpg', 'El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.', 899, 9.0, 3, 6),
(6, 'Los piratas del Caribe: la maldicion del Perla Negra', 'piratasDelCaribe.jpg', 'El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes.', 899, 7.5, 1, 4),
(7, 'No te metas con Zohan', 'noTeMetasConZohan.jpg', 'Cansado de todas las luchas en su país, un legendario militar israelí llamado Zohan finge su propia muerte y viaja a la ciudad de Nueva York, donde puede cumplir su gran sueño: convertirse en un estilista. El atrevimiento con el que Zohan corta y peina el cabello lo convierten en un éxito entre las mujeres de Manhattan, pero, cuando su enemigo lo localiza, Zohan tendrá que usar sus habilidades militares si quiere volver a utilizar las tijeras.', 499, 8.1, 4, 1),
(8, 'Una esposa de mentira', 'unaEsposaDeMentira.jpg', 'El cirujano Danny decide contratar a su ayudante Katherine, una madre soltera con hijos, para que finjan ser su familia. Su intención es demostrarle a Palmer que su amor por ella es tan grande que está a punto de divorciarse de su mujer.', 399, 7.5, 4, 1),
(9, 'Iron Man', 'ironMan.jpg', 'Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar.', 599, 8.5, 1, 10),
(10, 'King kong', 'kingKong.jpg', 'Un grupo de exploradores, liderado por un extrovertido director de cine, visitan Skull Island para investigar todo lo relacionado con la leyenda del gorila gigante llamado King Kong. Ahí encuentran una jungla llena de criaturas prehistóricas.', 399, 6.9, 2, 12),
(11, 'El exorcista', 'elExorcista.jpg', 'Adaptación de la novela de William Peter Blatty. Inspirada en un exorcismo real ocurrido en Washington en 1949. Regan, una niña de doce años, es víctima de fenómenos paranormales.', 299, 5.6, 10, 14),
(12, 'Terminator', 'terminator.jpg', 'Los terminators o también exterminadores son robots autónomos humanoides de ficción, de la franquicia homónima creada por James Cameron, concebidos como soldados virtualmente indestructibles en el campo de batalla. Son los asesinos predilectos de Skynet para acabar con sus objetivos.', 499, 8.3, 1, 15),
(13, 'Rambo', 'rambo.jpg', 'John Rambo es un veterano boina verde que luchó en Vietnam. Un día va a visitar a un viejo amigo del ejército pero se entera de que ha muerto. Algunos días después, la policía lo detiene por vagabundo y se enseña con él.', 399, 5.8, 2, 16),
(14, 'Rocky', 'rocky.jpg', 'Rocky Balboa es un desconocido boxeador de Philadelphia a quien se le ofrece la posibilidad de alcanzar la fama y ganar el título mundial de los pesos pesados enfrentándose al actual campeón, Apollo Creed.', 799, 8.9, 6, 16),
(15, 'Creed', 'creed.jpg', 'Adonis Johnson no llegó a conocer a su famoso padre, el campeón del mundo de los pesos pesados, Apollo Creed. Sin embargo, la pasión por el boxeo la lleva en la sangre y decide poner rumbo a Filadelfia. Una vez en la ciudad, Adonis busca a Rocky y le pide que sea su entrenador.', 499, 5.5, 1, 16),
(16, 'James Bond', 'jamesBond.jpg', 'el agente 007 tiene una planta esbelta impecable, mide 1,89 cm. y pesa 93 kilos, además de un atractivo y un misterio y profundidad en sus rasgos, hipnóticos.', 299, 6.7, 1, 17),
(17, 'El conjuro', 'elConjuro.jpg', 'Basada en hechos reales. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70.', 399, 3.0, 10, 18),
(18, 'Diego Maradona', 'elDiego.jpg','Documental construido sobre la base de 500 horas de metraje inédito, acerca de la carrera y la vida del aclamado y controvertido futbolista argentino Diego Armando Maradona', 999,9.9, 5,19),
(19, 'Los vengadores', 'losVengadores.jpg', 'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.', 799, 8.7, 1, 10),
(20, 'Toy story', 'ToyStory.jpg', 'Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear.', 799, 7.8, 3, 20);