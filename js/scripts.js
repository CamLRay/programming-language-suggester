$(document).ready(function() {
  //User interface logic
  $("#btnOne").click(function() {
    if($("input[type='radio'][name='questOne']").is(":checked")) {
      $("#questOne").addClass("hidden")
      $("#questTwo").removeClass("hidden")
      $("#error").addClass("hidden")
    } else
    $("#error").removeClass("hidden")
  });
  $("#btnTwo").click(function() {
    if($("input[type='radio'][name='questTwo']").is(":checked")) {
      $("#questTwo").addClass("hidden")
      $("#questThree").removeClass("hidden")
      $("#error").addClass("hidden")
    } else {
      $("#error").removeClass("hidden");
    }
  });
  $("#btnThree").click(function() {
    if($("input[type='radio'][name='questThree']").is(":checked")) {
      $("#questThree").addClass("hidden")
      $("#questFour").removeClass("hidden")
      $("#error").addClass("hidden")
    } else {
      $("#error").removeClass("hidden")
    }
  });
  $("#btnFour").click(function() {
    if($("input[type='radio'][name='questFour']").is(":checked")) {
      $("#questFour").addClass("hidden")
      $("#questFive").removeClass("hidden")
      $("#error").addClass("hidden")
    } else {
      $("#error").removeClass("hidden")
    }
  });


  $("form#quiz").submit(function(e) {
    e.preventDefault();
    const questOne = $("input[type='radio'][name='questOne']:checked").val();
    const questTwo = $("input[type='radio'][name='questTwo']:checked").val();
    const questThree = $("input[type='radio'][name='questThree']:checked").val();
    const questFour = $("input[type='radio'][name='questFour']:checked").val();
    const questFive = $("input[type='radio'][name='questFive']:checked").val();

    if (questOne === "web") {
      if (questTwo === "front") {
        alert("javascript")
      } else {
        if (questThree === "new"){
          alert("Python")
        } else {
          if (questFour === "jobs") {
            alert("Ruby")
          } else if (questFour === "woz") {
            alert("Java")
          } else {
            alert("PHP")
          }
        }
      }
    } else if (questOne === "game") {

    } else if (questOne === "machine") {

    } else {

    }
  });
});

function cSharp() {
  alert("C# is the language for you");
}