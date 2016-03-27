$(document).ready(function() {
  // Start Mad Lib Project
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();
    var vehicleInput = $("input#vehicle").val();
    var verbInput = $("input#verb").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);
    $(".vehicle").text(vehicleInput);
    $(".verb").text(verbInput);

    $("#story").show();

    event.preventDefault();
  });
  // End Mad Lib Project
  // Start Uppercase Project
  $("#blank-2 form").submit(function(event) {
    var text2Input = $("textarea").val();
    $(".text-result").text(text2Input.toUpperCase());

    event.preventDefault();
  });
  // End Uppercase Project
});
