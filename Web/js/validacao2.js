

function validacao(){
	if(document.abrechamado.usuario.value=="") {
		
		alert("Por favor, Preencha o campo nome");
		document.abrechamado.usuario.focus();
		return false;

	}
	
	if(document.abrechamado.email.value=="" || document.abrechamado.email.value.indexOf('@')==-1 || document.abrechamado.email.value.indexOf('.') ==-1) {
		alert("Por favor, digite um endereço de email valido");
		document.abrechamado.email.focus();
		return false;

	}
	if(document.form.login.value=="") {
		
		alert("Por favor, Preencha o campo Login");
		document.form.login.focus();
		return false;

	}
	if(document.form.senha.value.length < 8) {
		
		alert("A senha deve conter no minimo 8 caracteres.");
		document.form.senha.focus();
		return false;
}
	
}