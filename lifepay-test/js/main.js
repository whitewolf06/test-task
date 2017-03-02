
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
				stepMax : 6,
				on: false,
				end: false,
				time: 500
			}
		}

		this.item =  {
			wrap : $('[data-widget="workspace-animation"]'),
			pagination : $('.obj-workspace__pagination-link'),
			paginationBtn : $('.obj-workspace__pagination-link'),
			sliderWrap : $('.obj-workspace__slider-wrapper'),
			sliderRoll : $('.obj-workspace__slider-roll'),
			sliderItem : $('.obj-workspace__slider-item'),
		}

		// Methods

		this.fn = {
			checkWindowSize: function() {
				params.windowWidth = $(window).innerWidth();
				params.windowHeight = $(window).innerHeight();
			},
			checkWindowScroll: function(delta) {
				params.scroll = $(window).scrollTop();
			},
			checkAnimateMode : function() {
				var curScroll = params.scroll+ (params.windowHeight/2);

				if(!params.scrolling && !params.animate.end) {
					params.ScrollMode = 'lock';
				} else if(params.animate.on && !params.animate.end) {
					params.ScrollMode = 'animation';
				} else if(curScroll <= params.scrollMax || params.animate.end) {
					params.ScrollMode = 'all';
				} else if(params.scrollDelta > 0 ) {
					params.ScrollMode = 'top';
				} else {
					params.ScrollMode = 'block';
				}
			},

			setCanvasSize: function() {
				$(self.item.wrap).css({height: params.windowHeight});
			},
			setScrollMax : function() {
				params.scrollMax = $(self.item.wrap).offset().top;
			},
			setDelta: function(delta) {
				if(delta > 0) {
					params.scrollDelta = 1;
				} else {
					params.scrollDelta = -1;
				}
			},

			changeStep : function (index) {

				var newStep = params.scrollDelta;
				params.animate.on = true;

				if(index) {
					params.animate.stepCur = index;
				} else {
					params.animate.stepCur += -(newStep);
				}
				
				if(params.animate.stepCur <= 0) {
					params.animate.stepCur = 0;
					params.animate.on = false;
				}
				if(params.animate.stepCur >= params.animate.stepMax) {
					params.animate.stepCur = params.animate.stepMax;
					params.animate.on = false;
					params.animate.end = true;
				} else {
					params.scrolling = false;
					setTimeout(function() {
						params.scrolling = true;
					}, params.animate.time);
					
				}


			},
			actionViewSetSlideParams: function() {
				var width = $(self.item.sliderWrap).width();
				var steps = params.animate.stepMax;
				$(self.item.sliderRoll).css({'width': (width*steps)+'px',});
				$(self.item.sliderItem).css({'width': width+'px',});
			},
			actionViewChangeSlide: function() {
				var width = $(self.item.sliderWrap).width();
				var curStep = params.animate.stepCur;
				$(self.item.sliderRoll).css({'left': -(width*curStep)+'px',});
				console.log(curStep);
			},
			actionViewAnimate: function() {
			},
			actionViewPagination: function() {
				var $btn = $(self.item.paginationBtn);
				var index = params.animate.stepCur;
				$btn.removeClass('active');
				$($btn[index]).addClass('active');
			},
			actionScrollAnimate: function() {
				params.scrolling = false;
				$('body,html').stop(true,true).animate({scrollTop:params.scrollMax},300, function() {
					params.scrolling = true;
					params.animate.on = true;
				});
			} 
		}

		// events

		this.ev = {
			baseLoad: function() {
				self.fn.checkWindowSize();
				self.fn.setCanvasSize();
				self.fn.checkWindowScroll();
				self.fn.setScrollMax();
				self.fn.actionViewSetSlideParams();
				console.log(params);
			},
			resizeWindow : $(window).resize(function () {
				self.fn.checkWindowSize();
				self.fn.setCanvasSize();
				self.fn.setScrollMax();
			}),
			scrollWindow : $('html, body').stop(true,true).bind('DOMMouseScroll mousewheel MozMousePixelScroll', function (e) {

				self.fn.setDelta(e.originalEvent.wheelDelta);
				self.fn.checkAnimateMode();
				self.fn.checkWindowScroll();
				console.log(params.ScrollMode)
				switch (params.ScrollMode) {
					case 'lock' :
						return false;
						break;
					case 'top':
						break;
					case 'animation':
						self.fn.changeStep();
						self.fn.actionViewAnimate();
						self.fn.actionViewPagination();
						self.fn.actionViewChangeSlide();
						return false;
						break;
					case 'block':
						self.fn.actionScrollAnimate();
						return false;

						break;
				
					default:

						break;
				}

			}),
			clickPagination : $(self.item.paginationBtn).click(function(event) {
				self.fn.changeStep($(this).index());
				self.fn.actionViewAnimate();
				self.fn.actionViewPagination();
				self.fn.actionViewChangeSlide();
			})
		}

		// start events

		this.ev.baseLoad();
		this.ev.resizeWindow; //callback event
		this.ev.scrollWindow; //callback event
		this.ev.clickPagination; //callback event

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



// if($(self.item.wrap).hasClass('active')) {
// 	params.scrollLock = true;	
// } else {
// 	params.scrollLock = false;
// }
// if(params.scrollLock) {
// 	return false;
// }
// if(!params.scrolling && delta < 0 && params.animate.stepCur == 0) {
// 	return false;
// }
// if(params.scroll+params.windowHeight >= params.scrollMax-(params.windowHeight/2) && delta < 0) {
// 	e.preventDefault();
// 	e.stopPropagation();
// 	params.animate.on = true;
// 	$('body,html').stop(true,true).animate({scrollTop:params.scrollMax-params.windowHeight},500);
// } else {
// 	params.animate.on = false;
// }
// if((params.scroll+params.windowHeight+(-delta)) >= params.scrollMax && delta < 0) {
// 	e.preventDefault();
//     			e.stopPropagation();
// }
				// if (e.type == 'mousewheel') {
//       console.log();
// }
// console.log('scroll '+(params.scroll+params.windowHeight),'max '+params.scrollMax);
// if(delta < 0 && !params.scrolling) {
// 	if(params.animate.stepCur <= params.animate.stepMax) {
// 		params.animate.stepCur++;
// 	}
// } else {
// 	if(params.animate.stepCur > 0) {
// 		params.scrolling = false;
// 		setTimeout(function() {
// 			params.scrolling = true;
// 		},500)
// 		params.animate.stepCur--;
// 		return false
// 	}
// }