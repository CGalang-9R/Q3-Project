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
function getFarePrice(){
// TO GET THE VALUES CHOSEN BY THE USER FROM THE DROPDOWNS 
	var leaving1 = document.getElementById('inputLeaving').value;
	var going1 = document.getElementById('inputGoing').value
	var discount1 = document.getElementById('inputDiscount').value;
	var journey;
// PLACEHOLDER FOR THE TOTAL FARE PRICE
	var fareValue;
	// TO KNOW WHEN TO APPLY THE DISCOUNT

		if (leaving1 == "na" && going1 == "qa"||leaving1 == "na" && going1 == "kam"||leaving1 == "qa" && going1 == "na"||leaving1 == "qa" && going1 == "kam"||leaving1 == "qa" && going1 == "acc"||leaving1 == "kam" && going1 == "na"||leaving1 == "kam" && going1 == "qa"||leaving1 == "kam" && going1 == "acc"||leaving1 == "kam" && going1 == "sa"||leaving1 == "acc" && going1 == "qa"||leaving1 == "acc" && going1 == "kam"||leaving1 == "acc" && going1 == "sa"||leaving1 == "acc" && going1 == "ort"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "acc"||leaving1 == "sa" && going1 == "ort"||leaving1 == "sa" && going1 == "sb"||leaving1 == "ort" && going1 == "acc"||leaving1 == "ort" && going1 == "sa"||leaving1 == "ort" && going1 == "sb"||leaving1 == "ort" && going1 == "boni"||leaving1 == "sb" && going1 == "sa"||leaving1 == "sb" && going1 == "ort"||leaving1 == "sb" && going1 == "boni"||leaving1 == "sb" && going1 == "guad"||leaving1 == "boni" && going1 == "ort"||leaving1 == "boni" && going1 == "sb"||leaving1 == "boni" && going1 == "guad"||leaving1 == "boni" && going1 == "buen"||leaving1 == "guad" && going1 == "sb"||leaving1 == "guad" && going1 == "boni"||leaving1 == "guad" && going1 == "buen"||leaving1 == "guad" && going1 == "ayala"||leaving1 == "buen" && going1 == "boni" ||leaving1 == "buen" && going1 == "guad"||leaving1 == "buen" && going1 == "ayala"||leaving1 == "buen" && going1 == "maga"||leaving1 == "ayala" && going1 == "guad"||leaving1 == "ayala" && going1 == "buen"||leaving1 == "ayala" && going1 == "maga"||leaving1 == "ayala" && going1 == "ta"||leaving1 == "maga" && going1 == "buen"||leaving1 == "maga" && going1 == "ayala"||leaving1 == "maga" && going1 == "ta"||leaving1 == "ta" && going1 == "ayala"||leaving1 == "ta" && going1 == "maga"){
			journey = "Thirteen";
			fareValue = "13.00";
		} else if (leaving1 == "na" && going1 == "acc"||leaving1 == "na" && going1 == "sa"||leaving1 == "qa" && going1 == "sa"||leaving1 == "qa" && going1 == "ort"||leaving1 == "kam" && going1 == "ort"||leaving1 == "kam" && going1 == "sb"||leaving1 == "acc" && going1 == "na"||leaving1 == "acc" && going1 == "sb"||leaving1 == "acc" && going1 == "boni"||leaving1 == "sa" && going1 == "na"||leaving1 == "sa" && going1 == "qa"||leaving1 == "sa" && going1 == "boni"||leaving1 == "sa" && going1 == "guad"||leaving1 == "ort" && going1 == "qa"||leaving1 == "ort" && going1 == "kam"||leaving1 == "ort" && going1 == "guad"||leaving1 == "ort" && going1 == "buen"||leaving1 == "sb" && going1 == "acc"||leaving1 == "sb" && going1 == "kam"||leaving1 == "sb" && going1 == "buen"||leaving1 == "sb" && going1 == "ayala"||leaving1 == "boni" && going1 == "sa"||leaving1 == "boni" && going1 == "acc"||leaving1 == "boni" && going1 == "ayala"||leaving1 == "boni" && going1 == "maga"||leaving1 == "guad" && going1 == "sa"||leaving1 == "guad" && going1 == "ort"||leaving1 == "guad" && going1 == "maga"||leaving1 == "guad" && going1 == "ta"||leaving1 == "buen" && going1 == "ta"||leaving1 == "buen" && going1 == "sb"||leaving1 == "buen" && going1 == "ort"||leaving1 == "ayala" && going1 == "sb"||leaving1 == "ayala" && going1 == "boni"||leaving1 == "maga" && going1 == "boni"||leaving1 == "maga" && going1 == "guad"||leaving1 == "ta" && going1 == "guad"||leaving1 == "ta" && going1 == "buen"){
			journey = "Sixteen";
			fareValue = "16.00";
		} else if (leaving1 == "na" && going1 == "ort"||leaving1 == "na" && going1 == "sb"||leaving1 == "na" && going1 == "boni"||leaving1 == "qa" && going1 == "sb"||leaving1 == "qa" && going1 == "boni"||leaving1 == "kam" && going1 == "boni"||leaving1 == "kam" && going1 == "guad"||leaving1 == "kam" && going1 == "buen"||leaving1 == "acc" && going1 == "guad"||leaving1 == "acc" && going1 == "buen"||leaving1 == "acc" && going1 == "ayala"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "buen"||leaving1 == "sa" && going1 == "ayala"||leaving1 == "sa" && going1 == "maga"||leaving1 == "ort" && going1 == "na"||leaving1 == "ort" && going1 == "ayala"||leaving1 == "ort" && going1 == "maga"||leaving1 == "ort" && going1 == "ta"||leaving1 == "sb" && going1 == "na"||leaving1 == "sb" && going1 == "qa"||leaving1 == "sb" && going1 == "maga"||leaving1 == "sb" && going1 == "ta"||leaving1 == "boni" && going1 == "na"||leaving1 == "boni" && going1 == "qa"||leaving1 == "boni" && going1 == "kam"||leaving1 == "boni" && going1 == "ta"||leaving1 == "guad" && going1 == "qa"||leaving1 == "guad" && going1 == "kam"||leaving1 == "guad" && going1 == "acc"||leaving1 == "buen" && going1 == "kam" ||leaving1 == "buen" && going1 == "acc"||leaving1 == "buen" && going1 == "sa"||leaving1 == "ayala" && going1 == "acc"||leaving1 == "ayala" && going1 == "sa"||leaving1 == "ayala" && going1 == "ort"||leaving1 == "maga" && going1 == "sa"||leaving1 == "maga" && going1 == "ort"||leaving1 == "maga" && going1 == "sb"||leaving1 == "ta" && going1 == "ort"||leaving1 == "ta" && going1 == "sb"||leaving1 == "ta" && going1 == "boni"){
			journey = "Twenty";
			fareValue = "20.00";
		} else  if (leaving1 == "na" && going1 == "buen"||leaving1 == "na" && going1 == "ayala"||leaving1 == "na" && going1 == "guad"||leaving1 == "qa" && going1 == "buen"||leaving1 == "qa" && going1 == "ayala"||leaving1 == "qa" && going1 == "maga"||leaving1 == "kam" && going1 == "ayala"||leaving1 == "kam" && going1 == "maga"||leaving1 == "kam" && going1 == "ta"||leaving1 == "acc" && going1 == "maga"||leaving1 == "acc" && going1 == "ta"||leaving1 == "sa" && going1 == "ta"||leaving1 == "guad" && going1 == "na"||leaving1 == "buen" && going1 == "na" ||leaving1 == "buen" && going1 == "qa"||leaving1 == "ayala" && going1 == "na"||leaving1 == "ayala" && going1 == "qa"||leaving1 == "ayala" && going1 == "kam"||leaving1 == "maga" && going1 == "qa"||leaving1 == "maga" && going1 == "kam"||leaving1 == "ta" && going1 == "kam"||leaving1 == "ta" && going1 == "acc"||leaving1 == "ta" && going1 == "sa"){
			journey = "TwentyFour";
			fareValue = "24.00";
		} else if (leaving1 == "na" && going1 == "maga"||leaving1 == "na" && going1 == "ta"||leaving1 == "qa" && going1 == "ta"||leaving1 == "maga" && going1 == "na"||leaving1 == "ta" && going1 == "na"||leaving1 == "ta" && going1 == "qa"){
			journey = "TwentyEight";
			fareValue = "28.00";
		} else if (leaving1 == going1){
			window.alert("Please choose a different Destination.").innerHTML;
		}

		// COMPUTING FOR THE DISCOUNTED PRICE
		// .80 IS THE SHORTCUT OF GETTING 20% DISCOUNT OFF THE REGULAR PRICE
		if (discount1 !== "regular"){
	 		fareValue = (fareValue * .80).toFixed(2); 
		}
		
		window.alert('The total fare price is ' + fareValue +'php. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
	}

// FOR BUYING TICKET
function buyTicket(){
// TO GET THE VALUES CHOSEN BY THE USER FROM THE DROPDOWNS 
	var leaving2 = document.getElementById('inputLeaving').value;
	var going2 = document.getElementById('inputGoing').value
	var discount2 = document.getElementById('inputDiscount').value;
	var journey2;
// PLACEHOLDER FOR THE TOTAL FARE PRICE
	var fareValue2;
	// TO KNOW WHEN TO APPLY THE DISCOUNT

		if (leaving2 == "na" && going2 == "qa"||leaving2 == "na" && going2 == "kam"||leaving2 == "qa" && going2 == "na"||leaving2 == "qa" && going2 == "kam"||leaving2 == "qa" && going2 == "acc"||leaving2 == "kam" && going2 == "na"||leaving2 == "kam" && going2 == "qa"||leaving2 == "kam" && going2 == "acc"||leaving2 == "kam" && going2 == "sa"||leaving2 == "acc" && going2 == "qa"||leaving2 == "acc" && going2 == "kam"||leaving2 == "acc" && going2 == "sa"||leaving2 == "acc" && going2 == "ort"||leaving2 == "sa" && going2 == "kam"||leaving2 == "sa" && going2 == "acc"||leaving2 == "sa" && going2 == "ort"||leaving2 == "sa" && going2 == "sb"||leaving2 == "ort" && going2 == "acc"||leaving2 == "ort" && going2 == "sa"||leaving2 == "ort" && going2 == "sb"||leaving2 == "ort" && going2 == "boni"||leaving2 == "sb" && going2 == "sa"||leaving2 == "sb" && going2 == "ort"||leaving2 == "sb" && going2 == "boni"||leaving2 == "sb" && going2 == "guad"||leaving2 == "boni" && going2 == "ort"||leaving2 == "boni" && going2 == "sb"||leaving2 == "boni" && going2 == "guad"||leaving2 == "boni" && going2 == "buen"||leaving2 == "guad" && going2 == "sb"||leaving2 == "guad" && going2 == "boni"||leaving2 == "guad" && going2 == "buen"||leaving2 == "guad" && going2 == "ayala"||leaving2 == "buen" && going2 == "boni" ||leaving2 == "buen" && going2 == "guad"||leaving2 == "buen" && going2 == "ayala"||leaving2 == "buen" && going2 == "maga"||leaving2 == "ayala" && going2 == "guad"||leaving2 == "ayala" && going2 == "buen"||leaving2 == "ayala" && going2 == "maga"||leaving2 == "ayala" && going2 == "ta"||leaving2 == "maga" && going2 == "buen"||leaving2 == "maga" && going2 == "ayala"||leaving2 == "maga" && going2 == "ta"||leaving2 == "ta" && going2 == "ayala"||leaving2 == "ta" && going2 == "maga"){
			journey2 = "Thirteen";
			fareValue2 = "13.00";
		} else if (leaving2 == "na" && going2 == "acc"||leaving2 == "na" && going2 == "sa"||leaving2 == "qa" && going2 == "sa"||leaving2 == "qa" && going2 == "ort"||leaving2 == "kam" && going2 == "ort"||leaving2 == "kam" && going2 == "sb"||leaving2 == "acc" && going2 == "na"||leaving2 == "acc" && going2 == "sb"||leaving2 == "acc" && going2 == "boni"||leaving2 == "sa" && going2 == "na"||leaving2 == "sa" && going2 == "qa"||leaving2 == "sa" && going2 == "boni"||leaving2 == "sa" && going2 == "guad"||leaving2 == "ort" && going2 == "qa"||leaving2 == "ort" && going2 == "kam"||leaving2 == "ort" && going2 == "guad"||leaving2 == "ort" && going2 == "buen"||leaving2 == "sb" && going2 == "acc"||leaving2 == "sb" && going2 == "kam"||leaving2 == "sb" && going2 == "buen"||leaving2 == "sb" && going2 == "ayala"||leaving2 == "boni" && going2 == "sa"||leaving2 == "boni" && going2 == "acc"||leaving2 == "boni" && going2 == "ayala"||leaving2 == "boni" && going2 == "maga"||leaving2 == "guad" && going2 == "sa"||leaving2 == "guad" && going2 == "ort"||leaving2 == "guad" && going2 == "maga"||leaving2 == "guad" && going2 == "ta"||leaving2 == "buen" && going2 == "ta"||leaving2 == "buen" && going2 == "sb"||leaving2 == "buen" && going2 == "ort"||leaving2 == "ayala" && going2 == "sb"||leaving2 == "ayala" && going2 == "boni"||leaving2 == "maga" && going2 == "boni"||leaving2 == "maga" && going2 == "guad"||leaving2 == "ta" && going2 == "guad"||leaving2 == "ta" && going2 == "buen"){
			journey2 = "Sixteen";
			fareValue2 = "16.00";
		} else if (leaving2 == "na" && going2 == "ort"||leaving2 == "na" && going2 == "sb"||leaving2 == "na" && going2 == "boni"||leaving2 == "qa" && going2 == "sb"||leaving2 == "qa" && going2 == "boni"||leaving2 == "kam" && going2 == "boni"||leaving2 == "kam" && going2 == "guad"||leaving2 == "kam" && going2 == "buen"||leaving2 == "acc" && going2 == "guad"||leaving2 == "acc" && going2 == "buen"||leaving2 == "acc" && going2 == "ayala"||leaving2 == "sa" && going2 == "kam"||leaving2 == "sa" && going2 == "buen"||leaving2 == "sa" && going2 == "ayala"||leaving2 == "sa" && going2 == "maga"||leaving2 == "ort" && going2 == "na"||leaving2 == "ort" && going2 == "ayala"||leaving2 == "ort" && going2 == "maga"||leaving2 == "ort" && going2 == "ta"||leaving2 == "sb" && going2 == "na"||leaving2 == "sb" && going2 == "qa"||leaving2 == "sb" && going2 == "maga"||leaving2 == "sb" && going2 == "ta"||leaving2 == "boni" && going2 == "na"||leaving2 == "boni" && going2 == "qa"||leaving2 == "boni" && going2 == "kam"||leaving2 == "boni" && going2 == "ta"||leaving2 == "guad" && going2 == "qa"||leaving2 == "guad" && going2 == "kam"||leaving2 == "guad" && going2 == "acc"||leaving2 == "buen" && going2 == "kam" ||leaving2 == "buen" && going2 == "acc"||leaving2 == "buen" && going2 == "sa"||leaving2 == "ayala" && going2 == "acc"||leaving2 == "ayala" && going2 == "sa"||leaving2 == "ayala" && going2 == "ort"||leaving2 == "maga" && going2 == "sa"||leaving2 == "maga" && going2 == "ort"||leaving2 == "maga" && going2 == "sb"||leaving2 == "ta" && going2 == "ort"||leaving2 == "ta" && going2 == "sb"||leaving2 == "ta" && going2 == "boni"){
			journey2 = "Twenty";
			fareValue2 = "20.00";
		} else  if (leaving2 == "na" && going2 == "buen"||leaving2 == "na" && going2 == "ayala"||leaving2 == "na" && going2 == "guad"||leaving2 == "qa" && going2 == "buen"||leaving2 == "qa" && going2 == "ayala"||leaving2 == "qa" && going2 == "maga"||leaving2 == "kam" && going2 == "ayala"||leaving2 == "kam" && going2 == "maga"||leaving2 == "kam" && going2 == "ta"||leaving2 == "acc" && going2 == "maga"||leaving2 == "acc" && going2 == "ta"||leaving2 == "sa" && going2 == "ta"||leaving2 == "guad" && going2 == "na"||leaving2 == "buen" && going2 == "na" ||leaving2 == "buen" && going2 == "qa"||leaving2 == "ayala" && going2 == "na"||leaving2 == "ayala" && going2 == "qa"||leaving2 == "ayala" && going2 == "kam"||leaving2 == "maga" && going2 == "qa"||leaving2 == "maga" && going2 == "kam"||leaving2 == "ta" && going2 == "kam"||leaving2 == "ta" && going2 == "acc"||leaving2 == "ta" && going2 == "sa"){
			journey2 = "TwentyFour";
			fareValue2 = "24.00";
		} else if (leaving2 == "na" && going2 == "maga"||leaving2 == "na" && going2 == "ta"||leaving2 == "qa" && going2 == "ta"||leaving2 == "maga" && going2 == "na"||leaving2 == "ta" && going2 == "na"||leaving2 == "ta" && going2 == "qa"){
			journey2 = "TwentyEight";
			fareValue2 = "28.00";
		} else if (leaving2 == going2){
			window.alert("Please choose a different Destination.").innerHTML;
		}

		// COMPUTING FOR THE DISCOUNTED PRICE
		// .80 IS THE SHORTCUT OF GETTING 20% DISCOUNT OFF THE REGULAR PRICE
		if (discount2 !== "regular"){
	 		fareValue2 = (fareValue2 * .80).toFixed(2); 
		}
		
		window.alert('The total ticket price for your trip is ' + fareValue2 +'php. ' + 'Proceed to the next station.').innerHTML;
	}


// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
