-- 1)
SELECT nomeAluno as Nome, rgAluno as RG, dataNascimento as 'Data de Nascimento' FROM tbAluno 
WHERE naturalidadeAluno = 'SP'

-- 2)
SELECT nomeAluno as Nome, rgAluno as RG FROM tbAluno 
WHERE nomeAluno LIKE 'P%'

-- 3)
SELECT nomeCurso as Curso FROM tbCurso 
WHERE cargahorariaCurso > 2000

-- 4)
SELECT nomeAluno as Nome, rgAluno as RG FROM tbAluno 
WHERE nomeAluno LIKE '%Silva%'

-- 5)
SELECT nomeAluno as Nome, dataNascimento as 'Data de Nascimento' FROM tbAluno
WHERE DATEPART(MONTH,dataNascimento) = 03

-- 6)
SELECT dataMatricula as 'Data da Matricula',idAluno as Aluno FROM tbMatricula
WHERE DATEPART(MONTH,dataMatricula) = 05

-- 7)
SELECT idAluno as Aluno FROM tbMatricula 
WHERE idTurma = 1 OR idTurma = 2

-- 8)
SELECT idAluno as Aluno FROM tbMatricula 
WHERE idTurma = 3

-- 9)
SELECT*FROM tbAluno

-- 10)
SELECT*FROM tbTurma