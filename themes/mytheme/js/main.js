
(function ($, Drupal, window, document, undefined) {
	
	/*Pojavljivanje i nestajanje teksta u Uslugama*/

		$(".polje img").each(function() {
			$(this).click(function() {
				$(this).parent().next('.sadrzaj').slideToggle();
			});
		});
	/*Pojavljivanje i nestajanje teksta u Uslugama2*/
		$(".polje2 img").each(function() {
			$(this).click(function () {
            $ (this).parent().parent().next().children('.sadrzaj2').slideToggle();	
        });
		});




	/*hover za slike u uslugama*/
	$('.polje').hover(function(){
		$('img', this).stop().animate({opacity:.6},200);
	}, function(){
		$('img', this).stop().animate({opacity:1},500)
    });

	$('.polje2').hover(function(){
		$('img', this).stop().animate({opacity:.6},200);
	}, function(){
		$('img', this).stop().animate({opacity:1},500)
    });

    })(jQuery, Drupal, this, this.document);
