/***************************************************************************************************
 * Novo Congresso Tools
 * @descricao - Funcionalidades da tela novo congresso
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
	close: function(event, ui) {
	    location.href = RAIZ+'admin_congresso';
	},
	buttons: {
	    "Fechar": function() {
		location.href = RAIZ+'admin_congresso';
	    }
	}
    });
    
    $("#cancelar").live('click',function(){
		location.href = RAIZ+'admin_congresso'; return false;
    });
        
    $("#form-novo-congresso").validate({
		rules:{
		    titulo_novocongresso:{ required: true },
		    vagas_novocongresso:{ required: true },
		    data_inicio_novocongresso:{ required: true },
		    data_final_novocongresso:{ required: true },
		    descricao_novocongresso:{ required: true }
		},
		messages:{
		   	titulo_novocongresso:{ required: "Campo obrigatório." },
		    vagas_novocongresso:{ required: "Campo obrigatório." },
		    data_inicio_novocongresso:{ required: "Campo obrigatório." },
		    data_final_novocongresso:{ required: "Campo obrigatório." },
		    descricao_novocongresso:{ required: "Campo obrigatório." }
		},
		submitHandler: function(form){
		    cadastrarNovoCongresso();
		    return false;
		}    
    });
    
});