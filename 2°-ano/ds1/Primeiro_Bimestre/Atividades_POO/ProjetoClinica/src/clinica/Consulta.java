package clinica;

public class Consulta {
    private String data;
    private String hora;
    private String medicoConsulta;
    private String pacienteConsulta;

	public String getData() {
        return data;
    }
	
    public void setData(String data) {
        this.data = data;
    }

    public String getHora() {
        return hora;
    }
    
    public void setHora(String hora) {
        this.hora = hora;
    }
    
    public String getMedicoConsulta() {
		return medicoConsulta;
	}
    
	public void setMedicoConsulta(String medicoConsulta) {
		this.medicoConsulta = medicoConsulta;
	}
	
	public String getPacienteConsulta() {
		return pacienteConsulta;
	}
	
	public void setPacienteConsulta(String pacienteConsulta) {
		this.pacienteConsulta = pacienteConsulta;
	}
}
