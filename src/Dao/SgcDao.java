package Dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import Beans.Chamado;
import Beans.Funcionario;
import Beans.Grupo;
import Beans.Servico;
import Jdbc.ConnectionFactory;

public class SgcDao {

	private Connection connection;

	public SgcDao() throws SQLException {
		this.connection = new ConnectionFactory().getConnection();
	}

	/**
	 * Métodos de cadastro
	 * */

	public void cadastraGrupo(Grupo grupo) {

		String sql = "insert into grupo (nome_grupo, sigla, descricao) values (?,?,?)";

		try {
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setString(1, grupo.getNomeGrupo());
			stmt.setString(2, grupo.getSiglaGrupo());
			stmt.setString(3, grupo.getDescricaoGrupo());

			stmt.execute();
			stmt.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}

	}

	public void cadastraServico(Servico serv) {

		String sql = "insert into servico (nomeServico, SLA) values (?,?)";

		try {
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setString(1, serv.getNomeServico());
			stmt.setString(2, serv.getSLA());

			stmt.execute();
			stmt.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}

	}

	public void cadastraFuncionario(Funcionario func) {

		String sql = "insert into Funcionario (nome, email, telefone, "
				+ "ramal, setor, login, senha)" + "values (?,?,?,?,?,?,?)";

		try {
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setString(1, func.getNome1());
			stmt.setString(2, func.getEmail());
			stmt.setString(3, func.getTelefone());
			stmt.setString(4, func.getRamal());
			stmt.setString(5, func.getSetor());
			stmt.setString(6, func.getLogin());
			stmt.setString(7, func.getSenha());
			// stmt.setInt(8, func.grupo.idGrupo);

			stmt.execute();
			stmt.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
	}

	public void registraChamado(Chamado cmd) {

		String sql = "insert into ab_chamado (Id_funcionario, Id_usuario, Id_servico,"
				+ " Id_grupo, descricao_chamado, sta, detalhe_causa,"
				+ " solucao_resposta, id_tecsolucionador)"
				+ "values (?,?,?,?,?,?,?,?,?)";

		try {
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setInt(1, cmd.func.getMatricula_1());
			stmt.setInt(2, cmd.func.getMatricula_2());
			stmt.setInt(3, cmd.serv.getIdServico());
			stmt.setInt(4, cmd.grupo.getIdGrupo());
			stmt.setString(5, cmd.getDescricao());
			stmt.setInt(6, cmd.getSta());
			stmt.setString(7, cmd.getDetalhe());
			stmt.setString(8, cmd.getSolucao());
			stmt.setInt(9, cmd.func.getSolucionador());

			stmt.execute();
			stmt.close();

		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
	}

	/**
	 * Fim métodos de cadastro
	 * */

	public void AlteraChamado(Chamado cmd) {

		String sql = "update ab_chamado set Id_servico = ?, Id_grupo = ?,"
				+ "sta = ?, detalhe_causa = ?, solucao_resposta = ?, id_tecsolucionador = ?, data_finlz = ? "
				+ "where Id_chamado = ?";

		try {
			PreparedStatement stmt = connection.prepareStatement(sql);

			Date data = new Date(System.currentTimeMillis());
			Timestamp time = new Timestamp(data.getTime());
			stmt.setInt(1, cmd.serv.getIdServico());
			stmt.setInt(2, cmd.grupo.getIdGrupo());
			stmt.setInt(3, cmd.getSta());
			stmt.setString(4, cmd.getDetalhe());
			stmt.setString(5, cmd.getSolucao());
			stmt.setInt(6, cmd.func.getSolucionador());
			stmt.setTimestamp(7, time);
			stmt.setInt(8, cmd.getIdChamado());

			stmt.execute();
			stmt.close();

		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	// Método listar
	public List<Chamado> getListaChamado(int id) {
		try {
			PreparedStatement stmt = this.connection
					.prepareStatement("select * from v_union where sta in ('1','3') and id_grupo in "
							+ "(select id_grupo from func_grup where id_funcionario = ?) order by idsla ");
			stmt.setInt(1, id);
			ResultSet rs = stmt.executeQuery();
			List<Chamado> chamados = new ArrayList<Chamado>();
			while (rs.next()) {

				// criando o objeto Contato
				Chamado chamado = new Chamado();
				chamado.setIdChamado(rs.getInt("Id"));
				chamado.func.setNome1(rs.getString("funcionario"));
				chamado.func.setNome2(rs.getString("usuario"));
				chamado.func.setEmail(rs.getString("email"));
				chamado.func.setTelefone(rs.getString("telefone"));
				chamado.func.setRamal(rs.getString("ramal"));
				chamado.serv.setNomeServico(rs.getString("Servico"));
				chamado.serv.setTipoServico(rs.getString("tipo"));
				chamado.serv.setSLA(rs.getString("sla"));
				chamado.grupo.setNomeGrupo(rs.getString("Grupo"));
				chamado.setDescricao(rs.getString("Descricao"));
				chamado.setDataAbertura(rs.getDate("abertura"));
				chamado.setSta(rs.getInt("sta"));
				chamado.setStatus(rs.getString("estado"));
				chamado.setDetalhe(rs.getString("causa"));
				chamado.setSolucao(rs.getString("solucao"));

				chamados.add(chamado);
			}
			rs.close();
			stmt.close();
			return chamados;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public void loga(Funcionario func) {
		try {
			String sql = "select * from funcionario"
					+ " where login = ? and senha= ?";
			PreparedStatement stmt = connection.prepareStatement(sql);
			stmt.setString(1, func.getLogin());
			stmt.setString(2, func.getSenha());
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				func.setMatricula_1(rs.getInt("Id_funcionario"));
				func.setNome1(rs.getString("nome"));
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {
			e.getStackTrace();
		}
	}

	public List<Servico> listaServico() {
		List<Servico> servicos = new ArrayList<Servico>();
		try {
			String sql = "select * from servico";
			PreparedStatement stmt = connection.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				Servico serv = new Servico();
				serv.setNomeServico(rs.getString("nome_serv"));
				serv.setIdServico(rs.getInt("Id_servico"));
				servicos.add(serv);
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return servicos;
	}

	public List<Grupo> listaGrupo() {
		List<Grupo> grupos = new ArrayList<Grupo>();
		try {
			String sql = "select * from grupo";
			PreparedStatement stmt = connection.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				Grupo grup = new Grupo();
				grup.setNomeGrupo(rs.getString("nome_grupo"));
				grup.setIdGrupo(rs.getInt("Id_grupo"));
				grupos.add(grup);
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return grupos;
	}

	public List<Funcionario> preencheDados(String nome) {
		List<Funcionario> func = new ArrayList<>();
		try {
			String sql = "select email, telefone, ramal from funcionario where nome = ?";
			PreparedStatement stmt = this.connection.prepareStatement(sql);
			stmt.setString(1, nome);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				Funcionario funcionario = new Funcionario();
				funcionario.setEmail(rs.getString("email"));
				funcionario.setTelefone(rs.getString("telefone"));
				funcionario.setRamal(rs.getString("ramal"));
				func.add(funcionario);
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {

		}
		return func;
	}

	public List<Funcionario> prenomes() {
		// List<String> func = new ArrayList<>();
		List<Funcionario> func = new ArrayList<Funcionario>();
		try {
			String sql = "select * from funcionario";
			PreparedStatement stmt = this.connection.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				Funcionario funcionario = new Funcionario();
				funcionario.setMatricula_1(rs.getInt("Id_funcionario"));
				funcionario.setNome1(rs.getString("nome"));
				func.add(funcionario);
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {

		}
		return func;
	}

	public List<Chamado> getChamado(int id) {
		List<Chamado> chamados = new ArrayList<>();
		try {
			String sql = "select * from v_union where id = ?";
			PreparedStatement stmt = this.connection.prepareStatement(sql);
			stmt.setInt(1, id);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {

				// criando o objeto Contato
				Chamado chamado = new Chamado();

				chamado.setSta(rs.getInt("sta"));

				chamados.add(chamado);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return chamados;
	}

	public int nome(String nome) {
		int matricula = 0;
		String sql = "select id_funcionario from funcionario where nome = ?";
		PreparedStatement stmt;
		try {
			stmt = connection.prepareStatement(sql);
			stmt.setString(1, nome);
			ResultSet rs = stmt.executeQuery();

			while (rs.next()) {
				matricula = rs.getInt("id_funcionario");
			}
			rs.close();
			stmt.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return matricula;

	}

	public int retornaChamado(int id) {
		int result = 0;
		try {
			String sql = "select id_chamado from ab_chamado order by id_chamado desc limit 1";
			PreparedStatement stmt = this.connection.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				result = rs.getInt("id_chamado");
			}
			rs.close();
			stmt.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
