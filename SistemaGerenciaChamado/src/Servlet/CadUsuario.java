package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Beans.Funcionario;
import Dao.SgcDao;

/**
 * Servlet implementation class CadUsuario
 */
@WebServlet("/CadUsuario")
public class CadUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;
       @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
  
    	   PrintWriter out = response.getWriter();
    	   try{
    		   Funcionario func =new Funcionario();
    		   SgcDao dao = new SgcDao();
    		   
    		   func.setNome1(request.getParameter("nome"));
    		   func.setEmail(request.getParameter("email"));
    		   func.setTelefone(request.getParameter("tel"));
    		   func.setRamal(request.getParameter("ramal"));
    		   func.setSetor(request.getParameter("setor"));
    		   func.setLogin(request.getParameter("login"));
    		   func.setSenha(request.getParameter("senha"));
    		   
    		   dao.cadastraFuncionario(func);
    		   response.sendRedirect("cadastrausuario.jsp");
    		   
    	   }catch(Exception e){
    		   e.printStackTrace();    		   
    	   }
    }
}
