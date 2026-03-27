import java.util.Scanner;

public class Menu {
	
	public void exibirMenu(int numero) {
		Scanner ler = new Scanner(System.in);
		System.out.println("Digite o número do programa que deseja: "+
				"\n"
				+ "1 – Área do Retângulo\r\n"
				+ "2 – Área do Triângulo\r\n"
				+ "3 – Área do Círculo\r\n"
				+ "4 – Área do Losango\r\n"
				+ "5 – Sair");
			numero = ler.nextInt();
		
		System.out.print("Você selecionou: "+numero);
		if(numero == 1) {
			return;
		}else if(numero == 2) {
			return;
		}else if(numero == 3) {
			return;
		}else if(numero == 4) {
			return;
		}else if(numero == 5) {
			return;
		}
	}
}
