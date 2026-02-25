//Crie um programa que mostre a soma de todos os numeros em um vetor e o maior numero do vetor
let l,n,m;
n=0;
l=0;
const numeros = [3,7,2,10,5];

for(i = 0;i < 5; i++){
    m = numeros[i];
    n = m+n;
    if(l < m){
        l = m;
    }
}
console.log("Soma do vetor= "+n);
console.log("Maior número do vetor= "+l);