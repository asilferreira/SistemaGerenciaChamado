function carregarCidadesPorEstado(idEstado){
    var html = '';
    
    if(idEstado == ""){
	html += "<option></option>";	
	$("#cidade").html(html);
	return false
    }
    
    $.ajax({
        type: 'post',
        url: RAIZ+'novo_usuario/carregarCidadesPorEstado',
        data: {
            idEstado: idEstado
        },
        beforeSend: function(){},
        success: function(resposta){
	    $("#cidade").html(resposta);
        },
        error: function(erro){}
    });
}

function carregarTermoUsoCadastroUsuario(){
    $.ajax({
	type: 'post',
	url: RAIZ+'novo_usuario/carregaTermoUso',
	data: { termo_uso: "cadastro-usuario" },
	beforeSend: function(){},
	success: function(resposta){
	    $('#dialog-termos-uso').html(resposta).dialog('open');
	},
	error: function(erro){}
    });
}

function verificarCpfCadastrado(cpfDigitado){
    var cpf = $("#cpf").val();
    var html = "";
    
    $("#erro-cpf").fadeOut();
    
    $.ajax({
	type: 'post',
	url: RAIZ+'novo_usuario/verificarCpfCadastrado',
	data: { cpf: cpfDigitado },
	beforeSend: function(){},
	success: function(resposta){
	    if(resposta == 'possui-cadastro'){
		$("#cpf").val("");
		$("#erro-cpf").html("Já possui cadastro para o CPF informado").fadeIn(700); return
	    }
	    
	    if (!validaCpf(cpf)){
		$("#cpf").val("");
		$("#erro-cpf").html("Informe um CPF válido").fadeIn(700); return
	    }
	    
	},
	error: function(erro){}
    });
}

function cadastrarNovoUsuario(){
    var dados = $('#form-novo-usuario').serialize();
    var tipo = "sucesso-cadastro";
    var texto = "";
    
    $.ajax({
	type: 'post',
	url: RAIZ+'novo_usuario/cadastrarNovoUsuario',
	data: dados,
	beforeSend: function(){
	    carregarModal("Aguarde...");
	},
	success: function(resposta){
		console.log(resposta);
	    if(resposta == true){
		texto += "Cadastro efetuado com sucesso! Você receberá um e-mail confirmando seu cadastro.";
		texto += "Caso não receba, verifique sua caixa de Span.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto = "Erro ao efetuar o cadastro. Entre em contato com desit@uerj.br informando o erro.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	},
	error: function(erro){}
    });
}