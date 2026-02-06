create database db_escola
use db_escola

drop table tbl_aluno
create table tbl_aluno(
id_aluno      int,
nome          varchar(20),
logradouro    varchar(40)
primary key(id_aluno)
);

drop table tbl_matricula
create table tbl_matricula(
aluno         int,
id_matricula  int,
matricula     varchar(8),
turma_1       varchar(6),
turma_2       varchar(6),
primary key(id_matricula),
foreign key(aluno) references tbl_aluno(id_aluno),
);

insert into tbl_aluno(id_aluno,nome,logradouro) values
(1,'josé','rua das pedras'),
(2,'maria','rua dos lírios'),
(3,'joão','rua da lagosta');

insert into tbl_matricula(aluno,id_matricula,matricula,turma_1,turma_2) values
(1,1,'20101234','ECO01A','BIO04C'),
(2,2,'20113456','ENG02B','ECO01A'),
(3,3,'20096789','BIO04C','ENG02B');

select*from tbl_aluno
select*from tbl_matricula