<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%
	String usuario = (String) session.getAttribute("usuario");
	Integer idU = (Integer) session.getAttribute("id");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="js\js.js"></script>
<script src="js\validacao1.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Cadastro Usuário</title>
<!-- <link rel="stylesheet" href="css/meus_dados.css"> -->
<link rel="stylesheet" href="css/base.css">
</head>
<body>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<c:import url="nav.jsp" />
	<div id="container">
		<div id="content">
			<div class="middle-unique-col">
				<h3>Cadastro de Usuário</h3>
				<form id="contactform" name=form action="CadUsuario" method="post"
					onSubmit="return validacao();">
					<table class="tabela-invisivel">
						<tr>
							<td width="5%"><label>Nome: </td>
							<td></label><input type="text" name="nome" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>E-mail: </td>
							<td></label><input type="text" name="email" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>Telefone: </td>
							<td></label><input type="text" name="tel" maxlength="13"
								onKeyPress="return txtBoxFormat(this, '(99)9999-9999', event); return apenas_numero(event);" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>Ramal: </td>
							<td></label><input type="text" name="ramal" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>Setor: </td>
							<td></label><input type="text" name="setor" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>Login: </td>
							<td></label><input type="text" name="login" />*</td>
						</tr>
						<tr>
							<td width="5%"><label>Senha: </td>
							<td></label><input type="password" name="senha" />*</td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" name="submit"
								class="botao" value="Gravar"></td>
						</tr>
					</table>
			</div>
		</div>
	</div>
	</form>
</body>
</html>