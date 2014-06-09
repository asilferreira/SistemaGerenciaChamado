/***************************************************************************************************
 * Certificado Tools
 * @descricao - Funcionalidades da tela de certificado
 ***************************************************************************************************/
$(document).ready(function(){
    
    $("#certificado-comparecimento-congresso").click(function(){
            window.open(RAIZ+'congresso/certificadoParticipacaoCongresso');
    });
    
    $("#certificado-poster").click(function(){
            window.open(RAIZ+'congresso/certificadoParticipacaoPoster');
    });
    
    $(".certificado-curso").click(function(){
            id_inscricao = $(this).find(".id_ins_atividade").val();
            window.open(RAIZ+'congresso/certificadoParticipacaoCurso?ativiade_id='+id_inscricao+'');
    });
    
    $(".certificado-posters").click(function(){
            id_poster = $(this).find(".id_poster").val();
            window.open(RAIZ+'congresso/certificadoParticipacaoPoster?poster_id='+id_poster+'');
    });
    
});