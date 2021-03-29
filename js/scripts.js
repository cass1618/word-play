$(document).ready(function() {
  $("#wordplayForm").submit(function(event) {
  event.preventDefault();

  let sentence = $("#sentence").val();  
  $(".output").text(sentence)

    
  });
});