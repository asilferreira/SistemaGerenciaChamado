/***************************************************************************************************
 * Admin Tools
 * @descricao - Funcionalidades da tela de administração
 ***************************************************************************************************/
$(document).ready(function(){
    $('#dialog-encerrar-congresso').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Não": function() {
		$(this).dialog("close");
	    },
	    "Sim": function() {
		encerrarCongresso();
	    }	    
	}
    });
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {
	    document.location.reload();
	},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		document.location.reload();
	    }
	}
    });
    
    $('#dialog-msg-editar-inscricao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {
	    verificarSituacaoInscricao();
	},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
		verificarSituacaoInscricao();
	    }
	}
    });
    
    $('#dialog-msg-atualizacao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$("#opc-inscricao").hide();
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-msg-congresso-inativo').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {
	    location.href = RAIZ+'admin_congresso/admin_congresso';
	},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		location.href = RAIZ+'admin_congresso/admin_congresso';
	    }
	}
    });
    
    $('#dialog-confirmar-pagamento-arquivo').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 'auto',
	width: 600,
	modal: true,
	resizable: false,
	title: "Confirmação de pagamento",
	close: function(event, ui) {},
	position: 'center',
	buttons: {	    
	    "Fechar": function() {
		location.href = RAIZ+'admin_congresso/admin_congresso';
	    },
	    "Carregar": function() {}
	}
    });
    
    $('#dialog-confirmar-pagamento-individual').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 'auto',
	width: 400,
	modal: true,
	resizable: false,
	title: "Confirmação de pagamento",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });

    $('#dialog-modificar-vencimento-boleto').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 'auto',
	width: 400,
	modal: true,
	resizable: false,
	title: "Modificar vencimento",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-poster').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 950,
	height: 600,
	modal: true,
	resizable: false,
	title: "Pôster",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-adm-poster').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 950,
	height: 600,
	modal: true,
	resizable: false,
	title: "Pôster",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Cancelar poster": function(){
		var tipo = "alerta";
		var texto = "Tem certeza que deseja cancelar esse pôster?";
		var html = "";
		
		$(this).dialog("close");
		$('#dialog-adm-poster-conirmacao-cancel').html(msgResposta(tipo,texto)).dialog('open');
	    },
	    "Inprimir": function() {
		var id_poster = $("#id-poster-selecionado").val();
		imprimirPoster(id_poster);
	    }
	}
    });
    
    $('#dialog-adm-poster-conirmacao-cancel').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 380,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Confirmar": function(){
		var id_poster = $("#id-poster-selecionado").val();
		cancelarPoster(id_poster);
	    }
	}
    });
    
    $("#novo-congresso").live('click',function(){
	location.href = RAIZ+'admin_congresso/novoCongresso';
    });
    
    $("#encerrar-congresso").live('click',function(){
	var tipo = 'alerta';
	var texto = 'Você tem certeza que deseja encerrar o congresso atual?';
	
	$('#dialog-encerrar-congresso').html(msgResposta(tipo,texto)).dialog('open');
    });
    
    $("#inscricao-congresso-adm").live('click',function(){
	location.href = RAIZ+'admin_congresso/inscricaoCongresso';
    });
    
    $("#inscricao-atividade-adm").live('click',function(){
	location.href = RAIZ+'admin_atividade/admAtividade';
    });
    
    $("#abrir-editar-congresso").live('click',function(){
	$("#opc-inscricao").hide();
	carregarAbrirEditarInscricao();
    });
    
    $("#bt-salvar-info-inscricao").live('click',function(){
	atualizarInscricao();
	return false;
    });
    
    $("#abrir-encerrar-inscricao-congresso").live('click',function(){
	verificarSituacaoInscricao();
    });
   
    // Congresso
    $("#abrir-inscricao").live('click',function(){
	abrirInscricao("inscricao");
    });
   
    $("#abrir-inscricao-online").live('click',function(){
	abrirInscricao("inscricao-online");
    });
   
    $("#encerrar-iscricao").live('click',function(){
	encerrarInscricao("inscricao");
    });
   
    $("#encerrar-iscricao-online").live('click',function(){
	encerrarInscricao("inscricao-online");
    });
   
    // Atividade
    $("#abrir-inscricao-atividade").live('click',function(){
	abrirInscricaoAtividade("inscricao-atividade");
    });
   
    $("#abrir-inscricao-atividade-online").live('click',function(){
	abrirInscricaoAtividade("inscricao-atividade-online");
    });
   
    $("#encerrar-iscricao-atividade").live('click',function(){
	encerrarInscricaoAtividade("inscricao-atividade");
    });
   
    $("#encerrar-iscricao-atividade-online").live('click',function(){
	encerrarInscricaoAtividade("inscricao-atividade-online");
    });
    
    $("#confirmacao-pagamento-arquivo").live('click', function(){
	 location.href = RAIZ+'admin_congresso/envioArquivoConfirmacao';
    });
    
    $("#confirmacao-pagamento-extrato").live('click', function(){
 	location.href = RAIZ+'admin_congresso/confirmacaoPorExtrato';
    });
   
    $("#confirmacao-pagamento-individual").live('click', function(){
	var html = "";
	
	html += "<div id='conf-pg-individual'>";
	html += "   <span for='cpf-usuario'>CPF:&nbsp;</span>";
	html += "   <input type='text' id='cpf-usuario' name='cpf-usuario' class='campoTexto mask-cpf' size='15' value=''/>";
	
	html += "   <input type='button' id='carregar-info-pg-usuario' value='Verificar' class='botao'/>";
	html += "   <p><span id='erro-cpf' class='msg-erro'></span></p>";
	html += "   <p><span id='resposta-consulta' class='hidden-element'></span></p>";
	html += "</div>";
	
	$("#dialog-confirmar-pagamento-individual").html(html).dialog("open");
	carregarMascaras();
    });
   
    $("#cpf-usuario").live('keydown', function(){
	$("#erro-cpf").hide();
	$("#resposta-consulta").hide().html("");
    });
   
    $("#carregar-info-pg-usuario").live('click', function(){
	var cpf = $("#cpf-usuario").val();
	$("#erro-cpf").hide();
       
	if(cpf == ""){
	    $("#erro-cpf").html("Informe um CPF válido").fadeIn();
	}else{
	    carregarInfoPgUsuario(cpf);
	}
    });
   
    $("#atualizar-status-inscricao").live('click', function(){
	var acao = $("#acao").val();
	$("#erro-cadastro").hide();
       
	if(acao == ""){
	    $("#erro-cadastro").html("Selecione uma ação antes de salvar").fadeIn();
	}else{
	    atualizarStatusInscricao(acao);
	}
    });
    
    $("#consultar-posters").live('click',function(){
	location.href = RAIZ+'admin_congresso/consultarPosters';
    });
    
    $("#consultar-relatorios").live('click',function(){
	location.href = RAIZ+'admin_relatorios/consultarRelatorios';
    });

    $("#modificar-vencimento").live('click',function(){
	var html = "";

	html += "<div id='conf-pg-individual'>";
	html += "   <span for='cpf-usuario'>CPF:&nbsp;</span>";
	html += "   <input type='text' id='cpf-usuario' name='cpf-usuario' class='campoTexto mask-cpf' size='15' value=''/>";
	
	html += "   <input type='button' id='carregar-info-boleto' value='Verificar' class='botao'/>";
	html += "   <p><span id='erro-cpf' class='msg-erro'></span></p>";
	html += "   <p><span id='resposta-consulta' class='hidden-element'></span></p>";
	html += "</div>";
	
	$('#dialog-modificar-vencimento-boleto').html(html).dialog("open");
	carregarMascaras();
    });

    $("#carregar-info-boleto").live('click', function(){
	var cpf = $("#cpf-usuario").val();
	$("#erro-cpf").hide();
       
	if(cpf == ""){
	    $("#erro-cpf").html("Informe um CPF válido").fadeIn();
	}else{
	    carregarInfoBoleto(cpf);
	}
    });

    $("#atualizar-vencimento-boleto").live('click', function(){
	var inscricao_id = $("#inscricao-id").val();
	var vencimento_boleto = $("#vencimento-boleto").val();
	$("#erro-cadastro").hide();
       
    if(inscricao_id == ""){
	    $("#erro-cadastro").html("Ocorreu um erro inesperado. Ente em contato com DESIT").fadeIn();
    }else if(vencimento_boleto == ""){
	    $("#erro-cadastro").html("Informe um vencimento válido").fadeIn();
	}else{
	    atualizarBoletoUsuario(inscricao_id, vencimento_boleto);
	}
    });
    
    $("#gerenciar-certificados").live('click',function(){
	location.href = RAIZ+'admin_congresso/gerenciarCertificados';
    });
    
    $('#table-acompanhamento tbody tr').live('click', function(){
	var id_poster = $(this).find('.id_poster').val();
	carregarDadosPoster(id_poster);
    });

    $("#cancelar-inscricao-atividade").click(function(){
	location.href = RAIZ+'admin_atividade/cancelamentoInscricaoAtividade';
    });

    $("#consultar-inscritos-residentes").click(function(){
	window.open(RAIZ+'admin_congresso/carregarInscritosResidentes');
    });

});