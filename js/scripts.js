$(document).ready(function(){
  $("#number").submit(function(event){
    event.preventDefault();
    var ping =$(".number").val();
     //$("#result").text(ping)
     for(var i=1;i<=ping;i++){
       $("ul#results").append("<li>" + i + "</li>");
       if ((i%3===0)&&(i%5===0)){
       $("ul#results").append("<li> pingpong </li>");
     }elseif((i&3==0)){
        $("ul#results").append("<li> ping </li>");
     }
       else if ((i&5==0)) {
             $("ul#results").append("<li> pong </li>");

       }
       else {
         $("ul#results").append("<li> i </li>");
       }
     };


});
});
