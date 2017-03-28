var load = function(){
	$("#btn-ingresar").click(ingresarNumero);
	$("#btn-ordenar").click(ordenarNumero);
	$("#btn-borrar").click(borrar);
};

$(document).ready(load);
    var array = [];
   
var ingresarNumero = function(event){
	event.preventDefault();  	//Evita que la acción predeterminada del evento no ocurra
    array.push(parseInt($("#numero").val())); // Añade el número entero ingresado por el usuario al final del array
    $("#numero").focus().val("");  //borra el valor del input luego del evento click en agregar
    $("#btn-ingresar").prop( "disabled", true ); //Deshabilita el boton

    visualizarNumero();
};

var visualizarNumero = function(){
	$("#mostrar-numero").text(array.join(" "));	//Muestra el núumero ingresado por el ususario en el html
};

var ordenarNumero = function() {
	array.sort(function(a,b){ 
	    return a > b 
	}); //Ordena la serie de números
  
    var nuevoArray = array.filter(function(este, i) {
    return array.indexOf(este) == i;
    });

    $("#mostrar-numero").text(nuevoArray.join(" "));	
};

var borrar = function(){
    location.reload();
};
