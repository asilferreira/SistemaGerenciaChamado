$(document).ready(function(){ 
    
    var atividade = {}
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "",
	close: function(event, ui) {document.location.reload();},
	buttons: {
	    "Fechar": function() {
		document.location.reload();
	    }    
	}
    });
    
    $('#dialog-atencao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {document.location.reload();},
	buttons: {
	    "Confirmar": function() {
		$(this).dialog('close');
		desativarAtividade();
	    },
	    "Fechar": function() {
		$(this).dialog('close');
	    }
	}
    });
    
    $('#dialog-atencao-cpf').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	   "Fechar": function() {
		$(this).dialog('close');
	    }
	}
    });
    
    $('#dialog-atencao-cancelamento').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Confirmar": function() {
		$(this).dialog('close');
		cancelarInscricaoAtividadeUsuario(atividade.id_inscricao_atividade);
	    },
	    "Fechar": function() {
		$(this).dialog('close');
	    }
	}
    });
    
    $("#cadastrar-inscricao-atividade").live('click',function(){
	$("#opc-inscricao").hide();
	carregarTelaCadastroAtividade();
    });
    
    $("#abrir-encerrar-inscricao-atividade").live('click',function(){
	verificarSituacaoInscricaoAtividade();
    });

    $("#editar-inscricao-atividade").live('click',function(){
	$("#opc-inscricao").hide();
	carregarAtividadesCadastradas();
    });
    
    $("#bt-cadastrar-evento").live('click',function(){
	$("#info-cadastro-atividade").validate({
	    rules:{
		titulo:{ required: true },		
		coordenacao: { required: true },
		local: { required: true },
		vagas: { required: true },
		tipo: { required: true },
		categoria: { required: true },
		dt_inicio: { required: true },
		hora_inicio: { required: true },
		dt_fim: { required: true },
		hora_fim: { required: true }
	    },
	    errorPlacement: function (error, element) {
		element.css('background', '#ffd7cd');
		element.css('border', '1px solid #b0736f');
	    },
	    submitHandler: function(form){
		efetivarCadastroAtividade();
	    }    
	});
    });
    
    $('#table-lista-atividades tbody tr').live('click', function(){
	var id_atividade = $(this).find('.id_atividade').val();
	carregarDadosAtividade(id_atividade);
    });
    
    $("#bt-atualizar-evento").live('click',function(){
	$("#info-atualizacao-atividade").validate({
	    rules:{
		titulo:{ required: true },		
		coordenacao: { required: true },
		local: { required: true },
		vagas: { required: true },
		tipo: { required: true },
		categoria: { required: true },
		dt_inicio: { required: true },
		hora_inicio: { required: true },
		dt_fim: { required: true },
		hora_fim: { required: true }
	    },
	    messages:{
		titulo: "*",		
		coordenacao: "*",
		local: "*",
		vagas: "*",
		tipo: "*",
		categoria: "*",
		dt_inicio: "*",
		hora_inicio: "*",
		dt_fim: "*",
		hora_fim: "*"
	    },
	    submitHandler: function(form){
		atualizarAtividade();
	    }    
	});
	
    });
    
    $("#bt-cancelar-evento").live('click',function(){
	var tipo = "alerta";
	var texto = "Você tem certeza que deseja cancelar essa atividade? Ao confirmar essa ação, não sera possível reativar a atividade cancelada";
	
	$('#dialog-atencao').html(msgResposta(tipo,texto)).dialog('open');
	return false;
    });
    
    $("#bt-voltar-evento").live('click',function(){
	$("#opc-inscricao").hide();
	carregarAtividadesCadastradas();
	return false;
    });
    
    $("#verificar-atividades-usuario").click(function(){
	var tipo = "alerta";
	var texto = "Atenção! Você precisa informar um CPF válido para efetuar essa solicitação.";
	var cpf = $("#cpf").val();
	
	$("#opc-inscricao").hide();
	
	if(validaCpf(cpf))
	    carregarAtividadesUsuario(cpf);
	else
	    $('#dialog-atencao-cpf').html(msgResposta(tipo,texto)).dialog('open');
	
	return false;
    });
    
    $("#verificar-atividades-usuario").live('click', function(){
	var cpf = $("#cpf-usuario").val();
	$("#erro-cpf").hide();
       
	if(cpf == ""){
	    $("#erro-cpf").html("Informe um CPF válido").fadeIn();
	}else{
	    carregarInfoPguduario(cpf);
	}
    });
    
    $('#inscricoes-atividade-usuario tbody tr').live('click',function(){
	var tipo = "";
	var texto = "";
	
	atividade.id_inscricao_atividade = $(this).find('.id_inscricao_atividade').val();
	
	tipo = "alerta";
	texto += "Você tem certeza que deseja cancelar a atividade selecionada? Não será possível reverter o cancelamento após a confirmação.";
	
	$("#dialog-atencao-cancelamento").html(msgResposta(tipo,texto)).dialog('open');
    });
    
});
