(function(jQuery){

jQuery.fn.alttip = function(){
		var alt_text = $(".alt_text");
		this.mouseover(function(){
			var alt = $(this).attr("alt");
			// alert(alt);
			$(alt_text).html(alt).show(1000);
		});
		this.mouseout(function(){
			$(alt_text).hide(500);
		});
		this.mousemove(function(e){
			$(alt_text).css({
				top:e.pageY -60,
				left:e.pageX - 20
				});
		});
	
}
})(jQuery);