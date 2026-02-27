CREATE DATABASE db_ong

GO
USE db_ong

CREATE TABLE tb_statusCrianca(
	idStatus INT PRIMARY KEY IDENTITY(1,1),
	descricaoStatus VARCHAR(40) NOT NULL
)

CREATE TABLE tb_Sexo(
	idSexo INT PRIMARY KEY IDENTITY(1,1),
	descricaoSexo CHAR(1)
)

CREATE TABLE tb_Crianca(
	idCrianca INT PRIMARY KEY IDENTITY(1,1),
	nomeCrianca VARCHAR(80) NOT NULL,
	cpfCrianca CHAR(11),
	dtNasc SMALLDATETIME NOT NULL,
	idStatus INT FOREIGN KEY REFERENCES tb_statusCrianca(idStatus),
	idSexo INT FOREIGN KEY REFERENCES tb_Sexo(idSexo)
)

CREATE TABLE tb_Prontuario(
	idProntuario INT PRIMARY KEY IDENTITY(1,1),
	dataAbertura SMALLDATETIME,
	idCrianca INT FOREIGN KEY REFERENCES tb_Crianca(idCrianca) UNIQUE,
	observacaoProntuario VARCHAR(90)
)

CREATE TABLE tb_Padrinho(
	idPadrinho INT PRIMARY KEY IDENTITY(1,1),
	nomePadrinho VARCHAR(90),
	cpfPadrinho CHAR(11),
)

CREATE TABLE tb_Apadrinhamento(
	idApadrinhamento INT PRIMARY KEY IDENTITY(1,1),
	idCrianca INT FOREIGN KEY REFERENCES tb_Crianca(idCrianca),
	idPadrinho INT FOREIGN KEY REFERENCES tb_Padrinho(idPadrinho),
	dataApadrinhamento SMALLDATETIME
)

CREATE TABLE tb_Doenca(
	idDoenca INT PRIMARY KEY IDENTITY(1,1),
	nomeDoenca VARCHAR(80),
	cid VARCHAR(20)
)

CREATE TABLE tb_ProntuarioDoenca(
	idProntuarioDoenca INT PRIMARY KEY IDENTITY(1,1),
	idProntuario INT FOREIGN KEY REFERENCES tb_Prontuario(idProntuario),
	idDoenca INT FOREIGN KEY REFERENCES tb_Doenca(idDoenca),
	dataAcontecimento SMALLDATETIME
)

CREATE TABLE 

