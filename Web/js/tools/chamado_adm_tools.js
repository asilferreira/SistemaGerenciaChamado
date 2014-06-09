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
  
    $("#atendimento-chamado-admin").live('click',function(){ 
	location.href = RAIZ+'chamado/atendimentoChamado'; 
    });
    
    $("#atendimento-resposta-admin").live('click',function(){ 
	location.href = RAIZ+'chamado/atendimentoChamadoResposta'; 
    });
    
});