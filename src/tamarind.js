/**
 * Tamarind
 */

window.smoothScroll = (function (window, document, undefined) {

	'use strict';

	// Feature Test
	if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
		console.log('your browser meets the requirements');
	}
	else {
		console.loh('your browser is kind of old. Lets serve an alternate version');
	}


})(window, document);
