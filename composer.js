	
	$(document).ready( function(){

	var targetNumber = 65
	var counter= 0 
	var wins= 0;
	var losses= 0;



	$("#numberGuesses").text(targetNumber);

	var numberOptions = [10, 8, 3, 2 ];
		for (var i=0; i< numberOptions.length; i++);


	$(".gem1").on("click", function() {
		count+= 10;
		$('#counter').html( +count);
	})


	$(".gem1").on("click", function() {
		count+= 8;
		$('#counter').html( +count);
	})


	$(".gem1").on("click", function() {
		count+= 3;
		$('#counter').html( +count);
	})

	$(".gem1").on("click", function() {
		count+= 2;
		$('#counter').html( +count);
	})


    if (counter === targetNumber) {
      alert(" Yay you win!");
    }

    else if (counter >= targetNumber) {
      alert("Awwww too bad, maybe next time!!");
    }

});











