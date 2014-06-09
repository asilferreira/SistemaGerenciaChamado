<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*,java.text.DateFormat"%>
<%
	String usuario = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");
	if (usuario == null || idU == 0) {
%>
<script>
	alert('Usuario e/ou senha incorretos ...');
	window.location.assign("index.jsp");
</script>
<%
	}
	
	SgcDao dao = new SgcDao();
	
	List<Chamado> cmdos = new ArrayList<Chamado>();
	cmdos = dao.getListaChamado(idU);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="js\js.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Home</title>
<link rel="stylesheet" href="css/base.css">
</head>
<body>
	<div id="top">
		<div id="nav">
			<ul>
				<li><a href="inicio.jsp">Inicio</a></li>
				<li><a href="#">Chamados</a>
					<ul>
						<li>
						<li><a href="chamados.jsp">Meus Chamados</a>
						<li><a href="novochamado.jsp">Novo Chamado</a></li>
					</ul></li>
				<li><a href="cadastrausuario.jsp">Cadastrar</a></li>
				<li><a href="#">Relatorio</a></li>
				<li><a href="index.jsp">Logoff</a></li>
			</ul>
		</div>
	</div>
<div id="container">
	<div id="content">
		<div class="middle-unique-col">
	<div id="rodape">
	<img alt="" src="img/saojose.gif">
		        <p align="center">
				<font size= "5" face="Verdana"> 
				BEM VINDO !<br>
				<%=usuario%>
	     		</font>
	     		
	   </p>
	   
	   </div>
	</div>
	   
		</div></div>
	<!-- <div id="paginacentral"> -->
	<!-- 	<iframe name="iframecentral"> -->
	<!-- <!-- 	<div id="container"><div id="content"><div class="middle-unique-col"> -->
	<!-- <!-- 		</div></div></div> -->
	<!-- 	</iframe> -->
	<!-- </div> -->
	 
<center>Projeto - Sistema de Chamados - Turma 2014- TSI - FSJ</center>
</body>
</html>