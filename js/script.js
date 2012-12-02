$(init);
function init() {
	animation.homepage();
};
animation = {
	homepage: function(){
		var delaysHome = [200, 800, 1300, 1800, 2200, 2600, 3000, 3500, 4200, 4500, 5000, 5600, 6200, 7000, 7500, 8000, 8500, 9000, 9500];	
		$('#intro span').each(function (i) {
				setTimeout(function (li) {
					li.animate({opacity: 1}).delay(9500).queue(function(n) { 
						$("#smile").html(";)"); n();
					});	
			}, delaysHome[i], $(this));
		});
	},
}
