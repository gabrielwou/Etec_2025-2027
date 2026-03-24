INSERT INTO tbFabricante (nomeFabricante)
VALUES
('Malwee'),
('Marisol'),
('Cia da Malha');

INSERT INTO tbCliente (nomeCliente,idadeCliente)
VALUES
('Armando José Santana',35),
('Sheila Carvalho Leal',27),
('Carlos Henrique Souza',19),
('Maria Aparecida Souza',60),
('Paulo Henrique Silva',28);

INSERT INTO tbVendedor (nomeVendedor)
VALUES
('João Santana'),
('Raquel Torres');

INSERT INTO tbFuncionario (nomeFuncionario,idadeFuncionario,dataAdmissao,salarioFuncionario)
VALUES
('Adriana Nogueira Silva',26,'2023-06-01',1500.00),
('Gabriel Penha',19,'2027-04-02',4200.00),
('Anderson Silva',37,'2015-03-12',7540.00);

INSERT INTO tbProduto (nomeProduto,precoProduto,dataEntradaProduto,idFabricante,idFuncionario)
VALUES
('RTX5090 TI',35000.00,'2023-05-22',1,1),
('Monitor OLED Samsung odyssey',1000000.00,'2026-01-22',1,2),
('New nintendo 3DS XL Pokémon Sun and Moon',800.00,'2016-09-22',1,1),
('Orquideas Lumiere',34.00,'2019-08-12',2,1),
('tulipa',12.00,'2025-03-26',2,2),
('Baunilha',100.00,'2020-02-02',2,1),
('Cota de malha',4500.00,'2010-08-14',3,2),
('Kanata de aço damasco',5000.00,'2023-05-22',3,1),
('Besta tática',500.00,'2023-05-22',3,2);

INSERT INTO tbVenda(dataVenda,valorTotalVenda,idCliente,idVendedor)
VALUES
('2023-02-07',15000.00,1,1),
('2022-05-02',10000.00,2,2),
('2020-02-10',100.00,3,1),
('2020-07-01',30000.00,4,1),
('2021-02-02',7000.00,5,2);

INSERT INTO tbItensVenda(idVenda,idProduto,quantidadeItens,subTotalItens)
VALUES
(1,1,5,75000.00),
(2,3,12,120000.00),
(3,5,7,700.00),
(4,4,3,90000.00),
(5,2,9,63000.00),
(5,6,1,100.00),
(4,7,3,31500.00),
(3,8,7,35000.00),
(2,9,2,1000.00),
(1,1,6,210000.00);

-- 1)
UPDATE tbFabricante SET nomeFabricante = 'Turma da Malha' WHERE nomeFabricante = 'Cia da Malha'
SELECT nomeFabricante FROM tbFabricante 

-- 2)
UPDATE tbVenda SET valorTotalVenda = valorTotalVenda * 0.90 WHERE idCliente = 1
SELECT valorTotalVenda FROM tbVenda WHERE idCliente = 1

-- 3)
UPDATE tbProduto SET precoProduto = precoProduto * 1.20 WHERE idFabricante = 2
SELECT nomeProduto,precoProduto FROM tbProduto WHERE idFabricante = 2

-- 4)
UPDATE tbItensVenda SET quantidadeItens = quantidadeItens - 10 WHERE idProduto = 3 
SELECT quantidadeItens FROM tbItensVenda WHERE idProduto = 3

-- 5)
DELETE FROM tbItensVenda WHERE idVenda = 2 AND idItensVenda = 9 ;
SELECT*FROM tbItensVenda WHERE idVenda = 2

-- 6)
DELETE FROM tbItensVenda WHERE idVenda = 3
SELECT*FROM tbItensVenda

-- 7)
DELETE FROM tbFabricante WHERE idFabricante = 1
-- Não consegui deletar o fabricante de codigo 1 por que ele tem referência foreign key em outras tabelas.
