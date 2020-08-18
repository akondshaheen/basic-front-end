$(document).ready(function() {

alert("Locked");
document.getElementById('text').innerHTML = "I am checking Javascript";
$('#text').html("I am checking jquery");

document.getElementsByClassName('my-input').value = "Value of input";
$('.my-input').val("New input val");

});
