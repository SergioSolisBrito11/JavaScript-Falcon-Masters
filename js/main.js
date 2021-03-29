(function(){
	//Variables
	var lista =  document.getElementById("lista");
	var tareaInput =  document.getElementById("tareaInput");
	var btnNuevaTarea =  document.getElementById("btn-agregar");

	//----------------Funciones------------
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		var nuevaTarea = document.createElement("li");
		var enlace = document.createElement("a");
		var contenido = document.createTextNode(tarea);

		if(tarea === ""){
			tareaInput.setAttribute("placeholder","Agrega una tarea válida");
			tareaInput.className = "error";
			return false;
		}

		//Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		//Le establecemos un atributo href
		enlace.setAttribute("href","#");
		//Agregamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		//Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
		//Limpiamos el input
		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++){
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	}
		

	//----------Eventos-----------------------

	//Este evento agrega una tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	//Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
	//Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++){
		lista.children[i].addEventListener("click", eliminarTarea);
	}

}());