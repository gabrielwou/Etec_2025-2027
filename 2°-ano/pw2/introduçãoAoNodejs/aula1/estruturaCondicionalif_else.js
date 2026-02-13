const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira sua idade",(resposta) => {
    let idade = Number(resposta);
    console.log("idade salva", idade);
    rl.close();
    
    if (idade >= 18){
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }

    rl.close();
});
