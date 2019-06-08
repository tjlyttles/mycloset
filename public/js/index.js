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
        .trim(),
      condition: $("#q4")
        .val()
        .trim(),
      suitedFor: $("#q5").val(),
      userFile: $("#user-file-path").val()
    };
  });
  console.log(newItem);

  // $.post("/api/shirt", newItem).then(function(data) {
  //   console.log(data);
  // });
});
