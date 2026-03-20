import java.util.Scanner;

public class Menu {
	
	public void exibirMenu() {
		Scanner ler = new Scanner(System.in);
		System.out.println("Digite o número do programa que deseja: "+
				"\n"
				+ "1 – Área do Retângulo\r\n"
				+ "2 – Área do Triângulo\r\n"
				+ "3 – Área do Círculo\r\n"
				+ "4 – Área do Losango\r\n"
				+ "5 – Sair");
		int numero = ler.nextInt();
		
		System.out.println("Você selecionou: ");
		System.out.print(numero + " - ");
		if(numero == 1) {
			System.out.print("Área do Retângulo");
		}else if(numero == 2) {
			System.out.print("Área do Triângulo");
		}else if(numero == 3) {
			System.out.print("Área do Círculo");
		}else if(numero == 4) {
			System.out.print("Área do Losango");
		}else if(numero == 5) {
			System.out.print("Sair");
		}
		
		
	}
}
