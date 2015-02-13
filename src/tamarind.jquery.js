function tamarindclass() {

	'use strict';

	var self = this;

	this.opts = {
		slideshowTime : 8000
	}

	this.el = {
		arrows : '<ul class="TamarindArrowNav"><li class="TamarindArrowNav-item"><a href="#" class="TamarindArrowNav-button TamarindArrowNav-button--prev" data-dir="prev">Previous</a></li><li class="TamarindArrowNav-item"><a href="#" class="TamarindArrowNav-button TamarindArrowNav-button--next" data-dir="next">Next</a></li></ul>'
	}

	this.init = function(el, opts) {
		if(el.length > 0 ) {

			el.children('.Tamarind-item').addClass('inactive');
			el.children('.Tamarind-item:first-child').removeClass('inactive').addClass('active');

			if(opts.nav === true) {
				el.parent('.TamarindWrap').append(self.el.arrows);
				$('.TamarindArrowNav-button').on('click', self.handleClick);
			}

			if(opts.autoplay === true) {
				self.startSlideshow();
			}
		}
	}

	this.handleClick = function(event) {
		event.preventDefault();
		var button = $(event.target);
		var dir = button.attr('data-dir');
		self.move(dir);
	}

	this.move = function(dir) {
		var current = $('.Tamarind > .Tamarind-item.active');
		var target;

		if(dir === 'next') {
			target = current.next();
			if(target.length === 0) {
				target = $('.Tamarind > .Tamarind-item:first-child');
			}
		}
		else {
			target = current.prev();
			if(target.length === 0) {
				target = $('.Tamarind > .Tamarind-item:last-child');
			}
		}

		current.removeClass('active').addClass('inactive');
		target.removeClass('inactive').addClass('active');
	}

	this.startSlideshow = function() {
		// On arrow click, reset time
		// On hover, stop, then restart
		setInterval(function(){
			self.move('next');
		},self.opts.slideshowTime);
	}

};

window.tamarind = (function (window, document, undefined) {

	'use strict';

	var tamarind = {
		steps : {}
	}

	tamarind.init = function (opts) {
		$('.js-tamarind').each(function(){
			var tamarindinstance = new tamarindclass();
			tamarindinstance.init($(this), opts);
		});
	}

	return tamarind;

})(window, document);
