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
	if (leaving1 == "na" && going1 == "qa"||leaving1 == "na" && going1 == "kam"){
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
			window.alert("Pls choose a different Destination").innerHTML;
	}

// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
