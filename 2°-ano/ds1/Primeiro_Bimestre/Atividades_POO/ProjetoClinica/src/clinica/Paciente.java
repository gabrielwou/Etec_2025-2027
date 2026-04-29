package clinica;
import heranca.Pessoa;

public class Paciente extends Pessoa {
	    public int codigo;
	    private String descricao;

	    // getters e setters 
	    public String getDescricao() {
	        return descricao;
	    }

	    public void setDescricao(String descricao) {
	        this.descricao = descricao;
	    }
	    
	    public int getCodigo() {
	        return codigo;
	    }

	    public void setCodigo(int codigo) {
	        this.codigo = codigo;
	    }
	    
	    
}
