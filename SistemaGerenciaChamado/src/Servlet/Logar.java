package Servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Beans.Chamado;
import Beans.Funcionario;
import Dao.SgcDao;

/**
 * Servlet implementation class Logar
 */
@WebServlet("/Logar")
public class Logar extends HttpServlet {
	@Override
	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		SgcDao dao;

		String usuario, senha;
		usuario = request.getParameter("usuario");
		senha = request.getParameter("senha");
		try {
			Funcionario func = new Funcionario();
			func.setLogin(usuario);
			func.setSenha(senha);
			dao = new SgcDao();
			dao.loga(func);
			HttpSession session = request.getSession();
			session.setAttribute("usuario", func.getNome1());
			session.setAttribute("id", func.getMatricula_1());
			response.sendRedirect("inicio.jsp");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
