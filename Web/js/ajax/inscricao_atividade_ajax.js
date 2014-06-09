function carregarDadosAtividade(id_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id-atividade='+id_atividade,
        url: RAIZ+'inscricao_atividade/carregarAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado') {
		location.href = RAIZ; return
	    }
	    
	    if(resposta == 'atividade-inexistente'){
		tipo = "erro";
		texto += "Ocorreu um erro durante a sua solicitação. Atualize a tela e tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#dialog-atividade").html(resposta).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function confirmarInscricao(id_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id-atividade='+id_atividade,
        url: RAIZ+'inscricao_atividade/confirmarInscricao',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado') {
		location.href = RAIZ; return
	    }
	    
	    $("#dialog-atividade").dialog("close");
	   
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Sua incrição foi efetuada com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua inscrição no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function carregarDadosAtividadeInscrito(id_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id-atividade='+id_atividade,
        url: RAIZ+'inscricao_atividade/carregarAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado') {
		location.href = RAIZ; return
	    }
	    
	    if(resposta == 'atividade-inexistente'){
		tipo = "erro";
		texto += "Ocorreu um erro durante a sua solicitação. Atualize a tela e tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#dialog-atividade-inscrito").html(resposta).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}