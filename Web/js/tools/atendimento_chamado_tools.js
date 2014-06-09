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
		document.location.reload();
	    }
	}
    });
    
    $('#dialog-atendimento-chamado').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 710,
	height: 600,
	modal: true,
	resizable: false,
	title: "Chamado",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Salvar": function() {
		var descricao = $("#desc_resposta_chamado").val();
		var tipo = "";
		var texto = "";

		if(descricao.length == 0 ){
		    $('#dialog-atendimento-chamado').dialog('close');
		    
		    tipo = "erro-cadastro";
		    texto += "Atenção! Não é possível finalizar um chamado sem a descrição. ";
		    texto += "Por favor descreva a solução da solicitação antes de tentar novamente!";
		    $('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
		    return
		}
		
		atenderChamado();
	    }
	}
    });
    
    $('#dialog-atendimento-resposta').dialog({
	bgiframe: true,
	autoOpen: false,
	width: 710,
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
    
    $("#abertura-chamado").live('click',function(){ montaFormAberturaChamado(); });
    
    $("#acompanhamento-chamado").live('click',function(){ 
    	location.href = RAIZ+'chamado/acompanhamentoChamado'; 
    });
    
    $('#table-acompanhamento-chamado tbody tr').hover(
	function() {$(this).addClass('hover-tabela');},
	function() {$(this).removeClass('hover-tabela');}
    );
	
    $('#table-acompanhamento-chamado tbody tr').live('click', function(){
	var id_chamado = $(this).find('.id_chamado').val();
	var status_chamado = $(this).find('.status_chamado').val();
	carregarDadosAtendimentoChamado(id_chamado,status_chamado);
    });
    
    $('#table-acompanhamento-chamado-resposta tbody tr').hover(
	function() {$(this).addClass('hover-tabela');},
	function() {$(this).removeClass('hover-tabela');}
    );
	
    $('#table-acompanhamento-chamado-resposta tbody tr').live('click', function(){
	var id_chamado = $(this).find('.id_chamado').val();
	var status_chamado = $(this).find('.status_chamado').val();
	carregarDadosChamadoRespondido(id_chamado,status_chamado);
    });
    
});