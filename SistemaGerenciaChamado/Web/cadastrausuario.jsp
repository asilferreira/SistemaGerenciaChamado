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
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>Cadastro de usuário</h2>
<form action="CadUsuario" method="post">
<label>Nome: </label><input type="text" name="nome" /><br>
<label>E-mail: </label><input type="text" name="email" /><br>
<label>Telefone: </label><input type="text" name="tel" 
onKeyPress="return txtBoxFormat(this, '(99)9999-9999', event); return apenas_numero(event);"/><br>
<label>Ramal: </label><input type="text" name="ramal" /><br>
<label>Setor: </label><input type="text" name="setor" /><br>
<label>Login: </label><input type="text" name="login" /><br>
<label>Senha: </label><input type="password" name="senha" /><br>
<input type="submit" value="Gravar">



</form>

</body>
</html>