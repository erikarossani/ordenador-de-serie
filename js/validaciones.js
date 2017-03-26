var load = function(){
	$("#numero").keydown(validarNumero);
};

$(document).ready(load);
    var btnAgregar = $("#btn-ingresar")
  	btnAgregar.prop( "disabled", true );

var validarNumero = function(event) {
    var ascii = event.keyCode;

	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
		btnAgregar.prop( "disabled", false );
		return true;
	} else {
		return false;
	} //Permite solo el ingreso de números.
};
