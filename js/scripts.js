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
          if (questThree === "new"){
            javascript("Javascript is always being improved by additional frameworks and libraries. You may be interested in Angular or React!");
          } else {
            javascript();
          }
        } else {
          if (questThree === "new"){
            python("Python is growing in popularity for backend web development");
          } else {
            if (questFour === "jobs") {
              ruby();
            } else if (questFour === "woz") {
              java();
            } else {
              php();
            }
          }
        }
      } else if (questOne === "game") {
        if (questFour === "woz") {
          cPlusPlus();
        } else if (questFour === "minecraft") {
          java("Java is one of the best game development languages. The best selling game of all time Minecraft, was coded in Java!");
        } else {
          cSharp();
        }
      } else if (questOne === "machine") {
        python();
      } else {
        if (questFive === "yes") {
          python("computers are not very smart, but pythong can make them act smart!");
        } else {
        swift();
        }
      }
      $("#questFive").addClass("hidden");
      $("#result").removeClass("hidden")
  });
});

function cSharp() {
  $("#cSharp").removeClass("hidden");
}

function java(message) {
  $("#java").removeClass("hidden");
  $("#java-message").text(message);
}

function python(message) {
  $("#python").removeClass("hidden");
  $("pyth-message").text(message);
}

function ruby() {
  $("#ruby").removeClass("hidden");
}

function php() {
  $("#php").removeClass("hidden");
}

function cPlusPlus() {
  $("#cPlusPlus").removeClass("hidden");
}

function javascript(message) {
  $("#javascript").removeClass("hidden");
  $("#js-message").text(message);
}

function swift() {
  $("#swift").removeClass("hidden");
}