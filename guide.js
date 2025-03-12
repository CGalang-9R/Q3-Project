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
// FARE PRICE
function getFarePrice(){
// TO GET THE VALUES CHOSEN BY THE USER FROM THE DROPDOWNS 
	var leaving1 = document.getElementById('inputLeaving').value;
	var going1 = document.getElementById('inputGoing').value
	var discount1 = document.getElementById('inputDiscount').value;
	var journey;
// PLACEHOLDER FOR THE TOTAL FARE PRICE
	var totalPrice1;
	var seatValue;
	var totalDisplayPrice;
	var discountValue = parseInt("0.80");

	// TO KNOW WHEN TO APPLY THE DISCOUNT
	if (discount1 == "regular"){
		if (leaving1 == "na" && going1 == "qa"||leaving1 == "na" && going1 == "kam"||leaving1 == "qa" && going1 == "na"||leaving1 == "qa" && going1 == "kam"||leaving1 == "qa" && going1 == "acc"||leaving1 == "kam" && going1 == "na"||leaving1 == "kam" && going1 == "qa"||leaving1 == "kam" && going1 == "acc"||leaving1 == "kam" && going1 == "sa"||leaving1 == "acc" && going1 == "qa"||leaving1 == "acc" && going1 == "kam"||leaving1 == "acc" && going1 == "sa"||leaving1 == "acc" && going1 == "ort"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "acc"||leaving1 == "sa" && going1 == "ort"||leaving1 == "sa" && going1 == "sb"||leaving1 == "ort" && going1 == "acc"||leaving1 == "ort" && going1 == "sa"||leaving1 == "ort" && going1 == "sb"||leaving1 == "ort" && going1 == "boni"||leaving1 == "sb" && going1 == "sa"||leaving1 == "sb" && going1 == "ort"||leaving1 == "sb" && going1 == "boni"||leaving1 == "sb" && going1 == "guad"||leaving1 == "boni" && going1 == "ort"||leaving1 == "boni" && going1 == "sb"||leaving1 == "boni" && going1 == "guad"||leaving1 == "boni" && going1 == "buen"||leaving1 == "guad" && going1 == "sb"||leaving1 == "guad" && going1 == "boni"||leaving1 == "guad" && going1 == "buen"||leaving1 == "guad" && going1 == "ayala"||leaving1 == "buen" && going1 == "boni" ||leaving1 == "buen" && going1 == "guad"||leaving1 == "buen" && going1 == "ayala"||leaving1 == "buen" && going1 == "maga"||leaving1 == "ayala" && going1 == "guad"||leaving1 == "ayala" && going1 == "buen"||leaving1 == "ayala" && going1 == "maga"||leaving1 == "ayala" && going1 == "ta"||leaving1 == "maga" && going1 == "buen"||leaving1 == "maga" && going1 == "ayala"||leaving1 == "maga" && going1 == "ta"||leaving1 == "ta" && going1 == "ayala"||leaving1 == "ta" && going1 == "maga"){
			journey = "Thirteen";
			seatValue = 13.00;
			
		} else if (leaving1 == "na" && going1 == "acc"||leaving1 == "na" && going1 == "sa"||leaving1 == "qa" && going1 == "sa"||leaving1 == "qa" && going1 == "ort"||leaving1 == "kam" && going1 == "ort"||leaving1 == "kam" && going1 == "sb"||leaving1 == "acc" && going1 == "na"||leaving1 == "acc" && going1 == "sb"||leaving1 == "acc" && going1 == "boni"||leaving1 == "sa" && going1 == "na"||leaving1 == "sa" && going1 == "qa"||leaving1 == "sa" && going1 == "boni"||leaving1 == "sa" && going1 == "guad"||leaving1 == "ort" && going1 == "qa"||leaving1 == "ort" && going1 == "kam"||leaving1 == "ort" && going1 == "guad"||leaving1 == "ort" && going1 == "buen"||leaving1 == "sb" && going1 == "acc"||leaving1 == "sb" && going1 == "kam"||leaving1 == "sb" && going1 == "buen"||leaving1 == "sb" && going1 == "ayala"||leaving1 == "boni" && going1 == "sa"||leaving1 == "boni" && going1 == "acc"||leaving1 == "boni" && going1 == "ayala"||leaving1 == "boni" && going1 == "maga"||leaving1 == "guad" && going1 == "sa"||leaving1 == "guad" && going1 == "ort"||leaving1 == "guad" && going1 == "maga"||leaving1 == "guad" && going1 == "ta"||leaving1 == "buen" && going1 == "ta"||leaving1 == "buen" && going1 == "sb"||leaving1 == "buen" && going1 == "ort"||leaving1 == "ayala" && going1 == "sb"||leaving1 == "ayala" && going1 == "boni"||leaving1 == "maga" && going1 == "boni"||leaving1 == "maga" && going1 == "guad"||leaving1 == "ta" && going1 == "guad"||leaving1 == "ta" && going1 == "buen"){
			journey = "Sixteen";
			seatValue = 16.00;
		
		} else if (leaving1 == "na" && going1 == "ort"||leaving1 == "na" && going1 == "sb"||leaving1 == "na" && going1 == "boni"||leaving1 == "qa" && going1 == "sb"||leaving1 == "qa" && going1 == "boni"||leaving1 == "kam" && going1 == "boni"||leaving1 == "kam" && going1 == "guad"||leaving1 == "kam" && going1 == "buen"||leaving1 == "acc" && going1 == "guad"||leaving1 == "acc" && going1 == "buen"||leaving1 == "acc" && going1 == "ayala"||leaving1 == "sa" && going1 == "kam"||leaving1 == "sa" && going1 == "buen"||leaving1 == "sa" && going1 == "ayala"||leaving1 == "sa" && going1 == "maga"||leaving1 == "ort" && going1 == "na"||leaving1 == "ort" && going1 == "ayala"||leaving1 == "ort" && going1 == "maga"||leaving1 == "ort" && going1 == "ta"||leaving1 == "sb" && going1 == "na"||leaving1 == "sb" && going1 == "qa"||leaving1 == "sb" && going1 == "maga"||leaving1 == "sb" && going1 == "ta"||leaving1 == "boni" && going1 == "na"||leaving1 == "boni" && going1 == "qa"||leaving1 == "boni" && going1 == "kam"||leaving1 == "boni" && going1 == "ta"||leaving1 == "guad" && going1 == "qa"||leaving1 == "guad" && going1 == "kam"||leaving1 == "guad" && going1 == "acc"||leaving1 == "buen" && going1 == "kam" ||leaving1 == "buen" && going1 == "acc"||leaving1 == "buen" && going1 == "sa"||leaving1 == "ayala" && going1 == "acc"||leaving1 == "ayala" && going1 == "sa"||leaving1 == "ayala" && going1 == "ort"||leaving1 == "maga" && going1 == "sa"||leaving1 == "maga" && going1 == "ort"||leaving1 == "maga" && going1 == "sb"||leaving1 == "ta" && going1 == "ort"||leaving1 == "ta" && going1 == "sb"||leaving1 == "ta" && going1 == "boni"){
			journey = "Twenty";
			seatValue = 20.00;
		
		} else  if (leaving1 == "na" && going1 == "buen"||leaving1 == "na" && going1 == "ayala"||leaving1 == "na" && going1 == "guad"||leaving1 == "qa" && going1 == "buen"||leaving1 == "qa" && going1 == "ayala"||leaving1 == "qa" && going1 == "maga"||leaving1 == "kam" && going1 == "ayala"||leaving1 == "kam" && going1 == "maga"||leaving1 == "kam" && going1 == "ta"||leaving1 == "acc" && going1 == "maga"||leaving1 == "acc" && going1 == "ta"||leaving1 == "sa" && going1 == "ta"||leaving1 == "guad" && going1 == "na"||leaving1 == "buen" && going1 == "na" ||leaving1 == "buen" && going1 == "qa"||leaving1 == "ayala" && going1 == "na"||leaving1 == "ayala" && going1 == "qa"||leaving1 == "ayala" && going1 == "kam"||leaving1 == "maga" && going1 == "qa"||leaving1 == "maga" && going1 == "kam"||leaving1 == "ta" && going1 == "kam"||leaving1 == "ta" && going1 == "acc"||leaving1 == "ta" && going1 == "sa")}
			journey = "TwentyFour";
			seatValue = 24.00;
	
		
		} else if (leaving1 == "" && going1 == ""||leaving1 == "" && going1 == ""){
			journey = "TwentyEight";
			seatValue = 28.00;

		} else if (leaving1 == going1){
			window.alert("Please choose a different Destination.").innerHTML;
	}

	window.alert('The total fare price is ' + seatValue +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;

	} else {
		// COMPUTING FOR THE DISCOUNTED PRICE
		// .80 IS THE SHORTCUT OF GETTING 20% DISCOUNT OFF THE REGULAR PRICE
		if (journey = "Thirteen"){
			totalPrice1 = (13.00 * .80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		} else if (journey = "Sixteen"){
			totalPrice1 = (16.00 * .80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		} else if (journey = "Twenty"){
			totalPrice1 = (20.00 * .80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		} else if (journey = "TwentyFour"){
			totalPrice1 = (24.00 * .80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		} else if (journey = "TwentyEight"){
			totalPrice1 = (28.00 * .80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		}
		}

							
		}

// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
