package pescaria;
import java.util.*;
public class pescaria{
    public static void main(String[]args){
    Scanner ler=new Scanner(System.in);
    double pesoP,quilo=0;
    System.out.println("informe o peso do peixe");
    pesoP = ler.nextDouble();
    if(pesoP<=3){
      quilo=25;
      System.out.println("o valor do peixe por quilo é: "+quilo+"R$");
    } else if(pesoP<=5){
        quilo=24;
        System.out.println("o valor do peixe por quilo é: "+quilo+"R$");
      } else if(pesoP<=10){
          quilo=23;
          System.out.println("o valor do peixe por quilo é: "+quilo+"R$");
          }else if(pesoP>10){
                quilo=20;
                System.out.println("o valor do peixe por quilo é: "+quilo+"R$"+"taxa adicional de 30R$");
                }
    }
}
