//navbar

$(document).ready(function() {
   $(".navbar-burger").click(function() {
       $(".navbar-burger").toggleClass("is-active");
       $(".navbar-menu").toggleClass("is-active");
   });
 });



//map
function initMap() {
   const uluru = { lat: -25.344, lng: 131.036 };
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: uluru,
   });
   const marker = new google.maps.Marker({
     position: uluru,
     map: map,
   });
 }

 //map show or hide
const button = document.getElementById('map-show-hide-btn');
button.addEventListener('click',function(){
   $(".location-popup").toggle();    
})

 //map show or hide
 const searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click',function(){
    $(".search-popup").toggle();    
 })


 //coundown
 $(document).ready(function(){
   var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
       
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
       
     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
     // Output the result in an element with id="demo"
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
     
       
     // If the count down is over, write some text 
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = "EXPIRED";
     }
   }, 1000);
 });


 //counter
 $('.counter-num').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 10000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//pricing

$("[data-toggle='tab']").click(function () {
  var tabs = $(this).attr('data-tabs');
  var tab = $(this).attr("data-tab");
  $(tabs).find(".pricing-tab").removeClass("active");
  $(tabs).find(tab).addClass("active");

});

$(document).ready(function() {
  $(".btn-switch-addon").click(function () {
      $(".btn-switch-addon").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });
  });