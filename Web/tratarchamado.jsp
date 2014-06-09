<%@page import="sun.print.resources.serviceui"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*,java.text.DateFormat"%>

<%
	int idchamado = Integer.parseInt(request.getParameter("idchamado"));
	String usuario = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");	
	SgcDao dao = new SgcDao();
	List<Chamado> cmdos = new ArrayList<Chamado>();
	cmdos = dao.getChamado(idchamado);
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="css/base.css">
<title>Insert title here</title>
</head>
<body>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:import url="nav.jsp" />
	<div id="container">
		<div id="content">
			<div class="middle-unique-col">
				<h2>Formulario 1</h2>
				<p>
					Funcionario
					<%=usuario%>
				</p>
				<form action="AtualizaChamado" method="post" name="abrechamado">
					<input type="hidden" name="idchamado" value="<%=idchamado%>" />
					<fieldset>
						<legend> Dados do Usuario</legend>
						Usuario: <label>${param.usuario}</label><input type="hidden"
							name="usuario" value="${param.usuario}" /><br>
						<p>
							E-mail: <label>${param.email}</label><input type="hidden"
								name="email" value="${param.email}" />
						</p>
						<p>
							Telefone: <label>${param.telefone }</label><input type="hidden"
								name="telefone" value="${param.telefone}" />
						</p>
						<p>
							Ramal: <label>${param.ramal }</label><input type="hidden"
								name="ramal" value="${param.ramal}" />
						</p>
					</fieldset>
					<br>
					<fieldset>
						<legend>Dados do Servico</legend>
						Servico: <select name="servico">
							<option></option>
							<%
								String a = "";
													List<Servico> servico =new ArrayList<Servico>();
													servico = dao.listaServico();
													String servi = request.getParameter("servico");
													for(Servico serv : servico){
														
														String nome = serv.getNomeServico();
														if(servi.equals(nome)){
															a = "selected";
														}else{
															a = " ";									}
							%>
							<option value="<%=serv.getIdServico()%>" <%=a%>>
								<%=serv.getNomeServico()%>
							</option>
							<%
								}
							%>
						</select>* <br>
						<p>
							Grupo Executor: <select name="grupo">
								<option></option>
								<%
									String b = "";
														List<Grupo> grupo =new ArrayList<Grupo>();
														grupo = dao.listaGrupo();
														String gru = request.getParameter("grupo");
														for(Grupo grup : grupo){
															if(grup.getIdGrupo()==4){
																continue;
																}
															String nomeGrupo = grup.getNomeGrupo();
															if(gru.equals(nomeGrupo)){
																b = "selected";
															}else{
																b = " ";									
																}
								%>
								<option value="<%=grup.getIdGrupo()%>" <%=b%>>
									<%=grup.getNomeGrupo()%>
								</option>
								<%
									}
								%>
							</select>*
						</p>
						<p>
							Descrição do Chamado:<br>
						<fieldset>
							<p>
								<label>${param.descricao}</label>
						</fieldset>
						</p>
					</fieldset>
					<br>
					<fieldset>
						<legend>Fechamento do Chamado</legend>
						<%
							for(Chamado cmd :cmdos){
								int chamado = cmd.getSta();
								
								if(chamado == 3){
						%>
						<label>Reabrir</label><input type="radio" name="situacao"
							value="1"><br> <label>Suspender</label><input
							type="radio" name="situacao" value="3" checked="checked"><br>
						<%
							}else if(chamado == 1){
						%>
						<label>Aberto</label><input type="radio" name="situacao" value="1"
							checked="checked"><br> <label>Suspender</label><input
							type="radio" name="situacao" value="3"><br>
						<%
							}
							}
						%>

						<label>Cancelar</label><input type="radio" name="situacao"
							value="4"><br> <label>Fechar</label><input
							type="radio" name="situacao" value="2"><br>

						<p>
							Detalhe da Causa<br>
							<textarea rows="5" cols="100" name="detal"></textarea>
						</p>
						<p>
							Solução<br>
							<textarea rows="5" cols="100" name="soluc"></textarea>
							*
						</p>
					</fieldset>
					<br> <input type="submit" class="botao" value="Gravar">
					<input type="button" value="Voltar" class="botao"
						onclick="location.href='inicio.jsp'">


				</form>
			</div>
		</div>
	</div>
</body>
</html>