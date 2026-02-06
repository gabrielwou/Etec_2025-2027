create database db_pessoa
use db_pessoa

drop table tbl_pessoa
create table tbl_pessoa(
codigo        int,
nome          varchar(20),
endereco      varchar(40),
bairro        varchar(20),
primary key(codigo)
);

drop table tbl_telefone
create table tbl_telefone(
codigo_t      int,
codigo        int,
telefone      varchar(12),
primary key(codigo_t),
foreign key(codigo) references tbl_pessoa(codigo)
);

insert into tbl_pessoa(codigo,nome,endereco,bairro) values
(1001,'Diego Machado','av.metalurgicos','cidade Tiradentes'),
(2002,'Gabriel Penha','r.dos texteis','cidade tiradente');

insert into tbl_telefone(codigo_t,codigo,telefone) values
(1,1001,'5312345678'),
(2,1001,'5398765432'),
(3,2002,'5112345678'),
(4,2002,'5187654321');

select*from tbl_pessoa
select*from tbl_telefone