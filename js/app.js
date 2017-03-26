var load = function(){
	$("#numero").keydown(validarNumero);
	$("#btn-ingresar").click(ingresarNumero);


};

$(document).ready(load);
    var array = [];

var ingresarNumero = function(event){
  	event.preventDefault();  	//Evita que la acción predeterminada del evento no ocurra
  	array.push(Number($("#numero").val())); // Añade el número ingresado por el usuario al final de la matriz 
  		
  	$("#numero").focus().val("");  //borra el valor del input luego de agregar

  	visualizarNumero();
};

var visualizarNumero = function(){
	if (array.length > 0){
	    $("#mostrar-numero").text(array.join(" "));
	} else{
		$("mostrar-numero").text("Ingrese un número");
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

var ordenarNumero = function(event) {

};

