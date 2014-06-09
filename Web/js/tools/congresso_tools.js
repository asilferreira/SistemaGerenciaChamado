/***************************************************************************************************
 * Login Tools
 * @descricao - Funcionalidades da tela de login
 ***************************************************************************************************/
$(document).ready(function(){
    
    /*  Habilita o botão de inscrição de poster  */    
    $("#inscricao-posters").live('click',function(){
	location.href = RAIZ+'congresso/inscricaoPoster';
    });

    /*  Habilita o botão de inscrição de atividade  */
    $("#inscricao-atividade").live('click',function(){
	location.href = RAIZ+'congresso/inscricaoAtividade';
    });
    
    $("#meus-certificados").live('click',function(){
	location.href = RAIZ+'congresso/meusCertificados';
    });
    
});