jQuery(function($){
    $(".mask-ano").mask("9999");
    $(".mask-data").mask("99/99/9999");
    $(".mask-cpf").mask("999.999.999-99");
    $(".mask-tel").mask("(99)9999-9999");
    $(".mask-cep").mask("99999-999");
    $(".mask-hora-minuto").mask("99:99");
    $(".mask-hora-minuto-segundo").mask("99:99:99");
    $(".mask-real").maskMoney({thousands:'', decimal:'.'});
});

function carregarMascaras(){
    $(".mask-ano").mask("9999");
    $(".mask-data").mask("99/99/9999");
    $(".mask-cpf").mask("999.999.999-99");
    $(".mask-tel").mask("(99)9999-9999");
    $(".mask-cep").mask("99999-999");
    $(".mask-hora-minuto").mask("99:99");
    $(".mask-hora-minuto-segundo").mask("99:99:99");
    $(".mask-real").maskMoney({thousands:'', decimal:'.'});
}