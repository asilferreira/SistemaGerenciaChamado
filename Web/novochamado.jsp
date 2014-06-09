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
<link rel="stylesheet" href="css/base.css">
<!-- <link rel="stylesheet" href="js/jquery-ui.css" /> -->
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
<title></title>
<style type="text/css">
</style>
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
				<h2>Formulario 1</h2>
				<p>
					Funcionario
					<%=usuariof%>
				</p>
				<div id="formWrapper">
					<form action="javascript:void(0)" method="post" name="abrechamado">
						<fieldset>
							<legend>Dados do Usuario</legend>
							<table class="tabela-invisivel">
								<tr>
									<td width="5%"><label class="labelone" for="usuario">Usuário:
									</label></td>
									<td style="text-align: left;"><input style="width: 30%;"
										type="text" name="usuario" value="${param.usuario}" id="names"
										onblur="reenvia()">*</td>
								</tr>
								<%
									for(Funcionario f : func){
								%>
								<tr>
									<td><label for="email">Email: </label></td>
									<td style="text-align: left;"><input style="width: 30%;"
										type="text" name="email" value="<%=f.getEmail()%>"><br></td>
								</tr>
								<tr>
									<td><label for="telefone">Telefone: </label></td>
									<td style="text-align: left;"><input style="width: 30%;"
										type="text" name="telefone" value="<%=f.getTelefone()%>"
										onKeyPress="return txtBoxFormat(this, '(99)9999-9999', event); return apenas_numero(event);">
								</tr>
								<tr>
									<td><label for="ramal">Ramal: </label></td>
									<td style="text-align: left;"><input style="width: 30%;"
										type="text" name="ramal" value="<%=f.getRamal()%>"></td>
								</tr>

								<%
									}
								%>
							</table>
						</fieldset>
						<br>
						<fieldset>
							<legend>Dados do Servico</legend>
							<p>
								Servico: <select name="servico">
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
								</select>*
							</p>
							<p>
								Grupo Executor: <select name="grupo">
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
								</select>*
							</p>
							<p>
								Descrição do Chamado <br>
								<textarea name="descricao" cols="100" rows="5">
					</textarea>
								*
							</p>
						</fieldset>
						<br>
						<fieldset>
							<legend>Fechamento do Chamado:</legend>
							<p>
								<label>Abrir</label><input type="radio" name="situacao"
									value="1"><br> <label>Suspender</label> <input
									type="radio" name="situacao" value="3"><br> <label>Cancelar</label><input
									type="radio" name="situacao" value="4"><br> <label>Fechar</label><input
									type="radio" name="situacao" value="2"><br>
							</p>
							<br>
							<p>
								Detalhe da Causa:<br>
								<textarea rows="5" cols="100" name="detal"></textarea>
							</p>
							<p>
								Solução<br>
								<textarea rows="5" cols="100" name="soluc"></textarea>
								*
							</p>
						</fieldset>
						<br> <input type="submit" value="Gravar" class="botao"
							onSubmit="return validacao();" onClick="cadchamado();">
						<!-- 						<input type="submit"		value="Voltar" class="botao" onclick="location.href='inicio.jsp'"> -->
					</form>
				</div>
			</div>
		</div>
</body>
</html>