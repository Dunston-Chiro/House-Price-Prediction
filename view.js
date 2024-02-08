var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$("#myBtn").on("click", function() {
    details = $("#myBtn").prev();
    console.log(details);
    $("#myModal div p").text("BLAH BLAH BLAH!");
    $("#myModal").css("display", "block");

})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// $(function () {
//     $("#dialog").dialog({
//         autoOpen: false,
//         show: {
//             effect: "blind",
//             duration: 1000
//         },
//         hide: {
//             effect: "explode",
//             duration: 1000
//         }
//     });

//     $("#opener").on("click", function () {
//         $("#dialog").dialog("open");
//     });
// });

