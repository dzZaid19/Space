
 document.getElementById('main').addEventListener('click', closeNav);

 function openNav() {
   document.getElementById("mySidenav").style.width = "230px";
   document.getElementById("main").style.marginLeft = "250px";
 }
 
 /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
 }

//new 
$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});