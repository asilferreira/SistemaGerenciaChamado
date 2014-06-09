function encerrarCongresso(){ 
    var tipo = "";
    var texto = "";
    
    $('#dialog-encerrar-congresso').dialog('close');
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/encerrarCongresso',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == true){
		tipo = "sucesso-cadastro";
		texto += "Congresso encerrado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto += "Ocorreu um erro durante o encerramento do congresso. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });   
}

function carregarAbrirEditarInscricao(){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/carregarAbrirEditarInscricao',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "sem-congresso-ativo"){
		tipo = "erro";
		texto += "Não existe congresso ativo para a realização do procedimento solicitado.";
		$('#dialog-msg-congresso-inativo').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#opc-inscricao").html(resposta).fadeIn(800);
		carregarMascaras();
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });   
    
}

function atualizarInscricao(){
    var dados = $('#form-aditar-cadastro-inscricao').serialize();
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/atualizarInscricao',
	data: dados,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		$('#dialog-msg-atualizacao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-atualizacao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function verificarSituacaoInscricao(){
    var tipo = "";
    var texto = "";
    
    $("#opc-inscricao").fadeOut();
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/verificarSituacaoInscricao',
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "sem-congresso-ativo"){
		tipo = "erro";
		texto += "Não existe congresso ativo para a realização do procedimento solicitado.";
		$('#dialog-msg-congresso-inativo').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#opc-inscricao").html(resposta).fadeIn(800);
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
    
}

function abrirInscricao(tipoInscricao){
    var idCongresso = "id_congresso="+$('#id-congresso').val()+"&tipo_inscricao="+tipoInscricao;
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/abrirInscricao',
	data: idCongresso,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function encerrarInscricao(tipoInscricao){
    var idCongresso = "id_congresso="+$('#id-congresso').val()+"&tipo_inscricao="+tipoInscricao;
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/encerrarInscricao',
	data: idCongresso,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function abrirInscricaoAtividade(tipoInscricao){
    var idCongresso = "id_congresso="+$('#id-congresso').val()+"&tipo_inscricao="+tipoInscricao;
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/abrirInscricaoAtividade',
	data: idCongresso,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function encerrarInscricaoAtividade(tipoInscricao){
    var idCongresso = "id_congresso="+$('#id-congresso').val()+"&tipo_inscricao="+tipoInscricao;
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/encerrarInscricaoAtividade',
	data: idCongresso,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-editar-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function carregarInfoPgUsuario(cpf){    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/carregarInfoPgUsuario',
	data: "cpf="+cpf,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    console.log(resposta);
	    if(resposta == 'sem-inscricao'){
		$("#erro-cpf").html("Não existe inscrição pendente para o usuário informado.").fadeIn()
	    }else{
		$("#resposta-consulta").html(resposta).fadeIn(800);
	    }
        },
        error: function(erro){}
    }); 
}

function carregarInfoBoleto(cpf){    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/carregarInfoBoleto',
	data: "cpf="+cpf,
        beforeSend: function(){},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    console.log(resposta);
	    if(resposta == 'sem-inscricao'){
		$("#erro-cpf").html("Não existe inscrição pendente para o usuário informado.").fadeIn()
	    }else{
		$("#resposta-consulta").html(resposta).fadeIn(800);
		carregarMascaras();
	    }
        },
        error: function(erro){}
    }); 
}

function atualizarBoletoUsuario(inscricao_id, vencimento_boleto){
	var tipo = "";
    var texto = "";
    
    $('#dialog-modificar-vencimento-boleto').dialog("close");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/atualizarVencimentoBoleto',
	data: "inscricao="+inscricao_id+"&vencimento="+vencimento_boleto,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == "nao-logado"){location.href = RAIZ;return}
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function atualizarStatusInscricao(acao){
    var tipo = "";
    var texto = "";
    
    $('#dialog-confirmar-pagamento-individual').dialog("close");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/atualizarStatusInscricao',
	data: "acao="+acao+"&cpf="+$("#cpf-usuario").val(),
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == "nao-logado"){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function carregarDadosPoster(id_poster){
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/carregarDadosPoster',
	data: "id_poster="+id_poster,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == "nao-logado"){location.href = RAIZ;return}
	    if(resposta)$("#dialog-adm-poster").html(resposta).dialog("open");
	    if(resposta)$("#dialog-poster").html(resposta).dialog("open");
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function imprimirPoster(id_poster){
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/carregarDadosPosterImpressao',
	data: "id_poster="+id_poster,
        beforeSend: function(){
	},
        success: function(resposta){
	    if(resposta == "nao-logado"){location.href = RAIZ;return}
	    
	    if(resposta) {
		$("#print").html(resposta);
		$('#dialog-adm-poster').dialog('close');
		window.print();
	    }
	    
        },
        error: function(erro){}
    });
}

function cancelarPoster(id_poster){
    var tipo = "";
    var texto = "";
    
    $('#dialog-adm-poster-conirmacao-cancel').dialog("close");
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/cancelarPoster',
	data: "id_poster="+id_poster,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == "nao-logado"){location.href = RAIZ;return}
	    
	    if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}