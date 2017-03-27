	event.preventDefault();  	//Evita que la acción predeterminada del evento no ocurra
	array.push(parseInt($("#numero").val())); // Añade el número entero ingresado por el usuario al final del array
    $("#numero").focus().val("");  //borra el valor del input luego del evento click en agregar
    $("#btn-ingresar").prop( "disabled", true ); //Deshabilita el boton
	for (var x=0;x<array.length;x++) {
	  var encontrado = false;
	  var iter = 0; // Iterador
 
	  while ((!encontrado) && (iter < array.length)) {
	    if (array[iter] == array[x])
	      encontrado = true;
	    iter++;
	  }

	  if (encontrado){
	  	    alert (" es un número repetido");
	  } else{
             visualizarNumero();
	    }
    }