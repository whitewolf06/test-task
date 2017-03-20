
$(function() {

	function WidgetWorkSpace() {

		var self = this;

		var params = {
			windowWidth: $(window).innerWidth(),
			windowHeight: $(window).innerHeight(),
			scroll: '',
			scrolling: true,
			scrollMax : '',
			lockBtn :  '-lock',
			animate : {
				stepCur : 0,
				stepMax : 5,
				on: false,
				end: false,
				time: 500
			},
			auto : '',
		}

		this.item =  {
			wrap : $('.obj-workspace__wrapper'),
			canvas : $('.obj-workspace__canvas'),
			pagination : $('.obj-workspace__pagination-link'),
			paginationBtn : $('.obj-workspace__pagination-link'),
			sliderWrap : $('.obj-workspace__slider-wrapper'),
			sliderRoll : $('.obj-workspace__slider-roll'),
			sliderItem : $('.obj-workspace__slider-item'),
			sliderBtnPrev : $('.obj-workspace__slider-control-btn.-left'),
			sliderBtnNext : $('.obj-workspace__slider-control-btn.-right')
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
			setAutoPlay : function() {
				clearInterval(params.auto);
				params.auto = setInterval(function() {
				  if (params.animate.stepCur == params.animate.stepMax) {
				  	clearInterval(params.auto);
				  }
				  else {
				  	$(self.item.sliderBtnNext).click();
				  }
				}, 2000);
			},
			changeStep : function (index) {

				var newStep = params.scrollDelta;
				params.animate.on = true;

				if(index == 'prev') {
					params.animate.stepCur--;
				} else if(index == 'next') {
					params.animate.stepCur++;
				} else if(index >= 0) {
					params.animate.stepCur = index;
				}  else {
					params.animate.stepCur += -(newStep);
				}
				
				if(params.animate.stepCur <= 0) {
					params.animate.stepCur = 0;
					params.animate.on = false;
				}
				if(params.animate.stepCur > params.animate.stepMax) {
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
			actionViewCheckControls: function() {
				$(self.item.sliderBtnPrev).removeClass('-lock');
				$(self.item.sliderBtnNext).removeClass('-lock');
				if(params.animate.stepCur == 0) {
					$(self.item.sliderBtnPrev).addClass('-lock');
				} 
				if(params.animate.stepCur >= params.animate.stepMax) {
					$(self.item.sliderBtnNext).addClass('-lock');
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
				$(self.item.sliderRoll).css({'transform': 'translate(-'+width*curStep+'px, 0px)'});
		
			},
			actionViewAnimate: function() {
				$(self.item.canvas).attr('data-slide',params.animate.stepCur);
			},
			actionViewPagination: function() {
				var $btn = $(self.item.paginationBtn);
				var index = params.animate.stepCur;
				$btn.removeClass('active');
				$($btn[index]).addClass('active');
			},
			actionViewReverce: function() {
				$(self.item.wrap).addClass('reverce');
				setTimeout(function() {
					$(self.item.wrap).removeClass('reverce');
				}, params.animate.time);
			},
			actionScrollAnimate: function() {
				params.scrolling = false;
				$('body,html').stop(true,true).animate({scrollTop:params.scrollMax},300, function() {
					params.scrolling = true;
					params.animate.on = true;
				});
			},
			actionShowAnimation: function () {
				$(self.item.canvas).addClass('animate');
			}
		}

		// events

		this.ev = {
			baseLoad: function() {
				self.fn.checkWindowSize();
				self.fn.setCanvasSize();
				self.fn.checkWindowScroll();
				self.fn.setScrollMax();
				self.fn.checkAnimateMode();
				self.fn.actionViewSetSlideParams();
				self.fn.actionViewPagination();
				self.fn.actionViewCheckControls();
				self.fn.actionViewAnimate();
				if(params.ScrollMode == 'block') {
					self.fn.actionShowAnimation();
					$('html, body').off();
				}
		
			},
			resizeWindow : function() {
				$(window).resize(function () {
					self.fn.checkWindowSize();
					self.fn.setCanvasSize();
					self.fn.setScrollMax();
				});
			},
			scrollWindow : function(type) {
				// $('html, body').bind('DOMMouseScroll mousewheel MozMousePixelScroll', function (e) {
				$(window).scroll(function (e) {
					if(type == 'baseLoad') {
						// console.log(e);
						// self.fn.setDelta(e.originalEvent.wheelDelta);
						self.fn.checkWindowScroll();
						self.fn.checkAnimateMode();

						if(params.ScrollMode == 'block') {
							self.fn.actionShowAnimation();
							self.fn.setAutoPlay();
							$('html, body').off();
						}
					} else {
						// self.fn.setDelta(e.originalEvent.wheelDelta);
						// self.fn.checkAnimateMode();
						// self.fn.checkWindowScroll();


						// switch (params.ScrollMode) {
						// 	case 'lock' :
						// 		e.originalEvent.wheelDelta = 0;
						// 		return false;
						// 		break;
						// 	case 'top':
						// 		break;
						// 	case 'animation':
						// 		self.fn.changeStep();
						// 		self.fn.actionViewAnimate();
						// 		self.fn.actionViewPagination();
						// 		self.fn.actionViewCheckControls();
						// 		self.fn.actionViewChangeSlide();
						// 		self.fn.actionViewPagination();

						// 		return false;
						// 		break;
						// 	case 'block':
						// 		self.fn.actionShowAnimation();
						// 		self.fn.actionScrollAnimate();
						// 		return false;

						// 		break;
						
						// 	default:

						// 		break;
						// }
					}

				});
			},
			clickPagination : function() {
				$(self.item.paginationBtn).click(function(event) {
					self.fn.changeStep($(this).index());
					self.fn.actionViewPagination();
					self.fn.actionViewChangeSlide();
					self.fn.actionViewCheckControls();
					self.fn.actionViewAnimate();
					self.fn.setAutoPlay();
				});
			},
			clickPrev : function() {
				$(self.item.sliderBtnPrev).click(function() {
					if($(this).hasClass(params.lockBtn)) {return false}
					self.fn.changeStep('prev');
					self.fn.actionViewPagination();
					self.fn.actionViewChangeSlide();
					self.fn.actionViewCheckControls();
					self.fn.actionViewAnimate();
					self.fn.setAutoPlay();

				});
			},
			clickNext : function() {
				$(self.item.sliderBtnNext).click(function() {
					if($(this).hasClass(params.lockBtn)) {return false}
					self.fn.changeStep('next');
					self.fn.actionViewPagination();
					self.fn.actionViewChangeSlide();
					self.fn.actionViewCheckControls();
					self.fn.actionViewAnimate();
					self.fn.setAutoPlay();

				});
			},
			
		}

		// registr events

		this.ev.baseLoad();
		this.ev.resizeWindow(); 
		this.ev.clickPagination();
		this.ev.clickPrev();
		this.ev.clickNext();
		this.ev.scrollWindow('baseLoad');

		

	}; 

	var workspace = new WidgetWorkSpace();

	// var animateItems = {
	// 	'pinpad' : $('.obj-workspace__item-pinpad'),
	// 	'card' : $('.obj-workspace__item-card'),
	// 	'printer' : $('.obj-workspace__item-printer'),
	// 	'print-paper' : $('.obj-workspace__item-print-paper'),
	// };

	// var arrSlides = {
	// 	3 : function() {
	// 		animateItems.pinpad.addClass('active');
	// 		animateItems.card.addClass('active');
	// 	},
	// 	4 : function() {
	// 	}
	// };
});
