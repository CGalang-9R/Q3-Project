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
	if (leaving1 == "na" && going1 == "qa"||leaving1 == "na" && going1 == "kam"||leaving1 == "qa" && going1 == "na"||leaving1 == "qa" && going1 == "kam"||leaving1 == "qa" && going1 == "acc"||leaving1 == "kam" && going1 == "na"||leaving1 == "kam" && going1 == "qa"||leaving1 == "kam" && going1 == "acc"||leaving1 == "kam" && going1 == "sa"||leaving1 == "acc" && going1 == "qa"||leaving1 == "acc" && going1 == "kam"||leaving1 == "acc" && going1 == "sa"||leaving1 == "acc" && going1 == "ort"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "acc"||leaving1 == "sa" && going1 == "ort"||leaving1 == "sa" && going1 == "sb"||leaving1 == "ort" && going1 == "acc"||leaving1 == "ort" && going1 == "sa"||leaving1 == "ort" && going1 == "sb"||leaving1 == "ort" && going1 == "boni"||leaving1 == "sb" && going1 == "sa"||leaving1 == "sb" && going1 == "ort"||leaving1 == "sb" && going1 == "boni"||leaving1 == "sb" && going1 == "guad"||leaving1 == "boni" && going1 == "ort"||leaving1 == "boni" && going1 == "sb"||leaving1 == "boni" && going1 == "guad"||leaving1 == "boni" && going1 == "buen"||leaving1 == "guad" && going1 == "sb"||leaving1 == "guad" && going1 == "boni"||leaving1 == "guad" && going1 == "buen"||leaving1 == "guad" && going1 == "ayala"||leaving1 == "buen" && going1 == "boni" ||leaving1 == "buen" && going1 == "guad"||leaving1 == "buen" && going1 == "ayala"||leaving1 == "buen" && going1 == "maga"||leaving1 == "ayala" && going1 == "guad"||leaving1 == "ayala" && going1 == "buen"||leaving1 == "ayala" && going1 == "maga"||leaving1 == "ayala" && going1 == "ta"||leaving1 == "maga" && going1 == "buen"||leaving1 == "maga" && going1 == "ayala"||leaving1 == "maga" && going1 == "ta"||leaving1 == "ta" && going1 == "ayala"||leaving1 == "ta" && going1 == "maga"){
			journey = "Thirteen";
			
		} else if (leaving1 == "na" && going1 == "acc"||leaving1 == "na" && going1 == "sa"||leaving1 == "qa" && going1 == "sa"||leaving1 == "qa" && going1 == "ort"||leaving1 == "kam" && going1 == "ort"||leaving1 == "kam" && going1 == "sb"||leaving1 == "acc" && going1 == "na"||leaving1 == "acc" && going1 == "sb"||leaving1 == "acc" && going1 == "boni"||leaving1 == "sa" && going1 == "na"||leaving1 == "sa" && going1 == "qa"||leaving1 == "sa" && going1 == "boni"||leaving1 == "sa" && going1 == "guad"||leaving1 == "ort" && going1 == "qa"||leaving1 == "ort" && going1 == "kam"||leaving1 == "ort" && going1 == "guad"||leaving1 == "ort" && going1 == "buen"||leaving1 == "sb" && going1 == "acc"||leaving1 == "sb" && going1 == "kam"||leaving1 == "sb" && going1 == "buen"||leaving1 == "sb" && going1 == "ayala"||leaving1 == "boni" && going1 == "sa"||leaving1 == "boni" && going1 == "acc"||leaving1 == "boni" && going1 == "ayala"||leaving1 == "boni" && going1 == "maga"||leaving1 == "guad" && going1 == "sa"||leaving1 == "guad" && going1 == "ort"||leaving1 == "guad" && going1 == "maga"||leaving1 == "guad" && going1 == "ta"||leaving1 == "buen" && going1 == "ta"||leaving1 == "buen" && going1 == "sb"||leaving1 == "buen" && going1 == "ort"||leaving1 == "ayala" && going1 == "sb"||leaving1 == "ayala" && going1 == "boni"||leaving1 == "maga" && going1 == "boni"||leaving1 == "maga" && going1 == "guad"||leaving1 == "ta" && going1 == "guad"||leaving1 == "ta" && going1 == "buen"){
			journey = "Sixteen";
		
		} else if (leaving1 == "na" && going1 == "ort"||leaving1 == "na" && going1 == "sb"||leaving1 == "na" && going1 == "boni"||leaving1 == "qa" && going1 == "sb"||leaving1 == "qa" && going1 == "boni"||leaving1 == "kam" && going1 == "boni"||leaving1 == "kam" && going1 == "guad"||leaving1 == "kam" && going1 == "buen"||leaving1 == "acc" && going1 == "guad"||leaving1 == "acc" && going1 == "buen"||leaving1 == "acc" && going1 == "ayala"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "buen"||leaving1 == "sa" && going1 == "ayala"||leaving1 == "sa" && going1 == "maga"||leaving1 == "ort" && going1 == "na"||leaving1 == "ort" && going1 == "ayala"||leaving1 == "ort" && going1 == "maga"||leaving1 == "ort" && going1 == "ta"||leaving1 == "sb" && going1 == "na"||leaving1 == "sb" && going1 == "qa"||leaving1 == "sb" && going1 == "maga"||leaving1 == "sb" && going1 == "ta"||leaving1 == "boni" && going1 == "na"||leaving1 == "boni" && going1 == "qa"||leaving1 == "boni" && going1 == "kam"||leaving1 == "boni" && going1 == "ta"||leaving1 == "guad" && going1 == "qa"||leaving1 == "guad" && going1 == "kam"||leaving1 == "guad" && going1 == "acc"||leaving1 == "buen" && going1 == "kam" ||leaving1 == "buen" && going1 == "acc"||leaving1 == "buen" && going1 == "sa"||leaving1 == "ayala" && going1 == "acc"||leaving1 == "ayala" && going1 == "sa"||leaving1 == "ayala" && going1 == "ort"||leaving1 == "maga" && going1 == "sa"||leaving1 == "maga" && going1 == "ort"||leaving1 == "maga" && going1 == "sb"||leaving1 == "ta" && going1 == "ort"||leaving1 == "ta" && going1 == "sb"||leaving1 == "ta" && going1 == "boni"){
			journey = "Twenty";
		
		} else  if 
			journey = "TwentyFour";
		
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "TwentyEight";

		} else if (leaving1 == "na" && going1 == "na"||leaving1 == "qa" && going1 == "qa"leaving1 == "kam" && going1 == "kam"||leaving1 == "acc" && going1 == "acc"||leaving1 == "sa" && going1 == "sa"||leaving1 == "ort" && going1 == "ort"||leaving1 == "sb" && going1 == "sb"||leaving1 == "boni" && going1 == "boni"||leaving1 == "guad" && going1 == "guad"||leaving1 == "buen" && going1 == "buen"||leaving1 == "ayala" && going1 == "ayala"||leaving1 == "maga" && going1 == "maga"leaving1 == "ta" && going1 == "ta"){
			window.alert("Please choose a different Destination.").innerHTML;
	}

// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
