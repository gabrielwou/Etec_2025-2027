INSERT INTO tbCliente (nomeCliente,idadeCliente)
VALUES
('Armando José Santana',35),
('Sheila Carvalho Leal',27),
('Carlos Henrique Souza',19),
('Maria Aparecida Souza',60),
('Paulo Henrique Silva',28);

INSERT INTO tbFabricante (nomeFabricante)
VALUES
('Malwee'),
('Marisol'),
('Cia da Malha');

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

INSERT INTO tbFuncionario (nomeFuncionario,idadeFuncionario,dataAdmissao,salarioFuncionario)
VALUES
('Adriana Nogueira Silva',26,'2023-06-01',1500.00),
('Gabriel Penha',19,'2027-04-02',42000.00);

INSERT INTO tbVendedor (nomeVendedor)
VALUES
('João Santana'),
('Raquel Torres');

INSERT INTO tbVenda(dataVenda,valorTotalVenda,idCliente,idVendedor)
VALUES
('2023-02-07',15000.00,1,1),
('2022-05-02',10000.00,2,2),
('2020-02-10',100.00,3,1),
('2020-07-01',30000.00,4,1),
('2021-02-02',7000.00,5,2);

INSERT INTO tbItensVenda(idVenda,idProduto,quantidadeItens,subTotalItens)
VALUES
(1,1,5,),
(2,3,12,),
(3,5,7,),
(4,4,3,),
(5,2,9,);

select*from tbCliente