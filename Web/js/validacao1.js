

function validacao(){
	if(document.form.nome.value=="") {
		
		alert("Por favor, Preencha o campo nome");
		document.form.nome.focus();
		return false;

	}
	
	if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.') ==-1) {
		alert("Por favor, digite um endereço de email valido");
		document.form.email.focus();
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