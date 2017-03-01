
$(function() {

	function WidgetWorkSpace() {

		var self = this;

		var params = {
			windowWidth: $(window).innerWidth(),
			windowHeight: $(window).innerHeight(),
			scroll: '',
			scrolling: true,
			scrollMax : '',
			animate : {
				stepCur : 0,
				stepMax : 14,
			}
		}

		this.item = $('[data-widget="workspace-animation"]');

		// Methods

		this.fn = {
			checkWindowSize: function() {
				params.windowWidth = $(window).innerWidth();
				params.windowHeight = $(window).innerHeight();
			},
			checkWindowScroll: function(delta) {
				params.scroll = $(window).scrollTop();
			},
			setCanvasSize: function() {
				$(self.item).css({height: params.windowHeight});
			},
			setScrollMax : function() {
				var offset = $(self.item).offset().top;
				params.scrollMax = offset + params.windowHeight;
			}
		}

		// events

		this.ev = {
			baseLoad: function() {
				self.fn.checkWindowSize();
				self.fn.setCanvasSize();
				self.fn.checkWindowScroll();
				self.fn.setScrollMax();
				console.log(params);
			},
			resizeWindow : $(window).resize(function () {
				self.fn.checkWindowSize();
				self.fn.setCanvasSize();
				self.fn.setScrollMax();
			}),
			scrollWindow : $('html, body').bind('DOMMouseScroll mousewheel MozMousePixelScroll', function (e) {
				var delta = e.originalEvent.wheelDelta;
				// if (e.type == 'mousewheel') {
				//       console.log();
				// }
				// console.log('scroll '+(params.scroll+params.windowHeight),'max '+params.scrollMax);
				console.log(delta);
				if(!params.scrolling && delta < 0) {
					return false;
				}
				if(params.scroll+params.windowHeight >= params.scrollMax-(params.windowHeight/2) && delta < 0) {
					e.preventDefault();
					e.stopPropagation();
					params.scrolling = false;
					$('body,html').stop(true,true).animate({scrollTop:params.scrollMax-params.windowHeight},500);
				} else {
					params.scrolling = true;
				}
				if((params.scroll+params.windowHeight+(-delta)) >= params.scrollMax && delta < 0) {
					e.preventDefault();
        			e.stopPropagation();
				}
				self.fn.checkWindowScroll();
			})
		}

		// start events

		this.ev.baseLoad();
		this.ev.resizeWindow; //callback event
		this.ev.scrollWindow;

	}; 
	var workspace = new WidgetWorkSpace();
	// $('[data-widget="workspace-animation"]').css({
	// 	height: '50px',
	// });
});

// $('html, body').off('scroll mousewheel touchmove', function(e) {
// 	console.log(e);
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
// });
