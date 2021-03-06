// JavaScript Document
var countDownDate = new Date("Oct 27, 2018 09:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
	"use strict";
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    	document.getElementById("tiles").innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tiles").innerHTML = "EXPIRED";
}

}, 1000);