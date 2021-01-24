var a = [];

$(".subj").each(function(e,i){
	let countDownDate = new Date($(i).attr("tt")).getTime();

	let x = setInterval(function() {
		let now = new Date().getTime();
		let distance = countDownDate - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
		$(i).children("td:nth-of-type(4)").text(days + "д " + hours + "ч " + minutes + "м " + seconds + "с");
	
		if (distance < 0) {
			clearInterval(a[e]);
			$(i).children("td").css("background","#68066f");
			$(i).children("td").css("text-decoration","line-through");
			$(i).children("td:nth-of-type(4)").text("Ну всё");
		}
	}, 1000);

	a.push(x);
});