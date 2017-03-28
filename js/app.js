var load = function(){
	$("#btn-ingresar").click(ingresarNumero);
	$("#btn-ordenar").click(ordenarNumero);
	$("#btn-borrar").click(borrar);
	$("#btn-ordenar").click(validarRepetidos);
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
  
    visualizarNumero();
};

var borrar = function(){
    location.reload();
};

var validarRepetidos = function(){
   Array.prototype.unique=function(a){
        return function(){
        	return this.filter(a)
        }
    }(function(a,b,c){
    	return c.indexOf(a,b+1)<0
    });

    array.unique();
};