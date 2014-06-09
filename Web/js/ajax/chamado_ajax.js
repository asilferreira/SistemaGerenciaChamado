function montaFormAberturaChamado(){
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/telaAberturaChamado',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    $.modal.close();
	    
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    $('#dialog-chamado').html(resposta).dialog('open');
	    
        },
        error: function(erro){}
    }); 
}

function cadastrarNovoChamado(){
    var dados = $("#form-abertura-chamado").serialize();
    var tipo = "";
    var texto = "";
    
    $('#dialog-chamado').dialog('close');
    carregarModal("Aguarde...");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/cadastrarNovoChamado',
	data: dados,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == true){
		tipo = "sucesso-cadastro";
		texto += "Chamado cadastrado com sucesso! Você receberá um e-mail confirmando seu cadastro. ";
		texto += "Caso não receba, verifique sua caixa de Span.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else if(resposta == 'email-nao-enviado'){
		tipo = "sucesso-cadastro";
		texto += "Seu chamado foi cadastrado com sucesso, porém não conseguimos enviar um e-mail de confirmação para você. ";
		texto += "Verifique se o e-mail cadastrado é um e-mail válido.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto += "Ocorreu um erro durante o cadastro de sua ocorrência.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function carregarDadosAcompanhamentoChamado(id_chamado,status_chamado){
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/carregarChamado',
	data: "id_chamado="+id_chamado,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(status_chamado == 0){$("#dialog-acompanhamento-chamado").html(resposta).dialog('open');}
	    if(status_chamado == 1){$("#dialog-acompanhamento-chamado-cancelamento").html(resposta).dialog('open');}
        },
        error: function(erro){}
    }); 
}

function cancelarChamado(id_chamado){
    var tipo = "";
    var texto = "";
    
    $('#dialog-acompanhamento-chamado-cancelamento').dialog('close');
    carregarModal("Aguarde...");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/cancelarChamado',
	data: "id_chamado="+id_chamado,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == true){
		tipo = "sucesso-cadastro";
		texto += "O chamado Nº "+id_chamado+" foi cancelado com sucesso!";
		$('#dialog-msg-cancel-chamado').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto += "Não foi possível cancelar o chamado Nº "+id_chamado+", ocorreu um erro durante o processo.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
	    
        },
        error: function(erro){}
    }); 
}

function carregarDadosAtendimentoChamado(id_chamado,status_chamado){
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/carregarAtendimentoChamado',
	data: "id_chamado="+id_chamado,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    $("#dialog-atendimento-chamado").html(resposta).dialog('open');
        },
        error: function(erro){}
    }); 
}

function carregarDadosChamadoRespondido(id_chamado,status_chamado){
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/carregarDadosChamadoRespondido',
	data: "id_chamado="+id_chamado,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    $("#dialog-atendimento-resposta").html(resposta).dialog('open');
        },
        error: function(erro){}
    }); 
}

function atenderChamado(){
    var dados = $("#adentimento-chamado").serialize();
    var tipo = "";
    var texto = "";
    
    $('#dialog-atendimento-chamado').dialog('close');
    carregarModal("Aguarde...");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'chamado/atenderChamado',
	data: dados,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == true){
		tipo = "sucesso-cadastro";
		texto += "Chamado finalizado com sucesso! Um e-mail de acompanhamento foi enviado ao usuário. ";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else if(resposta == 'email-nao-enviado'){
		tipo = "sucesso-cadastro";
		texto += "O chamado foi finalizado com sucesso, porém não conseguimos enviar um e-mail de confirmação para o usuário. ";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto += "Ocorreu um erro durante a finalização do chamado.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}