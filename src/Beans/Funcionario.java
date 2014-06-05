package Beans;

public class Funcionario extends Pessoa {

	private int matricula_1, matricula_2, solucionador;
	public Grupo grupo;

	public int getSolucionador() {
		return solucionador;
	}

	public void setSolucionador(int solucionador) {
		this.solucionador = solucionador;
	}

	public int getMatricula_1() {
		return matricula_1;
	}

	public void setMatricula_1(int matricula_1) {
		this.matricula_1 = matricula_1;
	}

	public int getMatricula_2() {
		return matricula_2;
	}

	public void setMatricula_2(int matricula_2) {
		this.matricula_2 = matricula_2;
	}

}
