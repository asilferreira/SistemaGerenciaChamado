function carregarAtividadesCongressista(cpf_congressista){
	var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
		data: 'cpf='+cpf_congressista,
        url: RAIZ+'admin_atividade/carregarAtividadesInscricaoRecepcao',  
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
			$("#cursos-disponiveis").html(resposta).fadeIn();
	    }
	    
	    $.modal.close();
    },
    error: function(erro){}
    });

    return false;
}

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

function confirmarInscricaoRecepcao(id_atividade, cpf, congresso_id, usuario_id){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
		data: 'id-atividade='+id_atividade+'&cpf='+cpf+'&congresso_id='+congresso_id+'&usuario_id='+usuario_id,
        url: RAIZ+'admin_atividade/confirmarInscricao',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado') {
		location.href = RAIZ; return
	    }
	    
	    $("#dialog-atividade").dialog("close");
	   	console.log(resposta);
	    if(resposta == "sucesso"){
			tipo = "sucesso-cadastro";
			texto += "Sua incrição foi efetuada com sucesso!";
			$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else if (resposta == "ja-inscrito"){
	    	tipo = "erro";
			texto += "Congressista já cadastrado na atividade selecionada!";
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