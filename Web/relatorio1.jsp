<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*,java.text.DateFormat"%>
<%
	String usuario = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");
	
	SgcDao dao = new SgcDao();
	
	List<Chamado> cmdos = new ArrayList<Chamado>();
	cmdos = dao.getChamadoAberto();
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
<h1>Tickts Abertos</h1>
<%@include file="data.jsp" %>
<p>Chamados com Status Aberto</p>

<table border="0" cellspacing="0" cellpadding="0">
<tr>
	<th>Ticket</th><th>Usuario</th><th>Email</th><th>Ramal</th><th>Serviço</th><th>Grupo</th><th>SLA</th>
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
<td><%=cmd.grupo.getNomeGrupo() %></td>
<td><%=cmd.serv.getSLA() %></td>
</tr>
<%} %>
</table>
</body>
</html>