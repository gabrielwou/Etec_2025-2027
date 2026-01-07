package aula1;
import java.util.Scanner;
public class quatroNotas {
    public static void main(String[]args){
        Scanner ler=new Scanner(System.in);
        double nota1,nota2,nota3,nota4,resultado;
        System.out.println("escreva sua primeira nota");
        nota1 = ler.nextDouble();
        System.out.println("escreva sua segunda nota");
        nota2 = ler.nextDouble();
        System.out.println("escreva sua terceira nota");
        nota3 = ler.nextDouble();
        System.out.println("escreva sua quarta nota");
        nota4 = ler.nextDouble();
        resultado = (nota1+nota2+nota3+nota4)/4;
        System.out.println("sua média é "+resultado);
   }

}
