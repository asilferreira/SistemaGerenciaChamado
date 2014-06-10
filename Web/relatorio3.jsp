<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*,java.text.DateFormat"%>
<%
	String usuario = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");
	
	SgcDao dao = new SgcDao();
	
	List<Chamado> cmdos = new ArrayList<Chamado>();
	cmdos = dao.getChamadoData();
	
	%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="css/base.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Chamados abertos</title>
</head>
<body>
<%@include file="nav.jsp" %>
<div id="container">
		<div id="content">
			<div class="middle-unique-col">
<h1>Tickts Abertos</h1>
<%@include file="data.jsp" %>
<p>Chamados com Status Aberto</p>
<div id="formWrapper">
<table border="0" cellspacing="0" cellpadding="0">
<tr>
	<th>Ticket</th><th>Usuario</th><th>Email</th><th>Ramal</th><th>Serviço</th><th>Estado</th><th>Tempo</th>
</tr>
<%
	for(Chamado cmd : cmdos){
%>
<tr>
<td><%=cmd.getIdChamado() %></td>
<td><%=cmd.func.getNome2()%></td>
<td><%=cmd.func.getEmail() %></td>
<td><%=cmd.func.getRamal() %></td>
<td><%=cmd.serv.getNomeServico() %></td>
<td><%=cmd.getStatus() %></td>
<td><%=DateFormat.getDateInstance().format(cmd.getDataAbertura())%></td>
</tr>
<%} %>
</table></div></div></div></div>
</body>
</html>