$(document).ready(function() {
  $(".parallax").parallax();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();
  $(".collapsible").collapsible();
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
  //   $("#q1").val("");
  //   $("#q2").val("");
  //   $("#q3").val("");
  //   $("#shirt-price").val("");
  //   $("#q4").val("");
  //   $("#q5").val("");
  //   $("#user-file-path").val("");
  // });
});

$("#submit-dress").on("click", function(event) {
  event.preventDefault();
  var newDress = {};
  $(".dress-input").each(function() {
    newDress = {
      size: $("#dq1")
        .val()
        .trim(),
      color: $("#dq2")
        .val()
        .trim(),
      type: $("#dq3")
        .val()
        .trim(),
      price: $("#dress-price")
        .val()
        .trim(),
      condition: $("#dq4")
        .val()
        .trim(),
      suitedFor: $("#dq5").val(),
      userFile: $("#dress-file-path").val()
    };
  });
  console.log(newDress);

  // $.post("/api/dress", newDress).then(function(data) {
  //   console.log(data);
  //   $("#dq1").val("");
  //   $("#dq2").val("");
  //   $("#dq3").val("");
  //   $("#dress-price").val("");
  //   $("#dq4").val("");
  //   $("#dq5").val("");
  //   $("#dress-file-path").val("");
  // });
});
