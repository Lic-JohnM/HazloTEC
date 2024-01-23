$(document).ready(function(){

	//Controlar ocultar y aparecer la división

	 $("#info>#con>#b1>#e").click(function(){
  			
             

		 	if($("#info>#con>#b1>#e>#signo").text().trim()=="+"){
			     $("#info>#con>#b1").css("background-color","red");
				$("#info>#con>#b1>#e>#signo").text("-");
			}

		 	 	else{
			     $("#info>#con>#b1").css("background-color","green");
				$("#info>#con>#b1>#e>#signo").text("+");
			}

		 
                                                         
                                		});

	
        //Controlar división de la página menu anterior y siguiente
        var divs = document.getElementsByClassName("n1").length;
        if (divs > 1) {
            $("#info>#con>#ctrl").css("grid-template-columns","1fr 1fr");
        } else {
            $("#info>#con>#ctrl").css("grid-template-columns","1fr");
        }

		// Ocultar elementos con ejemplos
	 $("#info>#con>#ej2>a").click(function(){
  		  $("#info>#con>#ej2>a").remove();
                  $("#info>#con>#ej2").css("grid-template-rows","100%");
                  $("#info>#con>#ej2>p").append("<h5>Solución</h5><br>");
                  $("#info>#con>#ej2>p").append("<p> Inicialmente obtenemos las variables que tenemos del ejercicio: </p><br>");
                  $("#info>#con>#ej2>p").append("<p>peso = 800kg </p>");
                  $("#info>#con>#ej2>p").append("<p>altura = 380m</p>");
                  $("#info>#con>#ej2>p").append("<p>gravedad = 9,8 m/s<sup>2</sup></p>");
                  $("#info>#con>#ej2>p").append("<p> Haciendo uso de las formula anteriormente vista la solución es la siguiente: </p><br>");
                  $("#info>#con>#ej2>p").append("<h5> Ep = 9,8*800 * 380  </h5>");
                  $("#info>#con>#ej2>p").append("<h5> Ep = 2'979.200 J </h5><br>");
                                                         
                                		});
	
		
		$("#info>#con>#ej3>a").click(function(){
  		  $("#info>#con>#ej3>a").remove();
                  $("#info>#con>#ej3").css("grid-template-rows","100%");
                  $("#info>#con>#ej3>p").append("<h5>Solución</h5><br>");
                  $("#info>#con>#ej3>p").append("<p> Inicialmente obtenemos las variables que tenemos del ejercicio: </p><br>");
                  $("#info>#con>#ej3>p").append("<p>velocidad = 1,2m/s </p>");
                  $("#info>#con>#ej3>p").append("<p>peso = 1,4 kg</p>");
                  $("#info>#con>#ej3>p").append("<p> Haciendo uso de las formula anteriormente vista la solución es la siguiente: </p><br>");
                  $("#info>#con>#ej3>p").append("<h5> Ep = 0,5 * 1,4 * 1,2 <sup>2</sup></h5>");
                  $("#info>#con>#ej3>p").append("<h5> Ep = 1,008 J </h5><br>");
                                                         
                                		});
	});
