CREATE DATABASE bdLojaRoupas
GO
USE bdLojaRoupas

CREATE TABLE tbCliente(
	idCliente			INT PRIMARY KEY IDENTITY(1,1),
	nomeCliente			VARCHAR(50),
	idadeCliente		INT
);

CREATE TABLE tbFabricante(
	idFabricante		INT PRIMARY KEY IDENTITY(1,1),
	nomeFabricante		VARCHAR(60)
);

CREATE TABLE tbVendedor(
	idVendedor			INT PRIMARY KEY IDENTITY(1,1),
	nomeVendedor		VARCHAR(60),
);

CREATE TABLE tbProduto(
	idProduto			INT PRIMARY KEY IDENTITY(1,1),
	nomeProduto			VARCHAR(80),
	precoProduto		MONEY,
	dataEntradaProduto	DATE,
	idFabricante		INT FOREIGN KEY (idFabricante) REFERENCES tbFabricante (idFabricante),
	idFuncionario		INT FOREIGN KEY (idFuncionario) REFERENCES tbFuncionario (idFuncionario)
);

CREATE TABLE tbVenda(
	idVenda				INT PRIMARY KEY IDENTITY(1,1),
	dataVenda			DATE,
	valorTotalVenda		MONEY,
	idCliente			INT FOREIGN KEY (idCliente) REFERENCES tbCliente (idCliente),
	idVendedor			INT FOREIGN KEY (idVendedor) REFERENCES tbVendedor (idVendedor),
);

CREATE TABLE tbItensVenda(
	idItensVenda		 INT PRIMARY KEY IDENTITY(1,1),
	idVenda				 INT FOREIGN KEY (idVenda) REFERENCES tbVenda (idVenda),
	idProduto			 INT FOREIGN KEY (idProduto) REFERENCES tbProduto (idProduto),
	quantidadeItens		 INT,
	subTotalItens		 INT
);

CREATE TABLE tbFuncionario(
	idFuncionario		 INT PRIMARY KEY IDENTITY(1,1),
	nomeFuncionario      VARCHAR(60),
	idadeFuncionario	 INT,
	dataAdmissao		 DATE,
	salarioFuncionario	 MONEY
);

DROP TABLE tbCliente
DROP TABLE tbFabricante
DROP TABLE tbFuncionario
DROP TABLE tbItensVenda
DROP TABLE tbProduto
DROP TABLE tbVenda
DROP TABLE tbVendedor
