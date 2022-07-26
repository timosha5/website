$(function() {
	var header = $("#header"),
	    introH = $("#intro").innerHeight(),
	    scrolloffset = $(window).scrollTop();

  checkScroll(scrolloffset);

  $(window).on("scroll", function () { 

  	scrolloffset = $(this).scrollTop();

  	 checkScroll(scrolloffset)

  });

   function checkScroll(scrollOffset) {
  	 if (scrollOffset >= introH ) {
  	 	header.addClass("fixed");
  	 } else {
  	 	header.removeClass("fixed");
  	 }
   }

/* Smooth */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this =(this),
		blockId = $this.data('scroll');
		var blockoffset = $(blockId).offset().top;
		$("#nav a").removeClass("active");
		$this.addClass("active");
		$("html, body").animate({
			scrollTop: blockoffset
        },500);

	});

	$("#nav_toggle").on("click", function(event) {
       event.prevenrDefault();
       $(this).toggleClass("active");
       $("#nav").toggleClass("active");
	});

/*Collapse*/
$("[data-collapse]").on("click", function (event){
	event.prevenrDefault();

	var $this =(this),
		blockId = $this.data('collapse');

		$this.toggleClass("active");
});


$("[data-slider]").slick({
   infinite: true,
   fade: false,
   slidesToShow: 1,
   slidesToScroll: 1
});


});