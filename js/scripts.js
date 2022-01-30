  //User interface logic
function cSharp(message) {
  $("#cSharp").removeClass("hidden");
  $(".message").text(message);
}

function java(message) {
  $("#java").removeClass("hidden");
  $(".message").text(message);
}

function python(message) {
  $("#python").removeClass("hidden");
  $(".message").text(message);
}

function ruby(message) {
  $("#ruby").removeClass("hidden");
  $(".message").text(message);
}

function php(message) {
  $("#php").removeClass("hidden");
  $(".message").text(message);
}

function cPlusPlus(message) {
  $("#cPlusPlus").removeClass("hidden");
  $(".message").text(message);
}

function javaScript(message) {
  $("#javaScript").removeClass("hidden");
  $(".message").text(message);
}

function swift(message) {
  $("#swift").removeClass("hidden");
  $(".message").text(message);
}

$(document).ready(function() {
  $("#btnOne").click(function() {
    if($("input[type='radio'][name='questOne']").is(":checked")) {
      $("#questOne").addClass("hidden");
      $("#questTwo").removeClass("hidden");
      $("#error").addClass("hidden");
    } else
    $("#error").removeClass("hidden");
  });
  $("#btnTwo").click(function() {
    if($("input[type='radio'][name='questTwo']").is(":checked")) {
      $("#questTwo").addClass("hidden");
      $("#questThree").removeClass("hidden");
      $("#error").addClass("hidden");
    } else {
      $("#error").removeClass("hidden");
    }
  });
  $("#btnThree").click(function() {
    if($("input[type='radio'][name='questThree']").is(":checked")) {
      $("#questThree").addClass("hidden");
      $("#questFour").removeClass("hidden");
      $("#error").addClass("hidden");
    } else {
      $("#error").removeClass("hidden");
    }
  });
  $("#btnFour").click(function() {
    if($("input[type='radio'][name='questFour']").is(":checked")) {
      $("#questFour").addClass("hidden");
      $("#questFive").removeClass("hidden");
      $("#error").addClass("hidden");
    } else {
      $("#error").removeClass("hidden");
    }
  });

  $("#retake").click(function(){
    $("#retake").addClass("hidden");
    $(".result").addClass("hidden");
    $("#questOne").removeClass("hidden");
  });


 $("input[name='theme']").change(function() {
  $("#theme").toggleClass("dark");
  $("#banner").toggleClass("banner--dark")
 });


  

 //business logic
  $("form#quiz").submit(function(e) {
    e.preventDefault();
    const resultOne = $("input[type='radio'][name='questOne']:checked").val();
    const resultTwo = $("input[type='radio'][name='questTwo']:checked").val();
    const resultThree = $("input[type='radio'][name='questThree']:checked").val();
    const resultFour = $("input[type='radio'][name='questFour']:checked").val();
    const resultFive = $("input[type='radio'][name='questFive']:checked").val();
      if (resultOne === "web") {
        if (resultTwo === "front") {
          if (resultThree === "new") {
            javaScript("Javascript is always being improved by additional frameworks and libraries. You may be interested in Angular or React!");
          } else {
            javaScript("");
          }
        } else {
          if (resultThree === "new") {
            python("Python is growing in popularity for backend web development.");
          } else {
            if (resultFour === "jobs") {
              ruby("");
            } else if (resultFour === "woz") {
              java("");
            } else {
              php("");
            }
          }
        }
      } else if (resultOne === "game") {
        if (resultFour === "woz") {
          cPlusPlus("");
        } else if (resultFour === "minecraft") {
          java("Java is one of the best game development languages. The best selling game of all time Minecraft, was coded in Java!");
        } else {
          cSharp("C# is one of the most popular langauges to write in Unity for game creation.");
        }
      } else if (resultOne === "machine") {
        if (resultFive === "yes") {
          python("Computers are not very smart, but python can make them seem really smart!");
        } else {
          python("We agree that computers aren't smart, with machine learning Python can make them seem smart.");
        }
      } else {
        swift("");
      }
      $("#questFive").addClass("hidden");
      $("#retake").removeClass("hidden");
  });
});
