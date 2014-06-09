/***************************************************************************************************
 * Generic Tools
 * @desc - Funcionalidades gerais das paginas do sistema
 ***************************************************************************************************/
jQuery(function($){
    
    $('.numerico').keydown(function(e){
        var tecla=(window.event)?event.keyCode:e.which;
        if((tecla > 47 && tecla < 58) || (tecla >95 && tecla <106) ||
            (tecla == 194) || (tecla == 190) || (tecla == 8) ||
            (tecla == 9) || (tecla == 44) || (tecla>36 && tecla<41) )
            return true; else return false;
    });

    $(':text, :password, textarea, select').each(function(){
	$(this).focus(function(){
	    $(this).css('background','#ffffdd');
	});
		
	$(this).blur(function(){
	    $(this).css('background','#ffffff');
	});
    });
	
    $('.botao').hover(
	function() {$(this).css('border','1px solid  #999');},
	function() {$(this).css('border','1px solid  #ccc');}
    );	
    
    $("#accordion").accordion();
	
    $(".datepicker").datepicker({ 
	dateFormat: 'dd/mm/yy',
	dayNames: [
	'Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'
	],
	dayNamesMin: [
	'D','S','T','Q','Q','S','S','D'
	],
	dayNamesShort: [
	'Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'
	],
	monthNames: [
	'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro',
	'Outubro','Novembro','Dezembro'
	],
	monthNamesShort: [
	'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set',
	'Out','Nov','Dez'
	],
	nextText: 'Próximo',
	prevText: 'Anterior'
    });

});

function campoNumerico(){
    $('.numerico').keydown(function(e){
        var tecla=(window.event)?event.keyCode:e.which;
        if((tecla > 47 && tecla < 58) || (tecla >95 && tecla <106) ||
            (tecla == 194) || (tecla == 190) || (tecla == 8) ||
            (tecla == 9) || (tecla == 44) || (tecla>36 && tecla<41) )
            return true; else return false;
    });
}

function msgResposta(tipo,texto){
    var html = "";
    
    if(tipo == "alerta"){
	html += "<br />";
	html += "<div class='msgRespostaPosition'>";
	html += "	<table>";
	html += "	    <tr>";
	html += "		<td><img src='"+RAIZ+"public/img/ico_atencao.gif' /></td>";
	html += "		<td class='alinhamento-td'>"+texto+"</td>";
	html += "	    </tr>";
	html += "</table>";
	html += "</div>"
    }
    
    if(tipo == "sucesso-cadastro"){
	html += "<br />";
	html += "<div class='msgRespostaPosition'>";
	html += "	<table>";
	html += "	    <tr>";
	html += "		<td><img src='"+RAIZ+"public/img/ico_sucesso.gif' /></td>";
	html += "		<td class='alinhamento-td'>"+texto+"</td>";
	html += "	    </tr>";
	html += "</table>";
	html += "</div>"
    }
    
    if(tipo == "erro-cadastro"){
	html += "<br />";
	html += "<div class='msgRespostaPosition'>";
	html += "	<table>";
	html += "	    <tr>";
	html += "		<td><img src='"+RAIZ+"public/img/ico_erro.gif' /></td>";
	html += "		<td class='alinhamento-td'>"+texto+"</td>";
	html += "	    </tr>";
	html += "</table>";
	html += "</div>"
    }
  
    if(tipo == "erro"){
	html += "<br />";
	html += "<div class='msgRespostaPosition'>";
	html += "	<table>";
	html += "	    <tr>";
	html += "		<td><img src='"+RAIZ+"public/img/ico_erro.gif' /></td>";
	html += "		<td class='alinhamento-td'>"+texto+"</td>";
	html += "	    </tr>";
	html += "</table>";
	html += "</div>"
    }
    
    return html;
}