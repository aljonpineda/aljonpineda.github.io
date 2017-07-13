function comment() {
  var comment = $('#comment').val();
  $("#user_comment").text(comment);
}

function handleKey(event) {
  if (event.keyCode == 13) {
    comment();
    return false;
  }
}

function animateHeading() {
  for (var i = 0; i < 10; i++) {
    $("h2").animate({fontSize: "40px"}, 1000);
    $("h2").animate({fontSize: "25px"}, 1000);
  }
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on('keypress', handleKey);
  animateHeading();
}

$(document).ready(setup)
