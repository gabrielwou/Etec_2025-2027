create database db_locadora
use db_locadora 

drop table tbl_aluguel
create table tbl_aluguel(
cod_locacao   int,
cliente       int,
filme         int,
devolucao     varchar(15),
primary key(cod_locacao),
foreign key(filme) references tbl_filme(cod_filme),
);

drop table tbl_filme
create table tbl_filme(
cod_filme     int,
titulo_filme  varchar(15),
primary key(cod_filme),
);

insert into tbl_aluguel(cod_locacao,cliente,filme,devolucao)values
(1010,743,201,'2011-10-12'),
(1011,549,302,'2011-12-10'),
(1012,362,201,'2011-12-30');

insert into tbl_filme(cod_filme,titulo_filme)values
(201,'The Matrix'),
(302,'O grito');

select*from tbl_aluguel
select*from tbl_filme