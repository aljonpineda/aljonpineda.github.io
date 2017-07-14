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
  for (var i = 0; i < 1; i++) {
    $(".animated_heading h2").animate({fontSize: "35px"}, 900);
    $(".animated_heading h2").animate({fontSize: "25px"}, 900);
  }
}

function showParagraph() {
  $("p").slideDown();
}

function hideParagraph() {
  $("p").slideUp();
}

function showList() {
  $(".list").slideDown();
}

function hideList() {
  $(".list").slideUp();
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on('keypress', handleKey);
  animateHeading();

  $("#show_paragraph_button").click(showParagraph);
  $("#hide_paragraph_button").click(hideParagraph);
  $("#show_list_button").click(showList);
  $("#hide_list_button").click(hideList);
}

$(document).ready(setup)
