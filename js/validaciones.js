var load = function(){
	$("#numero").keydown(validarNumero);
};

$(document).ready(load);


var valorNumerico = function(event) {
	var valor= $("#numero").val();

	if(isNaN(valor)){
		
	}


};

var validarNumero = function(event) {
    var ascii = event.keyCode;

	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
		return true;
	} else {
		return false;
	} //Permite solo el ingreso de números.
};
