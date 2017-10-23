var ajaxifyingEffect = $('.ajaxifying-effect');

$(window).on('action:ajaxify.start', function(data) {
	loadingBar.fadeIn(0).removeClass('reset');
	ajaxifyingEffect.removeClass('hidden');
});

$(window).on('action:ajaxify.contentLoaded', function() {
	loadingBar.css('width', '100%');
	ajaxifyingEffect.addClass('hidden');
	setTimeout(function() {
		loadingBar.fadeOut(250);

		setTimeout(function() {
			loadingBar.addClass('reset').css('width', '0%');
		}, 250);
	}, 750);
});
