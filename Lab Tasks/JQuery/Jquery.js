function clrChange() {
  var value = $("#email").val();
  if (value === "") {
    $("#email").addClass("red");
    // $("#email").attr("placeholder", "Please enter your Email");
  } else $("#email").removeClass("red");
}
