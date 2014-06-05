<%@page import="java.lang.reflect.Array"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*"%>
<%
	String usuariof = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");
	List<Funcionario> func = new ArrayList<Funcionario>();
	SgcDao dao = new SgcDao();
	String nome = request.getParameter("usuario");
	func = dao.preencheDados(nome);
%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="js/jquery-ui.css" />
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/js.js"></script>
<script>
	$(function() {
		$("#names").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : "searchName.jsp",
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
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>Formulario 1</h2>
	<p>
		Funcionario
		<%=usuariof%>
	</p>
	<form action="javascript:void(0)" method="post" name="abrechamado">
		<fieldset>
			<legend> Dados do Usuario</legend>
			<table>
				<tr>
					<td>Usuario:</td>
					<td><input type="text" name="usuario" value="${param.usuario}"
						id="names" onblur="reenvia()">*</td>
				</tr>
				<tr>
					<%
						for(Funcionario f : func){
					%>
					<td>E-mail:</td>
					<td><input type="text" name="email" value="<%=f.getEmail()%>"></td>
				</tr>
				<tr>
					<td>Telefone:</td>
					<td><input type="text" name="telefone"
						value="<%=f.getTelefone()%>"
						onKeyPress="return txtBoxFormat(this, '(99)9999-9999', event); return apenas_numero(event);"></td>
				</tr>
				<tr>
					<td>Ramal:</td>
					<td><input type="text" name="ramal" value="<%=f.getRamal()%>"></td>
				</tr>
				<%
					}
				%>
			</table>
		</fieldset>
		<fieldset>
			<legend>Dados do Servico</legend>
			<table>
				<tr>
					<td>Servico:</td>
					<td><select name="servico">
							<option></option>
							<%
								List<Servico> servico =new ArrayList<Servico>();
													servico = dao.listaServico();
													for(Servico serv : servico){
							%>
							<option value="<%=serv.getIdServico()%>">
								<%=serv.getNomeServico()%>
							</option>
							<%
								}
							%>
					</select>*</td>
				</tr>
				<tr>
					<td>Grupo Executor:</td>
					<td><select name="grupo">
							<option></option>
							<%
								List<Grupo> grupo =new ArrayList<Grupo>();
													grupo = dao.listaGrupo();
													for(Grupo grup : grupo){
														if(grup.getIdGrupo()==4){
															continue;
															}
							%>							
							<option value="<%=grup.getIdGrupo()%>">
								<%=grup.getNomeGrupo()%>
							</option>
							<%
								}
							%>
					</select>*</td>
				</tr>
				<tr>

					<td colspan="2">Descrição do Chamado<br> <textarea
							name="descricao" cols="40" rows="5">
					</textarea>*
					</td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>Fechamento do Chamado</legend>
			<table>
				<tr>
					<td><label>Abrir</label><input type="radio" name="situacao" value="1"><br> <label>Suspender</label> <input
						type="radio" name="situacao" value="3"><br> <label>Cancelar</label>
						<input type="radio" name="situacao" value="4"><br> <label>Fechar</label>
						<input type="radio" name="situacao" value="2"><br></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="2">Detalhe da Causa<br> <textarea rows="5"
							cols="40" name="detal"></textarea></td>
				</tr>
				<tr>
					<td colspan="2">Solução<br> <textarea rows="5" cols="40"
							name="soluc"></textarea>*
					</td>
				</tr>
			</table>
		</fieldset>
		<table>
			<tr>
				<td><input type="submit" value="Gravar" onClick="cadchamado();"></td>
			</tr>
		</table>

	</form>
</body>
</html>