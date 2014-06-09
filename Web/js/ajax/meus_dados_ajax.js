function alterarSenha(){
    var dados = $("#alteracao-senha").serialize();
    var texto = "";
    var html = "";
    var tipo = "";
    
    $('#dialog-altera-senha').dialog('close');
    
    $.ajax({
        type: 'post',
        url: RAIZ+'Meus_dados/alterarSenha',
        data: dados,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    $.modal.close();
	    
	    if(resposta == "senha-atualizada"){
		texto += 'Senha atualizada com sucesso.<br />Por favor, efetue o login novamente.';
		html += msgResposta('sucesso-cadastro',texto);
		$('#dialog-resposta-sucesso-senha').html(html).dialog('open');
	    }else if(resposta == 'senha-nao-atualizada'){
		texto += 'Ocorreu um erro durante a atualização.<br />Tente novamente.';
		html += msgResposta('erro-cadastro',texto);
		$('#dialog-resposta-senha').html(html).dialog('open');
	    }else if(resposta == 'senha-errada'){
		texto += 'A "Senha Atual" informada não confere com sua senha cadastrada.';
		html += msgResposta('erro-cadastro',texto);
		$('#dialog-msg-senha').html(html).dialog('open');
	    }else{
		location.href = RAIZ;
	    }
	    
        },
        error: function(erro){}
    });   
}

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

function atualizarUsuario(){
    var dados = $('#form-atualizacao-usuario').serialize();
    var tipo = "sucesso-cadastro";
    var texto = "";
    
    texto += "Seu cadastro foi atualizado com sucesso!<br />";
    texto += "Por favor, efetue o login novamente.";
        
    $.ajax({
	type: 'post',
	url: RAIZ+'meus_dados/atualizarCadastro',
	data: dados,
	beforeSend: function(){
	    carregarModal("Aguarde...");
	},
	success: function(resposta){
	    if(resposta == true){
		$('#dialog-resposta-sucesso').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto = "Erro ao efetuar o cadastro. Entre em contato com desit@uerj.br informando o erro.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
	},
	error: function(erro){}
    });

}