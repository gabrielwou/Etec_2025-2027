create database db_empresa
use db_empresa

drop table tbl_empregado
create table tbl_empregado(
cod_empregado int,
nome          varchar(20),
categoria     varchar(2),
saldo         int,
primary key(cod_empregado)
);

drop table tbl_projeto
create table tbl_projeto(
cod_projeto   int,
projeto       varchar(6),
tipo          varchar(20),
descricao     varchar(20),
primary key(cod_projeto)
);


drop table tbl_projeto_empregado
create table tbl_projeto_empregado(
codigo		  int,
cod_emp	      int,
cod_proj      int,
data_inicio   varchar(8),
tempo_alocacao int,
primary key(codigo),
foreign key(cod_emp) references tbl_empregado(cod_empregado),
foreign key(cod_proj) references tbl_projeto(cod_projeto),
);


insert into tbl_empregado(cod_empregado,nome,categoria,saldo) values
(2146,'João','A1',4),
(3145,'Silvio','A2',4),
(6126,'José','B1',9),
(1214,'Carlos','A2',4),
(8191,'mário','A1',4);



insert into tbl_projeto(cod_projeto,projeto,tipo,descricao)values
(1,'LSC001','Novo Desenv.','Sistema de Estoque'),
(2,'PAG02','Manutenção','Sistema de RH');


insert into tbl_projeto_empregado(codigo,cod_emp,cod_proj,data_inicio,tempo_alocacao)values
(1,2146,1,'1/11/91',24),
(2,3145,1,'2/10/91',24),
(3,6126,1,'3/20/92',18),
(4,1214,1,'4/10/92',18),
(5,8191,1,'1/11/92',12),
(6,8191,2,'1/05/93',12),
(7,2146,2,'4/01/91',24),
(8,6126,2,'1/11/92',12);

select*from tbl_empregado
select*from tbl_projeto
select*from tbl_projeto_empregado