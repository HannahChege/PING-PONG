$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var ping = $(".number").val();
    //$("#result").text(ping)
    for (var i = 1; i <= ping; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        $("ul#results").append("<li> pingpong </li>");
      } else if (i % 3 === 0) {
        $("ul#results").append("<li> ping </li>");
      } else if (i % 5 === 0) {
        $("ul#results").append("<li> pong </li>");
      } else {
        $("ul#results").append("<li>" + i + "</li>");
      }
    };

  });
});