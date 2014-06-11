<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<meta charset="ISO-8859-1">
<title>Home</title>
<link rel="stylesheet" href="css/login.css">
</head>
<body>
	<form action="Logar" method="post">

		<div id="login-box">
			<div id="login-box-interno">
				<div id="login-box-label">
					Usuário e Senha

					<div class="input-div id="usuario" >
						<label>Usuário: </label><input type="text" name="usuario" />

					</div>

					<div class="input-div id="input-senha">
						<label>Senha: </label><input type="password" name="senha" />
					</div>

					<div id="botoes"></div>

					<div id="botao">
						<input type="submit" class="botao" value="login">
					</div>

					<div id="lembrar-senha">
						<input type="checkbox" /> Lembrar minha senha
					</div>


				</div>
			</div>
		</div>
	</form>
</body>
</html>