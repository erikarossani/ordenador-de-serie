var load = function(){
	$("#btn-ingresar").click(ingresarNumero);
	$("#btn-ordenar").click(ordenarNumero);
};

$(document).ready(load);
    var array = [];

var ingresarNumero = function(event){
  	event.preventDefault();  	//Evita que la acción predeterminada del evento no ocurra
  	array.push(parseInt($("#numero").val())); // Añade el número entero ingresado por el usuario al final del array
    $("#numero").focus().val("");  //borra el valor del input luego de agregar

  	visualizarNumero();
};

var visualizarNumero = function(){
	$("#mostrar-numero").text(array.join(" "));	
};

var ordenarNumero = function() {
	array.sort(function(a,b){ 
	    return a > b 
	}); //Ordena la serie de numeros
   
    visualizarNumero();
};

