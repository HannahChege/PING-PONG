$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    var ping =$(".number").val();
     $("#result").text(ping)
  });
});
