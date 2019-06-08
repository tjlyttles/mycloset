$(document).ready(function() {
  $(".parallax").parallax();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();
});

$("#submit").on("click", function(event) {
  event.preventDefault();
  var newItem = {};
  $(".user-input").each(function() {
    newItem = {
      size: $("#q1")
        .val()
        .trim(),
      color: $("#q2")
        .val()
        .trim(),
      type: $("#q3")
        .val()
        .trim(),
      price: $("#shirt-price")
        .val()
        .trim()
    };
    console.log(newItem);
  });

  $.post("/api/shirt", newItem).then(function(data) {
    console.log(data);
  });
});
