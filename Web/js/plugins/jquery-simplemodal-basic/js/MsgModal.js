function carregarModal(texto) {
    $("#msg-modal .class-modal").html(texto);

    $("#msg-modal").modal({
	opacity:60,
	close: false,
	overlayCss: {
	    backgroundColor:"#000",
	    minHeight:100,
	    minWidth: 100
	}
    });
}

