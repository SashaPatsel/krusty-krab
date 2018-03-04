// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("newdevoured");

    var newdevouredState = {
      devoured: eaten
    };

    // Send the PUT request.
    $.ajax("/api/krabby/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function() {
        console.log("changed devoured to", newdevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPatty = {
      patty_name: $("#krabby").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/krabby", {
      type: "POST",
      data: newPatty
    }).then(
      function() {
        console.log("created new Patty");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
