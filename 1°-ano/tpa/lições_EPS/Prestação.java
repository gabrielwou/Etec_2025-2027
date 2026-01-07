package aula1;
import java.util.Scanner;
public class prestacao {
  public static void main(String[]args{
    Scanner ler=new Scanner(System.in);
    double taxa,valor,tempo,prestação;
    System.out.println("escreva o valor da taxa ";
    taxa = ler.nextDouble();
    System.out.println("escreva quanto custou o produto ";
    valor = ler.nextDouble();
    System.out.println("escreva quanto tempo demorou para efetuar o pagamento ");
    prestação = valor + (valor*(taxa/100)*tempo);
    System.out.println("O valor da prestação é de "+ prestação);
  }
}
