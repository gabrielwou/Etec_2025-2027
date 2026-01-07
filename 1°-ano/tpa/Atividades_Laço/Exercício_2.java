
package a;
import java.util.Scanner;
public class ap {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int idade, i=0, continuar=0, anoA, anoNasc;
        do {
            System.out.println("insira o ano atual");
            anoA=ler.nextInt();
            System.out.println("insira ano de nascimento");
            anoNasc=ler.nextInt();
            idade=anoA-anoNasc;
            System.out.println("sua idade é " +idade);
            System.out.println("deseja continuar? 1-continuar / 0-sair");
            continuar=ler.nextInt();
            if(continuar==1) {
                i++;
            }
        }while(i==continuar);
    }
}
