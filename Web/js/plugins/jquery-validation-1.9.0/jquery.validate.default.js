$.validator.setDefaults({
    submitHandler: function() { alert("Enviado!"); },
    highlight: function(input) {
	    $(input).addClass("ui-state-highlight");
    },
    unhighlight: function(input) {
	    $(input).removeClass("ui-state-highlight");
    }
});