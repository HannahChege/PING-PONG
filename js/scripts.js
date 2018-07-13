$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number=parseInt($("input#number").val());
    var result=number(year);
    $("#result").text(result);
  });
});
