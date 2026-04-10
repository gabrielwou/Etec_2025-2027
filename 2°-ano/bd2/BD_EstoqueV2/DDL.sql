DROP DATABASE Bd_Estoque
CREATE DATABASE Bd_Estoque
GO
USE Bd_Estoque

CREATE TABLE tbCliente(
	idCliente				INT PRIMARY KEY IDENTITY(1,1),
	nomeCliente				VARCHAR(50),
	cpfCliente				VARCHAR(11),
	emailCliente			VARCHAR(50),
	sexoCliente				CHAR(1),
	dataNascimentoCliente	DATETIME
);

CREATE TABLE tbFabricante(
	idFabricante		INT PRIMARY KEY IDENTITY(1,1),
	nomeFabricante		VARCHAR(60)
);

CREATE TABLE tbFornecedor(
	idFornecedor		INT PRIMARY KEY IDENTITY(1,1),
	nomeFornecedor		VARCHAR(60),
	contatoFornecedor	VARCHAR(18)
);

CREATE TABLE tbProduto(
	idProduto			INT PRIMARY KEY IDENTITY(1,1),
	descricaoProduto	VARCHAR(80),
	valorProduto		MONEY,
	quantidadeProduto	INT,
	idFabricante		INT FOREIGN KEY (idFabricante) REFERENCES tbFabricante (idFabricante),
	idFornecedor		INT FOREIGN KEY (idFornecedor) REFERENCES tbFornecedor (idFornecedor)
);

CREATE TABLE tbVenda(
	idVenda				INT PRIMARY KEY IDENTITY(1,1),
	dataVenda			DATE,
	valorTotalVenda		MONEY,
	idCliente			INT FOREIGN KEY (idCliente) REFERENCES tbCliente (idCliente),
);

CREATE TABLE tbItensVenda(
	idItensVenda		 INT PRIMARY KEY IDENTITY(1,1),
	idVenda				 INT FOREIGN KEY (idVenda) REFERENCES tbVenda (idVenda),
	idProduto			 INT FOREIGN KEY (idProduto) REFERENCES tbProduto (idProduto),
	quantidadeItensVenda INT,
	subTotalItensVenda	 INT
);