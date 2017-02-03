    	$(document).ready(function() {
    		$('.start1').click(function() {
      			$('.block-left').addClass('bounceInLeft');
      			$('.block-right').addClass('bounceInRight'); 
      			// Добавляем класс bounce
     			}
     		)
     		$('.start2').click(function() {
      			$('form').addClass('bounceInUp');// Добавляем класс bounce
     			}
     		)
     		$('.smoothScroll').click(function(event) {
            event.preventDefault();
            var href=$(this).attr('href');
            var target=$(href);
            var top=target.offset().top;
            $('html,body').animate({scrollTop: top}, 'slow');
    			}
    		)
    		$(window).scroll(function() {
    			var height = $(window).scrollTop();
    			if (height > 100) {
        	$('.arrow-up').fadeIn();
    			} else {
        	$('.arrow-up').fadeOut();
    		}
			})
			$(document).ready(function() {
    		$(".arrow-up").click(function(event) {
        	event.preventDefault();
        	$("html, body").animate({ scrollTop: 0 }, "slow");
        	return false;
    		})
			})
		});