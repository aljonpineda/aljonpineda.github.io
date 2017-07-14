function comment() {
  var comment = $('#comment').val();
  $("body").append(comment);
}

function handleKey(event) {
  if (event.keyCode == 13) {
    comment();
    return false;
  }
}

function animateHeading() {
  for (var i = 0; i < 3; i++) {
    $(".animated_heading h2").animate({fontSize: "40px"}, 1000);
    $(".animated_heading h2").animate({fontSize: "25px"}, 1000);
  }
}

function showParagraph() {
  $("p").slideDown();
}

function hideParagraph() {
  $("p").slideUp();
}

function showBooksList() {
  $(".books_list").slideDown();
}

function hideBooksList() {
  $(".books_list").slideUp();
}

function showMoviesList() {
  $(".movies_list").slideDown();
}

function hideMoviesList() {
  $(".movies_list").slideUp();
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on('keypress', handleKey);
  animateHeading();

  $("#show_paragraph_button").click(showParagraph);
  $("#hide_paragraph_button").click(hideParagraph);
  $("#show_list_button").click(showBooksList);
  $("#hide_list_button").click(hideBooksList);
  $("#show_button").click(showMoviesList);
  $("#hide_button").click(hideMoviesList);
}

$(document).ready(setup)
