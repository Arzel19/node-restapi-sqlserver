--Creación de la base de datos LINEA_DENUNCIA
CREATE DATABASE LINEA_DENUNCIA
GO

USE LINEA_DENUNCIA
GO

--Creación de las tablas necesarias

CREATE TABLE Organizacion(
OrganizacionID int identity(1,1),
OrganizacionName varchar(20) not null,
primary key(OrganizacionID)
);

CREATE TABLE Pais(
PaisID int identity(1,1),
PaisName varchar(20) not null,
primary key(PaisID)
);

CREATE TABLE Estados(
EstadoID int identity(1,1),
EstadoName varchar(20) not null,
PaisID int not null,
primary key(EstadoID),
foreign key(PaisID) references Pais(PaisID)
);

CREATE TABLE Usuarios(
UsuariosID int identity(1,1),
UsuarioName varchar(20) not null,
Password varchar(20) not null,
primary key(UsuariosID)
);

CREATE TABLE Denuncia(
DenunciaID int IDENTITY(1,1),
Organizacion varchar(20) NOT NULL,
Pais varchar(20) NOT NULL,
Estado varchar(20) NOT NULL,
Centro int NOT NULL,
Nombre varchar(20),
Correo varchar(20),
Telefono varchar(10),
Detalle varchar(500) NOT NULL,
Fecha date NOT NULL,
Contraseña varchar(20) NOT NULL,
Folio as RIGHT('0000' + CONVERT(varchar(5),DenunciaID),5),
Comentarios varchar(500),
Estatus varchar(12),
primary key(DenunciaID)
);
GO
--Se crea la condición de que la contraseña de la denuncia sea de por lo menos 8 caracteres
ALTER TABLE Denuncia
ADD CONSTRAINT passchk CHECK (LEN(Contraseña) >= 8);
GO

--Se insertan los datos iniciales
insert into Organizacion
values ('Afore Coppel');
insert into Organizacion
values ('BanCoppel');
insert into Organizacion
values ('Coppel');

insert into Pais
values ('Argentina');
insert into Pais
values ('Estados Unidos');
insert into Pais
values ('México');

insert into Estados
values ('Buenos Aires',1);
insert into Estados
values ('California',2);
insert into Estados
values ('Aguascalientes',3);
insert into Estados
values ('Campeche',3);
insert into Estados
values ('CDMX',3);

insert into Usuarios
values ('Administrador','Password');
GO


