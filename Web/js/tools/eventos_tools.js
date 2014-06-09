/***************************************************************************************************
 * Eventos Tools
 * @descricao - Funcionalidades da tela de eventos
 ***************************************************************************************************/
$(document).ready(function(){ 
    
    $("#congresso-cientifico").live('click',function(){
	location.href = RAIZ+'congresso/congressoCientifico';
    });
    
    $("#congresso-residentes").live('click',function(){
	location.href = RAIZ+'congresso/congressoResidentes';
    });
    
    $("#meus-certificados").live('click',function(){
	location.href = RAIZ+'congresso/meusCertificados';
    });
    
    $("#meus-posters").live('click',function(){
	location.href = RAIZ+'congresso/meusPosters';
    });
    
    $("#outros_interesses_campo").hide();
    
    $('#outros_interesses').change(function(){     
	if ($('#outros_interesses').attr("checked")){         
	    $("#outros_interesses_campo").fadeIn();            
	}else{
	    $("#outros_interesses_campo").fadeOut()();
	}
    }); 

});