create database db_Fornecedor
use db_Fornecedor

create table tbl_Fornecedor(
	codigo_F		int,
	nome			varchar(50),
	Telefone		int,
	Endereco		int,
	primary key(codigo_F),
	foreign key(Telefone) references tbl_Telefone(codigo_T),
	foreign key(Endereco) references tbl_Endereco(codigo_E),
);
select*from tbl_Telefone

create table tbl_Telefone(
	codigo_T		int,
	telefone1		varchar(12),
	telefone2   varchar(12),
	primary key(codigo_T),
);

drop table tbl_Endereco
drop table tbl_Telefone
drop table tbl_Fornecedor
drop table tbl_Produto

create table tbl_Endereco(
	codigo_E		int,
	logradouro		varchar(60),
	cep				varchar(9),
	numero			varchar(10),
	uf				varchar(2),
	cidade			varchar(20),
	primary key(codigo_E),
);


create table tbl_Produto(
	codigo_P		int,
	Fornecedor		int,
	nome			varchar(40),
	preco			varchar(10),
	quantidade_P    varchar(10),
	primary key(codigo_P),
	foreign key(Fornecedor) references tbl_Fornecedor(codigo_F),
);

drop table tbl_Produto
select*from tbl_Produto

insert into tbl_Telefone (codigo_T,telefone1,telefone2) values
(1,'4002-8922','8476-9090'),
(2,'2298-2004','1908-6735');


insert into tbl_Endereco (codigo_E,logradouro,cep,uf,cidade,numero) values
(1,'Av.metalurgicos','40256-000','BA','Salvador','200'),
(2,'Rua. Dos texteis','40470-090','BA','Itabuna','128');


insert into tbl_Fornecedor(codigo_F,nome,Telefone,Endereco) values
(1,'Fornecedor1',1,1),
(2,'fornecedor2',2,2);

insert into tbl_Produto (codigo_P,Fornecedor,nome,preco,quantidade_P) values
(1,1,'peça1','R$5,00','50'),
(2,1,'peça2','R$7,50','30'),
(3,1,'peça3','R$10,00','40'),
(4,2,'peça1','R$5,00','30'),
(5,2,'peça2','R$7,50','15');

select*from tbl_Endereco
select*from tbl_Fornecedor
select*from tbl_Produto
select*from tbl_Telefone