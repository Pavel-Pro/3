$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

});


$(function() {
	$(".tabs a").click(function () {
		$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide");
		$(this).parent().siblings().removeClass("active");
		var id = $(this).attr("href");
		$(id).removeClass("hide");
		$(this).perent().addClass("active");
		return false;
	}); 

	$(".banner-slider, .testimonial-slider").slick({
		arrows: false,
		dots: true,
	})
	$(".portfolio-slider").slick({
		dots: true,
		appendArrows: '.portfolio-slider_buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	})
});

   


