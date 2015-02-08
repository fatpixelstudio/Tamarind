 function tamarindclass() {

	'use strict';

	var self = this;

	this.opts = {
		slideshowTime : 8000
	}

	this.el = {
		arrows : '<ul class="CarouselArrowNav"><li class="CarouselArrowNav-item"><a href="#" class="CarouselArrowNav-button CarouselArrowNav-button--prev" data-dir="prev">Previous</a></li><li class="CarouselArrowNav-item"><a href="#" class="CarouselArrowNav-button CarouselArrowNav-button--next" data-dir="next">Next</a></li></ul>'
	}

	this.init = function(el, opts) {
		if($('.Carousel').length > 0 ) {

			$('.Carousel > .Carousel-item').addClass('inactive');
			$('.Carousel > .Carousel-item:first-child').removeClass('inactive').addClass('active');

			if(opts.nav === true) {
				$('.CarouselWrap').append(self.el.arrows);
				$('.CarouselArrowNav-button').on('click', self.handleClick);
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
		var current = $('.Carousel > .Carousel-item.active');
		var target;

		if(dir === 'next') {
			target = current.next();
			if(target.length === 0) {
				target = $('.Carousel > .Carousel-item:first-child');
			}
		}
		else {
			target = current.prev();
			if(target.length === 0) {
				target = $('.Carousel > .Carousel-item:last-child');
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
