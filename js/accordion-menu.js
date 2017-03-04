/* Script for the simple accordion menu (using jQuery).
   User waits 800 milliseconds before the content fades in for
   a duration of 500 milliseconds.
 ******************************************************************/

var accordionFade = { timeBefore: 800, timeUntilFinish: 500 };


/* Accordion is set to be collapsible:
 ******************************************************************/

$(document).on('ready', function() { $("#accordion").accordion(); });

$('#accordion').accordion({ heightStyle: 'content' })
               .accordion({ header: "h3", collapsible: true, active: false });
setTimeout(function() { $('.accordion').animate({ 'opacity': 1 }, accordionFade.timeUntilFinish); }, accordionFade.timeBefore);
