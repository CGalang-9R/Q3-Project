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
		var discount1 = document.getElementById('inputDiscount').value;
	// PLACEHOLDER FOR THE TOTAL FARE PRICE
		var totalPrice1;

	// TO KNOW WHEN TO APPLY THE DISCOUNT
		if (discount1 == "regular"){
			totalPrice1 = (fare1);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
								
		} else {
		// COMPUTING FOR THE DISCOUNTED PRICE
		// .80 IS THE SHORTCUT OF GETTING 20% DISCOUNT OFF THE REGULAR PRICE
			totalPrice1 = (fare1*.80);
			window.alert('The total fare price is ' + totalPrice1 +'. ' + 'Click the "Buy Ticket" button to purchase the ticket.').innerHTML;
		}

							
		}

	// TO BUY THE TICKET
	// TICKET PRICE
	function buyTicket(){
	// TO GET THE VALUES CHOSEN BY THE USER FROM THE DROPDOWNS 
		var leaving2 = document.getElementById('inputLeaving').value;
		var discount2 = document.getElementById('inputDiscount').value;
		// PLACEHOLDER FOR THE TOTAL FARE PRICE
		var totalPrice2;

		// TO KNOW WHEN TO APPLY THE DISCOUNT
		if (discount2 == "regular"){
			totalPrice2 = (fare2);
			window.alert('The total ticket price for your selection is ' + totalPrice2 +'. ' + 'Proceed to the next station.').innerHTML;
								
		} else {
		// COMPUTING FOR THE DISCOUNTED PRICE
		// .80 IS THE SHORTCUT OF GETTING 20% DISCOUNT OFF THE REGULAR PRICE
			totalPrice2 = (fare2*.80);
			window.alert('The total ticket price for your selection is ' + totalPrice2 +'. ' + 'Proceed to the next station.').innerHTML;
		}

							
		}

// PRINT TICKET
function ticketPrint(){
		window.alert('Check your email for your ticket. Thank you! Have a safe trip!').innerHTML;
}

// REFRESH
window.alert("🚄 LOADING 🚄");		
