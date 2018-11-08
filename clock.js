console.log('hihi');
function clock(){
	var timer = new Date();

	var hour = timer.getHours();
	var min = timer.getMinutes();
	var second = timer.getSeconds();

	if(hour < 10){
		hour = '0' + hour;
	}
	if(min < 10){
		min = '0' + min;
	}
	if(second < 10){
		second = '0'+ second;
	}

	var outDay = new Date("06/07/2018");
	var backHomeDay = new  Date();

	var totalDays =Math.floor(backHomeDay.getTime() - outDay.getTime());

	document.getElementById("days").innerHTML = Math.floor(totalDays /(24 * 60 * 60 * 1000) - 30);
	
	// document.getElementById("hour").innerHTML = hour;
	// document.getElementById("min").innerHTML = min;
	// // document.getElementById("sec").innerHTML = second;

	document.getElementById("time").innerHTML = hour + ":" + min + ":" + second;
}


setInterval("clock()", 1000);