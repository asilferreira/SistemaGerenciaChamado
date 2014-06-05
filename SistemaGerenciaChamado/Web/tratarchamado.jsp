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
<title>Insert title here</title>
</head>
<body>
	<h2>Formulario 1</h2>
	<p>
		Funcionario
		<%=usuario%>
	</p>
	<form action="AtualizaChamado" method="post" name="abrechamado">
	<input type="hidden" name="idchamado" value="<%=idchamado %>"/>
		<fieldset>
			<legend> Dados do Usuario</legend>
			<table>
				<tr>
					<td>Usuario:</td>
					<td><label>${param.usuario}</label>
					<input type="hidden" name="usuario" value="${param.usuario}"/>
					
					</td>
				</tr>
				<tr>
					<td>E-mail:</td>
					<td><label>${param.email}</label></td>
					<input type="hidden" name="email" value="${param.email}"/>
				</tr>
				<tr>
					<td>Telefone:</td>
					<td><label>${param.telefone }</label>
					<input type="hidden" name="telefone" value="${param.telefone}"/>
					</td>
				</tr>
				<tr>
					<td>Ramal:</td>
					<td><label>${param.ramal }</label> </td>
					<input type="hidden" name="ramal" value="${param.ramal}"/>
				</tr>
				
			</table>
		</fieldset>
		<fieldset>
			<legend>Dados do Servico</legend>
			<table>
				<tr>
					<td>Servico:</td>
					<td><select name="servico" >
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
					</select>*</td>
				</tr>
				<tr>
					<td>Grupo Executor:</td>
					<td><select name="grupo">
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
					</select>*</td>
				</tr>
				<tr>

					<td colspan="2">Descri??o do Chamado<br><fieldset> <p><label>${param.descricao}</label></fieldset>
					</td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>Fechamento do Chamado</legend>
			<table>
				<tr>
					<td><% 
					
					for(Chamado cmd :cmdos){
						int chamado = cmd.getSta();
						
						if(chamado == 3){
							%>
							<label>Reabrir</label><input type="radio" name="situacao" value="1"><br>
							<label>Suspender</label><input type="radio" name="situacao" value="3" checked="checked"><br>
							<%
						}else if(chamado == 1){
							%>
						    <label>Aberto</label><input type="radio" name="situacao" value="1" checked="checked"><br>
						    <label>Suspender</label><input type="radio" name="situacao" value="3"><br>
							<%
						}
					}
					%>
					  
					  <label>Cancelar</label><input type="radio" name="situacao" value="4"><br>
					  <label>Fechar</label><input type="radio" name="situacao" value="2"><br></td>
					</td>
				</tr>
				<tr>
					<td colspan="2">Detalhe da Causa<br> <textarea rows="5"
							cols="40" name="detal"></textarea></td>
				</tr>
				<tr>
					<td colspan="2">Solu??o<br> <textarea rows="5" cols="40"
							name="soluc"></textarea>*
					</td>
				</tr>
			</table>
		</fieldset>
		<table>
			<tr>
				<td><input type="submit" value="Gravar" ></td>
			</tr>
		</table>

	</form>
</body>
</html>