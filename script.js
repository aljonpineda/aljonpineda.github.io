function comment() {
  var username = $("#username").val();
  var comment = $("#comment").val();

  $(".comments_area").append("<br>", username, " posted: ");
  $(".comments_area").append(comment);
}

function handleKey(event) {
  if (event.keyCode == 13) {
    comment();
    return false;
  }
}

function animateHeading() {
  $(".animated_heading h2").animate({fontSize: "35px"}, 800);
  $(".animated_heading h2").animate({fontSize: "24px"}, 800);

  $(".animated_heading h1").animate({fontSize: "45px"}, 800);
  $(".animated_heading h1").animate({fontSize: "32px"}, 800);
}

function showParagraph() {
  $("p").slideDown();
}

function hideParagraph() {
  $("p").slideUp();
}

function showList() {
  $(this).nextAll(".list").first().slideDown();
}

function hideList() {
  $(this).nextAll(".list").first().slideUp();
}

function mouseEnter() {
  $(this).addClass("mouse_enter");
}

function mouseLeave() {
  $(this).removeClass("mouse_enter");
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on("keypress", handleKey);

  animateHeading();

  $("#show_paragraph_button").click(showParagraph);
  $("#hide_paragraph_button").click(hideParagraph);
  $(".show_list_button").click(showList);
  $(".hide_list_button").click(hideList);

  $(".boxed_text").mouseenter(mouseEnter);
  $(".boxed_text").mouseleave(mouseLeave);

  $(".list").mouseenter(mouseEnter);
  $(".list").mouseleave(mouseLeave);

  $("#my_pic").mouseenter(mouseEnter);
  $("#my_pic").mouseleave(mouseLeave);
}

$(document).ready(setup)
