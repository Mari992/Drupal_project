(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
     	/*hover za slike u news*/
$('.post').hover(function(){
		$('.image-caption',this).slideToggle('slow');
	}, function(){
		$('.image-caption',this).slideToggle('slow');
    });

    }
  };
})(jQuery);