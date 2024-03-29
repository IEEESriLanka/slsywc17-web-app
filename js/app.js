particlesJS.load('particles-js', 'particles.json', function() {
 console.log('particles.js loaded - callback');
 });

// var clock = $('.the-countdown').FlipClock({
// // ... your options here
// });

var clock;

$(document).ready(function() {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(currentDate.getFullYear(), 11, 23);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.the-countdown').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
