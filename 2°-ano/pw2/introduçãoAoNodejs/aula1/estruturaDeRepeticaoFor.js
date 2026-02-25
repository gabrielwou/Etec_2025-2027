/*Crie um programa que mostre no terminal o seguinte padrão:
1
121
12321
1234321
123454321 */
let k=1;

for(let i= 1; i<10;i++){
    let linha="";
    linha = linha + k;
    for(let j=1; j < i;j++){
        if(k<i){
            k++;
            linha = linha+k;
        }
    }
    for(let j=1; j<i;j++){
        if(k !== 1){
            k--;
            linha = linha + k;
        }
    }
    console.log(linha)
    k=1;
}
