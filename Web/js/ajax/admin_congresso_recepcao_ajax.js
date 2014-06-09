function  carregarListaInscritos(id_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id_atividade='+id_atividade,
        url: RAIZ+'admin_atividade/carregarInscritosPorAtividade',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }

	    if(resposta){
		$("#lista-inscritos").html(resposta).fadeIn(800);
	    }else{
		tipo = "alerta";
		texto = "Não existe inscrição para a atividade selecionada ou todos os participantes já foram confirmados";
		$("#dialog-msg-alerta").html(msgResposta(tipo,texto)).dialog("open");
	    }
	    
	    $('#table-lista-inscritos tbody tr').hover(
		function() {$(this).addClass('hover-tabela');},
		function() {$(this).removeClass('hover-tabela');}
	    );
	    
	    $.modal.close();
        },
        error: function(erro){}
    });

}

function confirmarPresenca(id_inscricao){    
    var tipo = "";
    var texto = "";
    
    $("#dialog-msg-confirmacao").dialog("close");
    
    $.ajax({
        type: 'post',
	data: 'id_inscricao='+id_inscricao,
        url: RAIZ+'admin_atividade/confirmarPresenca',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }

	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto = "Presença confirmada com sucesso!";
		$("#dialog-msg").html(msgResposta(tipo,texto)).dialog("open");
	    }else{
		tipo = "erro";
		texto = "Não foi possível efetuar sua solicitação no momento. Ente em contato com o susporte";
		$("#dialog-msg").html(msgResposta(tipo,texto)).dialog("open");
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function confirmarFalta(id_inscricao){    
    var tipo = "";
    var texto = "";
    
    $("#dialog-msg-confirmacao").dialog("close");
    
    $.ajax({
        type: 'post',
	data: 'id_inscricao='+id_inscricao,
        url: RAIZ+'admin_atividade/confirmarFalta',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }

	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto = "Falta confirmada com sucesso.";
		$("#dialog-msg").html(msgResposta(tipo,texto)).dialog("open");
	    }else{
		tipo = "erro";
		texto = "Não foi possível efetuar sua solicitação no momento. Ente em contato com o susporte";
		$("#dialog-msg").html(msgResposta(tipo,texto)).dialog("open");
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function geraBoletoDataHoje(cpf) {
	$("#resposta-consulta").hide();

	$.ajax({
        type: 'post',
		data: 'cpf='+cpf,
        url: RAIZ+'congresso/atualizarVencimentoBoletoRecepcao',
    beforeSend: function(){
	    carregarModal("Aguarde...");
	},
    success: function(resposta){
	    if(resposta == 'nao-logado'){
			location.href = RAIZ; return
	    }

	    console.log(resposta);

	    if(resposta == "gerar-boleto"){
	    	$('#dialog-emitir-modificar-vencimento-boleto').dialog('close');
	    	window.open(RAIZ+'congresso/gerarBoletoRecepcao?usuario='+cpf);
	    }else if(resposta == "sem-inscricao"){
	    	$("#resposta-consulta").html('Não existe inscrição pendente para o CPF informado').fadeIn();
	    }else if(resposta == "sem-usuario"){
	    	$("#resposta-consulta").html('Usuário inexistente para o CPF informado').fadeIn();
	    }else{
	    	$("#resposta-consulta").html('Ocorreu um erro durante a sua solicitação. Tente novamente.').fadeIn();
	    }
	    
	    $.modal.close();
    },
    error: function(erro){}
    });
}

function geraEtiqueta(cpf) {
	$("#resposta-consulta").hide();

	$.ajax({
        type: 'post',
		data: 'cpf='+cpf,
        url: RAIZ+'recepcao/geraEtiquetaCongressita',
    beforeSend: function(){
	    carregarModal("Aguarde...");
	},
    success: function(resposta){
	    if(resposta == 'nao-logado'){
			location.href = RAIZ; return
	    }

	    console.log(resposta);

	    if(resposta == "gerar-etiqueta"){
	    	$('#dialog-emitir-modificar-vencimento-boleto').dialog('close');
	    	window.open(RAIZ+'recepcao/etiquetaCongressita?usuario='+cpf);
	    }else if(resposta == "sem-inscricao"){
	    	$("#resposta-consulta").html('Não existe inscrição pendente para o CPF informado').fadeIn();
	    }else if(resposta == "sem-usuario"){
	    	$("#resposta-consulta").html('Usuário inexistente para o CPF informado').fadeIn();
	    }else{
	    	$("#resposta-consulta").html('Ocorreu um erro durante a sua solicitação. Tente novamente.').fadeIn();
	    }
	    
	    $.modal.close();
    },
    error: function(erro){}
    });
}