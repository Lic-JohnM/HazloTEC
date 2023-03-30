$(document).ready(function(){

	
        //Controlar división de la página menu anterior y siguiente
        var divs = document.getElementsByClassName("n1").length;
        if (divs > 1) {
            $("#info>#con>#ctrl").css("grid-template-columns","1fr 1fr");
        } else {
            $("#info>#con>#ctrl").css("grid-template-columns","1fr");
        }
	});
