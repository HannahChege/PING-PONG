$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    var ping =$(".number").val();
     //$("#result").text(ping)
     for(var i=1;i<=ping;i++){
       $("ul#results").append("<li>" + i + "</li>");
     }
  });
});
