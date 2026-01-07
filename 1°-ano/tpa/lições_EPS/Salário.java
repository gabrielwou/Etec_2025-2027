package aula1;
import java.util.Scanner;
public class salarioProf {
    public static void main(String[]args){
        Scanner ler=new Scanner(System.in);
        double horasTrabalhadas,valorHora,descontoInss,salarioBruto,salarioLiquido;
        System.out.println("escreva quantas horas você trabalha por mês ");
        horasTrabalhadas = ler.nextDouble();
        System.out.println("escreva quanto você ganha por hora ");
        valorHora = ler.nextDouble();
        System.out.println("escreva quanto é o desconto do seu inss ");
        descontoInss = ler.nextDouble();
        salarioBruto = horasTrabalhadas*valorHora;
        salarioLiquido = salarioBruto-(salarioBruto*(descontoInss/100));
        System.out.println("seu salário liquido é: "+salarioLiquido);
    }

}
