<%@page import="java.lang.reflect.Array"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*,Dao.*, java.util.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
int id =0;
List<Chamado> chamados = new ArrayList<Chamado>();
SgcDao dao = new SgcDao();
try{
	id = Integer.valueOf(request.getParameter("nome"));
}catch(NumberFormatException e){
	
}
chamados = dao.getChamadoSolicitante(id);
%>
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/base.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Relatorio por executante</title>
<link rel="stylesheet" href="css/base.css">
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/js.js"></script>
<script>
	$(function() {
		$("#names").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : "buscanome.jsp",
					type : "POST",
					dataType : "json",
					data : {
						name : request.term
					},
					success : function(data) {

						response($.map(data, function(item) {
							return {
								label : item.name,
								value : item.value,
							}
						}));
					},
					error : function(error) {
						alert('error: ' + error);
					}
				});
			},
			minLength : 2
		});
	});
</script>
</head>
<body>

	<c:import url="nav.jsp" />
	<div id="container">
		<div id="content">
			<div class="middle-unique-col">
				<h2>Formulario 1</h2>
				<p>
				<h1>Relatorio de Chamados Fechados por Executante</h1>
				<%@include file="data.jsp"%>
				<p>Pesquisar Funcionário</p>
				<div id="formWrapper">
					<form action="" method="post">
						<input type="text" name="nome" id="names" /><br>
						<p>
							<input type="submit" value="Pesquisa">
						</p>
					</form>
					<form action="" method="post" name="tabela">
						<table>
							<tr>
								<th>ID</th>
								<th>FUNCIONARIO</th>
								<th>SERVIÇO</th>
								<th>GRUPO</th>
								<th>DESCRIÇÃO</th>
								<th>CAUSA</th>
								<th>SOLUÇÃO</th>
							</tr>
							<%
								for (Chamado cmd : chamados) {
							%>
							<tr>
								<td><%=cmd.getIdChamado()%></td>
								<td><%=cmd.func.getNome1()%></td>
								<td><%=cmd.serv.getNomeServico()%></td>
								<td><%=cmd.grupo.getNomeGrupo()%></td>
								<td><%=cmd.getDescricao()%></td>
								<td><%=cmd.getDetalhe()%></td>
								<td><%=cmd.getSolucao()%></td>
							</tr>
							<%
								}
							%>
						</table>



					</form>

				</div>
			</div>
		</div>
	</div>
</body>
</html>