
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

};


// submit button


document.getElementsByClassName("submit").click = function(){mySubmit()};


function mySubmit(){
  // console.log($('input[name=likert1]:checked').length);
  if($('input[name=likert1]:checked').length < 1 || $('input[name=likert2]:checked').length < 1 || $('input[name=likert3]:checked').length < 1 ) {
    document.getElementsByClassName("submit-fail").text("Plese answer all 3 questions!");
    console.log($('input[name=likert1]:checked').length);
  }

  if($('input[name=likert1]:checked').length == 1 && $('input[name=likert2]:checked').length == 1 && $('input[name=likert3]:checked').length == 1 ) {
  
  document.getElementsByClassName("survey").text ( 'Thank you, we appreciate your opinion!');
  document.getElementsByClassName("survey").cssText = "font-size:5rem; ;color:white;";
  console.log($('input[name=likert1]:checked').length);
  }
}