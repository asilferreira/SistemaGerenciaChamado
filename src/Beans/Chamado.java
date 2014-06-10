package Beans;

import java.sql.Date;
import java.sql.Timestamp;

public class Chamado {
	private int idChamado, sta;
	private Date dataAbertura;
	private String dataFechamento;
	public Funcionario func = new Funcionario();
	public Grupo grupo = new Grupo();
	public Servico serv = new Servico();
	private String descricao, detalhe, solucao, status;

	public int getSta() {
		return sta;
	}
	public void setSta(int sta) {
		this.sta = sta;
	}

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public int getIdChamado() {
		return idChamado;
	}

	public void setIdChamado(int idChamado) {
		this.idChamado = idChamado;
	}

	

	public Date getDataAbertura() {
		return dataAbertura;
	}

	public void setDataAbertura(Date dataAbertura) {
		this.dataAbertura = dataAbertura;
	}

	public String getDataFechamento() {
		return dataFechamento;
	}

	public void setDataFechamento(String dataFechamento) {
		this.dataFechamento = dataFechamento;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getDetalhe() {
		return detalhe;
	}

	public void setDetalhe(String detalhe) {
		this.detalhe = detalhe;
	}

	public String getSolucao() {
		return solucao;
	}

	public void setSolucao(String solucao) {
		this.solucao = solucao;
	}

}
