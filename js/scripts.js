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
        if (questFour === "woz") {
          alert("C++")
        } else if (questFour === "minecraft") {
          alert("java")
        } else {
          alert("c#")
        }
      } else if (questOne === "machine") {
        alert("python")
      } else {
        if (questFive === "yes") {
          alert("python")
        } else {
        alert("swift")
        }
      }
      $("#questFive").addClass("hidden")
  });
});

function cSharp() {
  $("#cSharp").removeClass("hidden")
}

function java() {
  $("#java").removeClass("hidden")
}

function python() {
  $("#python").removeClass("hidden")
}

function ruby() {
  $("#ruby").removeClass("hidden")
}

function php() {
  $("#php").removeClass("hidden")
}

function cPlusPlus() {
  $("#cPlusPlus").removeClass("hidden")
}

function javascript() {
  $("#javascript").removeClass("hidden")
}