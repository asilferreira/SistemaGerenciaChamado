function verificarSituacaoInscricaoAtividade(){
    $("#opc-inscricao").fadeOut();
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_atividade/verificarSituacaoInscricao',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }else{
		$("#opc-inscricao").html(resposta).fadeIn(800);
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function carregarTelaCadastroAtividade(){
    var $dialog = $("#dialog-cadastrar-atividade");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_atividade/carregarTelaCadastroAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    $("#opc-inscricao").html(resposta).fadeIn(700);
	    
	    carregarMascaras();
	    campoNumerico();
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function efetivarCadastroAtividade(){
    var form = $("#info-cadastro-atividade").serialize();
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: form,
        url: RAIZ+'admin_atividade/EfetivarCadastroAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Evento cadastrado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function carregarAtividadesCadastradas(){
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_atividade/editarAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    $("#opc-inscricao").html(resposta).fadeIn(800);
	    
	    $('#table-lista-atividades tbody tr').hover(
		function() {$(this).addClass('hover-tabela');},
		function() {$(this).removeClass('hover-tabela');}
	    );
	
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function carregarDadosAtividade(id_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id-atividade='+id_atividade,
        url: RAIZ+'admin_atividade/carregarInfoAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == 'atividade-inexistente'){
		tipo = "erro";
		texto += "Ocorreu um erro durante a sua solicitação. Atualize a tela e tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#opc-inscricao").html(resposta).fadeIn(700);
		carregarMascaras();
		campoNumerico();
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function atualizarAtividade(){
    var form = $("#info-atualizacao-atividade").serialize();
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: form,
        url: RAIZ+'admin_atividade/atualizarAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Evento atualizado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function desativarAtividade(){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id_atividade='+$("#id_atividade").val(),
        url: RAIZ+'admin_atividade/desativarAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Evento cancelado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-atencao').dialog('close');
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
} 

function carregarAtividadesUsuario(cpf){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'cpf='+cpf,
        url: RAIZ+'admin_atividade/carregarAtividadesUsuario',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == "sem-atividades"){
		tipo = "erro";
		texto += "Não existe inscrição em atividade para o CPF informado.";
		$('#dialog-atencao').dialog('close');
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else if(resposta == "erro"){
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-atencao').dialog('close');
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#tb-atividades-usuario").html(resposta).fadeIn(800);
		
		$('table tbody tr').hover(
		    function() {$(this).addClass('hover-tabela');},
		    function() {$(this).removeClass('hover-tabela');}
		);
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function cancelarInscricaoAtividadeUsuario(id_inscricao_atividade){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: 'id_inscricao_atividade='+id_inscricao_atividade,
        url: RAIZ+'admin_atividade/efetivarCancelamentoInscricaoAtividade',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Inscrição cancelada com sucesso! Uma nova vaga foi liberada na atividade cancelada";
		$('#dialog-atencao').dialog('close');
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-atencao').dialog('close');
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}