$(document).ready(function() {
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
});
