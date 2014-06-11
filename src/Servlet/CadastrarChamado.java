package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Beans.Chamado;
import Dao.SgcDao;

/**
 * Servlet implementation class cadastrarchamado
 */
@WebServlet("/CadastrarChamado")
public class CadastrarChamado extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		int usu = 0;
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		int usuariof = (int) session.getAttribute("id");
		String usuario = request.getParameter("usuario");
		int servico = Integer.valueOf(request.getParameter("servico"));
		int grupo = Integer.valueOf(request.getParameter("grupo"));
		String descricao = request.getParameter("descricao");
		int sta = Integer.parseInt(request.getParameter("situacao"));
		String detalhe = request.getParameter("detal");
		String solucao = request.getParameter("soluc");
		int solucionador = usuariof;
		try {
			SgcDao ex = new SgcDao();
			usu = ex.nome(usuario);

			Chamado cmd = new Chamado();
			cmd.func.setMatricula_1(usuariof);
			cmd.func.setMatricula_2(usu);
			cmd.serv.setIdServico(servico);
			cmd.grupo.setIdGrupo(grupo);
			cmd.setDescricao(descricao);
			cmd.setSta(sta);
			cmd.setDetalhe(detalhe);
			cmd.setSolucao(solucao);
			cmd.func.setSolucionador(solucionador);
			
			SgcDao dao = new SgcDao();
			dao.registraChamado(cmd);
			int retorno = ex.retornaChamado(cmd.getIdChamado());
			out.println("<script>alert(' Chamado número: "+retorno+" criado.');</script>");
			out.println("<script>window.location.assign('chamados.jsp');</script>");
		//	response.sendRedirect("inicio.jsp");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		


		
	}
}
