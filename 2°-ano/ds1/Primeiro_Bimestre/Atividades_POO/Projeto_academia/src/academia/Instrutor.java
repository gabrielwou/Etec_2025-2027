package academia;
import heranca.Pessoa;

public class Instrutor extends Pessoa{
	private int Codigo;
	private String aluno[];
	private String contrato;
	
	public int getCodigo() {
		return Codigo;
	}
	public void setCodigo(int codigo) {
		Codigo = codigo;
	}
	
	public String[] getAluno() {
		return aluno;
	}
	
	public void setAluno(String[] aluno) {
		this.aluno = aluno;
	}
	
	public String getContrato() {
		return contrato;
	}
	
	public void setContrato(String contrato) {
		this.contrato = contrato;
	}
	
}
