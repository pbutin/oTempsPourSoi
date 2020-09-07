$( ".btnAcceuil" ).click(function() {
  $("#body").load("html/acceuil.html");
});

$( ".btnAPropos" ).click(function() {
  $("#body").load("html/aPropos.html");
});

$( ".btnAtelier" ).click(function() {
  $("#body").load("html/atelier.html");
});

$( ".btnAtelierBienEtre" ).click(function() {
  $("#body").load("html/atelierBienEtre.html");
});

$( ".btnAtelierZeroDechet" ).click(function() {
  $("#body").load("html/atelierZeroDechet.html");
});

$( ".btnBonCadeau" ).click(function() {
  $("#body").load("html/bonCadeau.html");
});

$( ".btnDemiJourneeBienEtre" ).click(function() {
  $("#body").load("html/demiJourneeBienEtre.html");
});

$( ".btnMassage" ).click(function() {
  $("#body").load("html/massage.html");
});

$(document).ready(function(){
	$('#nav-mobile').sidenav();
	$(".dropdown-trigger").dropdown();
});