$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("dark-theme");
  });

  $("button#light").click(function() {
    $("body").addClass("light-theme");
  });
});
