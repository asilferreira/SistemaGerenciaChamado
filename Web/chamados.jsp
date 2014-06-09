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
<title>Meus Chamados</title>
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
				<h2>
					Funcionario:
					<%=usuario%></h2>

				<form action="" method="post" name="inicio">
					<p>
						<input type="button" name="" class="botao" Value="Novo Chamado"
							onclick="location.href='novochamado.jsp'"> <span>
							<%
								for(Chamado cmd : cmdos){
							%>
						</span>
					<table border="0" width="80%">
						<tr>
							<th>N�mero do Chamado</th>
							<th>tipo de Solicita��o</th>
							<th>grupo executor</th>
							<th>data de abertura</th>
						</tr>
						<tr>
							<td><%=cmd.getIdChamado()%></td>
							<td><%=cmd.serv.getTipoServico()%></td>
							<td><%=cmd.grupo.getNomeGrupo()%></td>
							<td><%=DateFormat.getDateInstance().format(cmd.getDataAbertura())%></td>
						</tr>
						<tr>
							<th colspan="2">Servi�o</th>
							<th colspan="2">Solicitante</th>
						</tr>
						<tr>
							<td colspan="2"><%=cmd.serv.getNomeServico()%></td>
							<td colspan="2"><%=cmd.func.getNome2()%></td>
						</tr>
						<tr>
							<th colspan="2">Aberto por</th>
							<th>Status</th>
							<th>Prioridade</th>
						</tr>
						<tr>
							<td colspan="2"><%=cmd.func.getNome1()%></td>
							<td><%=cmd.getStatus()%></td>
							<td><%=cmd.serv.getSLA()%></td>
						</tr>
						<tr>
							<td colspan="2"><a
								href="tratarchamado.jsp?idchamado=<%=cmd.getIdChamado()%>&usuario=<%=cmd.func.getNome2()%>&email=<%=cmd.func.getEmail()%>&telefone=
				<%=cmd.func.getTelefone()%>&ramal=<%=cmd.func.getRamal()%>&servico=<%=cmd.serv.getNomeServico()%>
				&grupo=<%=cmd.grupo.getNomeGrupo()%>&descricao=<%=cmd.getDescricao()%>">Executar</a></td>
						</tr>
					</table>
					<br>
					<hr>
					<br>
					<%
						}
					%>
				</form>
			</div>
		</div>
	</div>


</body>
</html>