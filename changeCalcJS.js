function changeCalc()
{
	var itemCost = $('#costOfItem').val();
	var currencyReceived = $('#cashGiven').val();
	var currencyOwed = currencyReceived - itemCost;
	var totalOwed = currencyOwed.toFixed(2);

	$('#results').text( "Total due back: $" + totalOwed );

	// example 3.89 due back

	var coinsOwed = totalOwed % 1; // .89
	var dollars = totalOwed - coinsOwed // 3
	var coinsOwed = coinsOwed.toFixed(2); // fixed .89 coins
	
	var coinsOwed = coinsOwed % .25; // .14 left over
	var quarters = totalOwed - dollars - coinsOwed; // .75
	var quarters = quarters.toFixed(2); // fixed .75 quarters
	var coinsOwed = coinsOwed.toFixed(2); // fixed .14 fixed left over
	var coinsOwed = coinsOwed % .10; // .04 left over
	var dimes = totalOwed - dollars - quarters - coinsOwed; // .10
	var dimes = dimes.toFixed(2); // fixed .10
	var coinsOwed = coinsOwed.toFixed(2); // fixed .04 left over
	var coinsOwed = coinsOwed % .05; // .04 left over 
	var nickels = totalOwed - dollars - quarters - dimes - coinsOwed; // .00 (no nickels)
	var nickels = nickels.toFixed(2); // fixed .00
	var coinsOwed = coinsOwed.toFixed(2); // fixed .04 left over 
	var coinsOwed = coinsOwed % .01; // 0.00 left over
	var pennies = totalOwed - dollars - quarters - dimes - nickels - coinsOwed; // .04
	var pennies = pennies.toFixed(2); // fixed 0.00 left over

	console.log(coinsOwed) //test to make sure its 0

	quarters = quarters * 4
	dimes = dimes * 10
	nickels = nickels * 20
	pennies = pennies * 100

	$('#dollarsDueBack').text('$' + dollars + ".00");
	$('#quartersDueBack').text(quarters);
	$('#dimesDueBack').text(dimes);
	$('#nickelsDueBack').text(nickels);
	$('#penniesDueBack').text(pennies);
}	
