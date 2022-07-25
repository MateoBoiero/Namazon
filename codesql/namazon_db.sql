DROP DATABASE IF EXISTS namazon_db;
CREATE DATABASE namazon_db;
USE namazon_db;
CREATE TABLE `categorias` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `apellido` VARCHAR(255) NOT NULL,
   `contraseña` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `imagenUsuario` VARCHAR(255),
   `idCategoria` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `generos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `genero` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `peliculas` (
   `id` INT NOT NULL,
   `nombre` VARCHAR(255) NOT NULL,
   `imagen` VARCHAR(255) NOT NULL,
   `descripcion` VARCHAR(255),
   `precio` INT NOT NULL,
   `rating` INT,
   `idGenero` INT NOT NULL,
   
   `idActor` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `actores` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `apellido` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `usuarios` ADD CONSTRAINT `FK_7fe80408-7f18-4a4e-a158-29122466dbf2` FOREIGN KEY (`idCategoria`) REFERENCES `categorias`(`id`)  ;

ALTER TABLE `peliculas` ADD CONSTRAINT `FK_b90511aa-254a-45ef-9998-15eee7c9b098` FOREIGN KEY (`idGenero`) REFERENCES `generos`(`id`)  ;

ALTER TABLE `peliculas` ADD CONSTRAINT `FK_e553b0a7-d28d-4a48-aa76-0b6f8be13a6a` FOREIGN KEY (`idActor`) REFERENCES `actores`(`id`)  ;
