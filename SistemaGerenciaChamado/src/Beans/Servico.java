package Beans;

import java.sql.Date;

public class Servico {

	private int idServico;
	private String nomeServico;
	private String tipoServico;
	private String SLA;

	public String getSLA() {
		return SLA;
	}

	public void setSLA(String sLA) {
		SLA = sLA;
	}

	public String getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(String tipoServico) {
		this.tipoServico = tipoServico;
	}

	public int getIdServico() {
		return idServico;
	}

	public void setIdServico(int idServico) {
		this.idServico = idServico;
	}

	public String getNomeServico() {
		return nomeServico;
	}

	public void setNomeServico(String nomeServico) {
		this.nomeServico = nomeServico;
	}
}
