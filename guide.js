// GONZALES, GALANG

// SUBMIT INFO
function submitInfo(){
	var name=document.getElementById('inputName').value;
	window.alert('Thanks ' + name + '! Proceed to the next section.').innerHTML; 
}

// ONCHANGE CODE
document.getElementById("inputName").onchange = function(){userName()};

function userName(){
	var name = document.getElementById("inputName");
	name.value = name.value.toUpperCase();
}

// FOR CHECKING FARE PRICE
	if (leaving1 == "na" && going1 == "qa"||leaving1 == "na" && going1 == "kam"||leaving1 == "qa" && going1 == "na"||leaving1 == "qa" && going1 == "kam"||leaving1 == "qa" && going1 == "acc"||leaving1 == "kam" && going1 == "na"||leaving1 == "kam" && going1 == "qa"||leaving1 == "kam" && going1 == "acc"||leaving1 == "kam" && going1 == "sa"||leaving1 == "acc" && going1 == "qa"||leaving1 == "acc" && going1 == "kam"||leaving1 == "acc" && going1 == "sa"||leaving1 == "acc" && going1 == "ort"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "acc"||leaving1 == "sa" && going1 == "ort"||leaving1 == "sa" && going1 == "sb"||leaving1 == "ort" && going1 == "acc"||leaving1 == "ort" && going1 == "sa"||leaving1 == "ort" && going1 == "sb"||leaving1 == "ort" && going1 == "boni"||leaving1 == "sb" && going1 == "sa"||leaving1 == "sb" && going1 == "ort"||leaving1 == "sb" && going1 == "boni"||leaving1 == "sb" && going1 == "guad"||leaving1 == "boni" && going1 == "ort"||leaving1 == "boni" && going1 == "sb"||leaving1 == "boni" && going1 == "guad"||leaving1 == "boni" && going1 == "buen"||leaving1 == "gua" && going1 == "sb"||leaving1 == "guad" && going1 == "boni"||leaving1 == "guad" && going1 == "buen"||leaving1 == "guad" && going1 == "ayala"||leaving1 == "buen" && going1 == "boni" ||leaving1 == "buen" && going1 == "guad"||leaving1 == "buen" && going1 == "ayala"||leaving1 == "buen" && going1 == "maga"||leaving1 == "ayala" && going1 == "guad"||leaving1 == "ayala" && going1 == "buen"||leaving1 == "ayala" && going1 == "maga"||leaving1 == "ayala" && going1 == "ta"||leaving1 == "maga" && going1 == "buen"||leaving1 == "maga" && going1 == "ayala"||leaving1 == "maga" && going1 == "ta"||leaving1 == "ta" && going1 == "ayala"||leaving1 == "ta" && going1 == "maga"){
			journey = "Thirteen";
			
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "Sixteen";
		
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "Twenty";
		
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "TwentyFour";
		
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "TwentyEight";

		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			window.alert("Please choose a different Destination.").innerHTML;
	}

// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
