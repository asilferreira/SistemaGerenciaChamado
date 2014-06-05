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
@WebServlet("/AtualizaChamado")
public class AtualizaChamado extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		int usu = 0;
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		int usuariof = (int) session.getAttribute("id");
		int servico = Integer.valueOf(request.getParameter("servico"));
		int grupo = Integer.valueOf(request.getParameter("grupo"));
		int sta = Integer.parseInt(request.getParameter("situacao"));
		String detalhe = request.getParameter("detal");
		String solucao = request.getParameter("soluc");
		int idchamado = Integer.parseInt(request.getParameter("idchamado"));

		Chamado cmd = new Chamado();
		cmd.serv.setIdServico(servico);
		cmd.grupo.setIdGrupo(grupo);
		cmd.setSta(sta);
		cmd.setDetalhe(detalhe);
		cmd.setSolucao(solucao);
		cmd.func.setSolucionador(usuariof);
		cmd.setIdChamado(idchamado);
		try {
			SgcDao dao = new SgcDao();
			dao.AlteraChamado(cmd);
			out.println("<script>alert(' Chamado Alterado.');</script>");
			out.println("<script>window.location.assign('inicio.jsp');</script>");
			// response.sendRedirect("inicio.jsp");

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
