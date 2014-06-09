/***************************************************************************************************
 * Chamado Congresso Tools
 * @descricao - Funcionalidades da tela chamado congresso
 ***************************************************************************************************/
$(document).ready(function(){
   
   $('#dialog-msg').dialog({
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
		$(this).dialog("close");
	    }
	}
    });
    
   $('#dialog-msg-cancel-chamado').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {
	    document.location.reload();
	},
	buttons: {
	    "Fechar": function() {
		document.location.reload();
	    }
	}
    });
   
    $('#dialog-chamado').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 540,
	height: 600,
	modal: true,
	resizable: false,
	title: "Novo Chamado",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Salvar": function() {
		var tipo_chamado = $("#tipo_chamado").val();
		var titulo = $("#breve_descricao").val();
		var descricao = $("#desc_chamado").val();
		var tipo = "";
		var texto = "";

		if(tipo_chamado.length == 0 || titulo.length == 0 || descricao.length == 0){
		    $('#dialog-chamado').dialog('close');
		    
		    tipo = "erro-cadastro";
		    texto += "Todos os campos são de preenchimento obrigatório!";
		    $('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
		    return
		}
		
		cadastrarNovoChamado();
	    }
	}
    });
    
    $('#dialog-acompanhamento-chamado').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 700,
	height: 500,
	modal: true,
	resizable: false,
	title: "Chamado",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-acompanhamento-chamado-cancelamento').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 700,
	height: 500,
	modal: true,
	resizable: false,
	title: "Chamado",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Cancelar chamado": function() {
		var id_chamado = $(this).find('#id_chamado').val();
		cancelarChamado(id_chamado);
	    }
	}
    });
    
    $("#abertura-chamado").live('click',function(){ montaFormAberturaChamado(); });
    
    $("#acompanhamento-chamado").live('click',function(){ location.href = RAIZ+'chamado/acompanhamentoChamado'; });
    
    $('#table-acompanhamento-chamado tbody tr').hover(
	function() {$(this).addClass('hover-tabela');},
	function() {$(this).removeClass('hover-tabela');}
    );
	
    $('#table-acompanhamento-chamado tbody tr').live('click', function(){
	var id_chamado = $(this).find('.id_chamado').val();
	var status_chamado = $(this).find('.status_chamado').val();
	carregarDadosAcompanhamentoChamado(id_chamado,status_chamado);
    });
    
});