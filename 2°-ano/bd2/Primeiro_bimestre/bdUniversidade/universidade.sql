CREATE DATABASE db_Universidade
GO
USE db_Universidade

CREATE TABLE tb_Campi(
idCampi INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(50),
)

CREATE TABLE tb_Professor(
idProfessor INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(65),
logradouro VARCHAR (60),
estado VARCHAR(30),
cep CHAR(8),
)

CREATE TABLE tb_Curso(
idCurso INT PRIMARY KEY IDENTITY(1,1),
nomeCurso VARCHAR(20),
)

CREATE TABLE tb_Disciplina(
idDisciplina INT PRIMARY KEY IDENTITY(1,1),
materia VARCHAR(20),
idCurso INT FOREIGN KEY (idCurso) REFERENCES tb_Curso (idCurso),
idProfessor INT FOREIGN KEY (idProfessor) REFERENCES tb_Professor (idProfessor),
)

CREATE TABLE tb_Aluno(
idAluno INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(65),
logradouro VARCHAR (60),
estado VARCHAR(30),
cep CHAR(8),
)

CREATE TABLE tb_Turma(
idturma INT PRIMARY KEY IDENTITY(1,1),
anoDeFormacao SMALLDATETIME,
numeroDaSala INT,
idCurso INT FOREIGN KEY (idCurso) REFERENCES tb_Curso (idCurso),
idAluno INT FOREIGN KEY (idAluno) REFERENCES tb_Aluno (idAluno),
)