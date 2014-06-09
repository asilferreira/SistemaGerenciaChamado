/***************************************************************************************************
 * Index Tools
 * @descricao - Funcionalidades da tela Home
 ***************************************************************************************************/
$(document).ready(function(){    
    var tipo = "";
    var texto = "";

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
                    $(this).dialog('close');
                },
                "Atender chamados": function(){
                    location.href = RAIZ+'chamado/atendimentoChamado';
                }
        }
    });

    /*
    * Carrega informativo de chamados pendentes
    *************************************************/
    $.ajax({
        type: 'post',
        url: RAIZ+'login/verificaChamadosPendentes',  
    beforeSend: function(){},
    success: function(resposta){
        if(resposta == 'nao-logado'){
            location.href = RAIZ; return
        }else if(resposta != 'not-adm'){
            tipo = "alerta";
            if(resposta == 1){
                texto += "Existe <strong>"+resposta+"</strong> chamado aguartando atendimento!";
            }else{
                texto += "Existem <strong>"+resposta+"</strong> chamados aguartando atendimento!";
            }
            
            $('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
        }
    },
    error: function(erro){}
    });
    
    $("#inscricao-congresso").live('click',function(){
	   location.href = RAIZ+'congresso/congressoCientifico';
    });

    $("#editar-cadastro").live('click',function(){
	   location.href = RAIZ+'meus_dados/editarCadastro';
    }); 
    
    $("#meus-certificados").live('click',function(){
	   location.href = RAIZ+'congresso/meusCertificados';
    }); 
    
    $("#acompanhar-chamado").live('click',function(){
	   location.href = RAIZ+'chamado/acompanhamentoChamado';
    }); 

    $("#ajuda").live('click',function(){
	   location.href = RAIZ+'home/ajuda';
    }); 

});