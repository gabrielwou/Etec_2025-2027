CREATE DATABASE bd_LojaRoupas
GO
USE bd_LojaRoupas

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

CREATE TABLE tbFuncionario(
	idFuncionario		 INT PRIMARY KEY IDENTITY(1,1),
	nomeFuncionario      VARCHAR(60),
	idadeFuncionario	 INT,
	dataAdmissao		 DATE,
	salarioFuncionario	 MONEY
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
	subTotalItens		 MONEY
);



