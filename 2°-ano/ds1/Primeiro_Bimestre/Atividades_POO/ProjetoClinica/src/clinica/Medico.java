package clinica;
import heranca.Pessoa;
public class Medico extends Pessoa {
	private String especialidade;
	private String crm;
	
	public String getCrm() {
		return crm;
	}
	public void setCrm(String crm) {
        this.crm = crm;
    }
	public String getEspecialidade() {
		return especialidade;
	}
	public void setEspecialidade(String especialidade) {
		this.especialidade = especialidade;
	}
	

}
