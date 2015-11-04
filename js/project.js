


var numberOfHiddenPhotos = 0;

setInterval( function(){

  if (numberOfHiddenPhotos === 0){
    $('.photo-3').fadeOut();
    numberOfHiddenPhotos = 1;

  } else if( numberOfHiddenPhotos === 1){
    $('.photo-2').fadeOut();
    numberOfHiddenPhotos = 2;

  } else if( numberOfHiddenPhotos == 2){
    $('.photo-3, .photo-2').fadeIn();
    numberOfHiddenPhotos = 0;
  }

}, 4000);

$(".trigger").on("click", function (){
  // use the jquery slide toggle function to animate in and out our navigation links
  $("nav").slideToggle("slow");
});


$('.quote').slick({
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  adaptiveHeight: true
});

// $('.state').hover(function() {
//     $('.state-full', $(this)).slideToggle(200, 'linear').display(100, 'linear');
// });
