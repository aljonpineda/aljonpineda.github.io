function comment() {
  var comment = $('#comment').val();
  $("#user_comment").append(comment + " ");
}

function handleKey(event) {
  if (event.keyCode == 13) {
    comment();
  }
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on('keypress', handleKey);
}

$(document).ready(setup)
