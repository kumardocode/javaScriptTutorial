$(document).ready(()=>{
  $('#slides').superslides({
    animation:'fade',
    play:5000,
    pagination:false
  });
  var typed = new Typed(".typed",
  {
    strings: ["Developer.","Student.","Software Engineer."],
    loop:true,
    typeSpeed:70,
   
    startDelay:1000,
    showCursor:false, 
    smartBackspace: true
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
})