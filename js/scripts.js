$(document).ready(function() {
  // Start Mad Lib Project
  $("#blanks form").submit(function(event) {
    var inputs = ["name1", "name2", "adjective", "noun", "vehicle", "verb"];

    inputs.forEach(function(anything) {
      var somethingElse = $("input#" + anything).val();
      $("." + anything).text(somethingElse);
    });

    $("#story").show();

    event.preventDefault();
  });
  // End Mad Lib Project
  // End Uppercase Project
});
