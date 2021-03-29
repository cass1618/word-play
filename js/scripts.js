$(document).ready(function() {
  $("#wordplayForm").submit(function(event) {
  event.preventDefault();

  let sentence = $("#sentence").val();  

  let array = [];
  array = sentence.split(" ");
  
  let newArray = [];
  array.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    }
  })

  newArray.reverse();

  let newSentence = newArray.join(" ");

  $(".output").text(newSentence);    
  });
});