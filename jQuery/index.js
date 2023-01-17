// $("h1").css("color", "red")
// $("h1").removeClass("big-title")
// $("h1").hasClass("margin-50") - returns boolean
$("h1").addClass("big-title margin-50");
$("h1").text("bye");

// Manipulating texts with jQuery
$("button").text("Don't Click");
$("button").html("<em>Hey</em>");

// Manipulating attributes using jQuery
// $(img).attr("src") - gets the value of attribute
// $(img).attr("src", "https://www.drum.com") - sets the value of the attribute


// Adding eventListeners using jQuery
$("button").click(function () {
  $("h1").css("color", "green");
});

// $("button").on("click", function () {
//   $("h1").css("color", "red");
// })

//Adding key events
$("input").keypress(function (event) {
  $("h1").text(event.key);
});

//Adding and removing elements using jQuery
$("h1").before("<button>New</button>");
// .after() 
// .prepend()
// .append()
// .remove()


// Adding animations using jQuery
$("button").on("click", function () {
  $("h1").toggle();
  // $("h1").hide();
  // $("h1").show();
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  // $("h1").slidUp();
  // $("h1").animate({opacity: 0.5 }); // only use properties that have numeric values
})