$(document).ready(function(){
	$(".slider__block").slick({
		responsive:
		[
			{
				breakpoint:768,
				settings: {
					slidesToShow:1,
					arrows:false,
					
				}
			}
		]
	});
})