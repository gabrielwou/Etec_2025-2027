-- a)
SELECT descricaoProduto,nomeFabricante FROM tbProduto
	INNER JOIN tbFabricante ON
		tbProduto.idFabricante = tbFabricante.idFabricante

-- b)
SELECT descricaoProduto,nomeFornecedor FROM tbProduto
	INNER JOIN tbFornecedor ON
		tbProduto.idFornecedor = tbFornecedor.idFornecedor

-- c)
SELECT nomeFabricante, SUM(quantidadeProduto) as 'Total quantidade de produtos' FROM tbProduto
	INNER JOIN tbFabricante ON
		tbProduto.idFabricante = tbFabricante.idFabricante
			GROUP BY tbFabricante.nomeFabricante