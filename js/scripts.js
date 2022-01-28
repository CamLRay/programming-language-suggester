$(document).ready(function() {
  $("#btnOne").click(function() {
    $("#questOne").addClass("hidden")
    $("#questTwo").removeClass("hidden")
  });
  $("#btnTwo").click(function() {
    $("#questTwo").addClass("hidden")
    $("#questThree").removeClass("hidden")
  });
  $("#btnThree").click(function() {
    $("#questThree").addClass("hidden")
    $("#questFour").removeClass("hidden")
  });
  $("#btnFour").click(function() {
    $("#questFour").addClass("hidden")
    $("#questFive").removeClass("hidden")
  });

  $("form#quiz").submit(function() {
    e.preventDefault();
    const questOne = $("input[type='radio'][name='questOne']:checked").val();
    const questTwo = $("input[type='radio'][name='questTwo']:checked").val();
    const questThree = $("input[type='radio'][name='questThree']:checked").val();
    const questFour = $("input[type='radio'][name='questFour']:checked").val();
    const questFive = $("input[type='radio'][name='questFive']:checked").val();
  });

});