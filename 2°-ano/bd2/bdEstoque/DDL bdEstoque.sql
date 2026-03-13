CREATE DATABASE bd_Estoque
GO
USE bd_Estoque

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

INSERT INTO tbCliente (nomeCliente,cpfCliente,emailCliente,sexoCliente,dataNascimentoCliente)
VALUES
('Armando José Santana',12345678900,'armandojsantana@outlook.com','m','1961-02-21 00:00:00'),
('Sheila Carvalho Leal',45678909823,'scarvalho@g.com.br','f','1978-09-13 00:00:00'),
('Carlos Henrique Souza',76598278299,'cherique@g.com.br','m','1981-09-08 00:00:00'),
('Maria Aparecida Souza',87365309899,'mapdasouza@outlook.com','f','1962-07-07 00:00:00'),
('Adriana Nogueira Silva',76354309388,'drica1977@g.com.br','f','1977-04-09 00:00:00'),
('Paulo Henrique Silva',87390123111,'phsilva80@hotmail.com','m','1987-02-02 00:00:00');
