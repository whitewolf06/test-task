var isTouchDevice = isTouchDevice(),
    isMobileBrowser = mobileAndTabletcheck(),
    clickEvent = isTouchDevice ? 'click' : 'click',
    touchEvent = isTouchDevice ? 'touchstart' : 'mouseup',
    isMobile = $(window).width() <= 1000,
    start = new Date().getTime(),
    devSwiper = null
    targetHolder = false,
    sliderLoaded = false;

function mobileAndTabletcheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function isTouchDevice() {
    var el = document.createElement('div');
    el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
    return typeof el.ongesturestart === "function";
}

var hash = window.location.hash.replace('#','');




$(document).ready(function(){
	
	
 //    $(window).on('scroll', function(e) {
	// 	var th = $(this).scrollTop(),
 //            blockIt = $('.slide.workplace').offset().top + 60;

 //        if (th >= blockIt && !$('.back14').hasClass('opacity') && $(window).width() > 999) {
 //            $('body').animate({
 //                scrollTop: blockIt
 //            }, 300);

 //            $('.content.scroll').css({
 //               overflowY: 'scroll' 
 //            });
 //        } else {
 //            $('.content.scroll').css({
 //               overflowY: 'hidden' 
 //            });

 //            e.preventDefault();
 //            e.stopPropagation();
 //            return false;
 //        }
	// });
    

// $(document).scroll(function () {
//     s_top = $("body").scrollTop();

    
//     yes = $(".content.scroll").offset().top;

    
//     if(s_top > yes){

//     }
// });
    
    
    
    
    
    
    
 $(window).resize(function(){
     var max = $(this).innerHeight();
         if(max > 900){
            $('.popup .select_your_terminal.nj').css({
               height: '100%'
                
            });
        } else {
      
            $('.popup .select_your_terminal.nj').css({
                height: max 
            });

        }

    $('.hei').css('height', parseInt($(window).height()) * $('.i').length-2);
});    

$(window).trigger('resize');

                    var li = $('.i'),
                        sum_at = -500;


                    var objs = li.map(function(n){
                        return $(this).addClass('back' + n++).attr('data-item', sum_at += 500); 
                    }).get();        

                    

//					var chislo = 500;
					$('.bottom_up').on('click', function(e){
								
						var scroll_el = $('.slider_kassa'); 
						if ($(scroll_el).length != 0) { 
                            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
						}

					});


                    var isScrollOne = false;
                     $('.content.scroll').on('scroll', function(e) {
                        
                        
                        if(isScrollOne == false){
                            isScrollOne = true;
                            setTimeout(function(){
                                isScrollOne = false;
                            }, 600);
                            var heig = $(this).scrollTop();
                            
    			
                            for (i = 0; i < objs.length; i++) {
                                if(heig > objs[i].attr('data-item')){
                                    
                                    $('.i.opacity').removeClass('opacity');
                                    objs[i].addClass('opacity');
                                }
                            };

                             if (heig > 6000 && heig < 7000){
                                 $('.anim_atol').addClass('opacity');
                             } else {
                                 $('.anim_atol').removeClass('opacity');
                             };
    						 if (heig > 6500 && heig < 7000){
                                 $('.check').css({
    								 background: 'url(img/check2.png) no-repeat bottom center'
    							 });
                             };
                             
                             if (heig > 5000 && heig < 6000){
                                 $('.anim_pinpad').addClass('opacity');
                             } else {
                                 $('.anim_pinpad').removeClass('opacity');			
                             };
                             
                             if (heig > 5500 && heig < 6000){
                                 $('.anim_cart').addClass('opacity');
                             } else {
                                 $('.anim_cart').removeClass('opacity');
                             };

                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }

                       });
	
	
	
              var allAccordionsS = $('.accordion div.data');
              var allAccordionItemsS = $('.accordion .accordion-item');
    
              $('.accordion  .accordion-item').bind('click', function() {

       
                    if($(this).hasClass('open'))
                    {

                        $(this).removeClass('open');
                        $(this).removeClass('sub_bg');
                        $(this).closest('.content').next().slideUp("slow").removeClass('sub_bg');
                        
                    }
                    else
                    {

                        allAccordionsS.slideUp("slow");
                        allAccordionItemsS.removeClass('open');
                        allAccordionItemsS.removeClass('sub_bg');
                        $(this).addClass('open');
                        $(this).addClass('sub_bg');
                        $(this).closest('.content').next().slideDown("slow").addClass('sub_bg');
                        $(this).closest('.accordion').siblings('.content.closed').find('.njoy_slide').slideUp('slow');
                        $('.accordion.data_2').find('.njoy_slide').find('.two').slideUp('slow');
                        
                        return false;
                    }
			  });
			  var allAccordionsS_2 = $('.accordion_2 div.data_2');
              var allAccordionItemsS_2 = $('.accordion_2 .accordion-item_2');
    
              $('.accordion_2  .accordion-item_2').bind('click', function() {
                  
                    $('.accordion_2 .njoy_slide').slideDown('slow');
                    $('.accordion_2 .two').slideDown('slow');
                    allAccordionItemsS_2.closest('.content').next().find('.data').slideUp("slow");
                    
                    if($(this).hasClass('open'))
                    {
                        $(this).removeClass('open');
                        $(this).removeClass('sub_bg');
                        $(this).closest('.content').next().slideUp("slow").removeClass('sub_bg');
                    }
                    else
                    {
                        allAccordionsS_2.slideUp("slow");
                        allAccordionItemsS_2.removeClass('open');
                        allAccordionItemsS_2.removeClass('sub_bg');
                        $(this).addClass('open');
                        $(this).addClass('sub_bg');
                        $(this).closest('.content').next().slideDown("slow").addClass('sub_bg');
                        return false;
                    }
                  
                  
              });
                    $('.degr').click(function(){
                                var $t = $(this).parent().find('input');
                                var vI = Math.abs(parseInt($t.val()));

                                $t.val(vI ? -- vI : 0);
                 
                                $('.sum_price').html(get_sum());
                         
                       });         
                      $('.incr').click(function(){

                                var $t = $(this).parent().find('input');
                                var vI = Math.abs(parseInt($t.val())); 

                                $t.val(vI ? ++ vI : 1);
                         
                                $('.sum_price').html(get_sum());
                  
                      });


                function get_sum(){

                    var sum = 7990;

                    $('.form_goods_order').each(function(){
                        sum += parseInt($(this).find('.price_sp').text().replace(/\s+/g, '')) * parseInt($(this).find('input').val());
                    });
     
                    return sum.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
                    
                };
    
                    $('.degr_2').click(function(){
                                var $t = $(this).parent().find('input');
                                var vI = Math.abs(parseInt($t.val()));

                                $t.val(vI ? -- vI : 0);
                 
                                $('.sum_price_2').html(get_sum_2());
                         
                       });         
                      $('.incr_2').click(function(){

                                var $t = $(this).parent().find('input');
                                var vI = Math.abs(parseInt($t.val())); 

                                $t.val(vI ? ++ vI : 1);
                         
                                $('.sum_price_2').html(get_sum_2());
                      });


                function get_sum_2(){

                    var sum_2 = 15590;

                    $('.form_goods_order_2').each(function(){
                        sum_2 += parseInt($(this).find('.price_sp_2').text().replace(/\s+/g, '')) * parseInt($(this).find('input').val());
                    });
     
                    return sum_2.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
                };
              
     function checkCharSupport(chary){
        $('body').append('<div style="visibility:hiddenfont-size: 5px;" id="charTestZone"><span id="char-to-check">'+chary+'</span><span id="not-renderable">⃏</span></div>');

        var testZone = $('#charTestZone'),
            result = testZone.find('#char-to-check').width() == testZone.find('#not-renderable').width();
            
        testZone.remove();
        return !result;
    }

    
    
        $('.popup button, .navigator button').bind(clickEvent, function(){
            var pop = $(this).closest('.popup').length ? $(this).closest('.popup') : $('#'+$(this).attr('data-popup'));
            if($(this).hasClass('installmentShow')){
                pop.find('.installment').removeClass('hidden');
            } else if($(this).hasClass('buyShow')){
                pop.find('.buy').removeClass('hidden');
            }
        });

        $('.popup').bind(clickEvent, function(e){
            if($(e.target).closest('form').length < 1 && e.target.nodeName != 'form'){
                hidePopup($(this));
            }
        });

        $('.xbtn').bind(clickEvent, hidePopup);

        $('.pointList li').click(function(){
            var src = $(this).find('img').attr('src').split('.'),
                index  = $(this).index(),
                review = $($('.reviews li').get(index));

            src = src[0]+'_colored.'+src[1];

            $('.bubble').addClass('fadeOut').one('transitionend', function(){
                $(this).find('.middle').html(review.html());
                $(this).removeClass('fadeOut');
            });
            $('.viewReview img').addClass('fadeOut').one('transitionend', function(){
                var elemental = $(this);
                elemental.attr('src', src);
                setTimeout(function(){
                    elemental.removeClass('fadeOut');
                }, 500);
            });
        })

        $('.reviews li').bind(clickEvent, function(){
            if(!$(this).hasClass('active')){
                $('.reviews li.active').removeClass('active');
                $(this).addClass('active');
                $('.comment div.active').removeClass('active');
                $($('.comment div').get($(this).index())).addClass('active');
            }
        })

        setTimeout(function(){
                $('[data-popup]').bind(clickEvent, function(){
                var popupCall   = $(this).attr('data-popup'),
                    popup       = $('#'+popupCall);

                
//                    if ($('html').width() <= 1000){
//                        $("html,body").css("overflow","hidden");
//                    }

                if(popupCall == 'packPopup' || popupCall == 'tarif'){
                    popup.find('.pack.show').removeClass('show');
                    popup.find('.pack#'+$(this).attr('data-pack')).addClass('show');
                    
                }

                popup.addClass('visible');
                $(window).bind('keypress', function(e){
                    if(e.keyCode == 27){
                        hidePopup($('#'+popupCall));
                        $(window).unbind(e);
                    }
                });
            });
        }, 800);

    var scrollElem = $(window),
        elemMass = [],
        sortIndex = 0;

    function addScrollEvent(elem, func) {
        elemMass.push({
            offset: parseInt(elem.offset().top) - $(window).height() / 1.5,
            elem: elem,
            func: func
        })
    }

    function resizer(){
//        isMobile = $(window).width() <= 1000;
//        var prevInnerHTML = $('.packList').html();
//        if(isMobile){
//            makeSlider($('.packList'));
//        } else {
//            $('.packList').html(prevInnerHTML);
//        }
    }
    makeSlider($('.packList'));

    function makeSlider(slider, beforeMove, options){

        if(!sliderLoaded){
            sliderLoaded = true;
            $.getScript('js/plugins/owl.carousel.min.js', fireItUp);
            
        } else {
            fireItUp();
        }

        function fireItUp(){
            var props = {
                center: true,
                items:1,
                loop:true,
                // dotsData: true,
                // dots:true
            }
            
            if(options){
                $.extend(props, options);
            }

            var sliderController = slider.owlCarousel(props);
            
    



            sliderController.bind('changed.owl.carousel', function(evt){
                if ($('.select4').closest('.owl-item').hasClass('active')){
                    $('.slide_css').find('.transparent').addClass('hidden');
                    $('.slide_css .openPop').attr('data-popup','');
                } else {
                    $('.slide_css').find('.transparent').removeClass('hidden');
                    $('.slide_css .openPop').attr('data-popup','request');
                }
            
                var nextItem = evt.page.index < 2 ? $(slider.get(evt.page.index)).next() : $(slider.get(0));
               
                if(typeof beforeMove === 'function'){
                    beforeMove(evt);
                      
                }
                
            });
//            sliderController.bind('change.owl.carousel', function(evt){

//                 if ($('.select4').closest('.owl-item').hasClass('active')){
//                    $('.slide_css').find('.transparent').addClass('hidden');
//                } else {
//                    $('.slide_css').find('.transparent').removeClass('hidden');
//                }
//            });

            slider.append('<div class="arrow arrowRight"></div>').prepend('<div class="arrow arrowLeft"></div>');

            slider.find('.arrow').bind(clickEvent, function(){
                if(!$(this).hasClass('arrowLeft')){
                    sliderController.trigger('next.owl.carousel');
                } else {
                    sliderController.trigger('prev.owl.carousel');
                }
            });
        }
    }

    $(window).bind('resize', resizer);
    $(window).trigger('resize');

    if(isHighDensity() || isRetina()){
        // $('img').each(function(){
        //     var width   = $(this).width(),
        //         height  = $(this).height(),
        //         src     = $(this).attr('src');

        //      if(!$(this).closest('.pointList').length && !$(this).closest('.viewReview').length){
        //          if(height > 0 && width > 0){
        //              $(this).css({
        //                  width:  width+'px',
        //                  height: height+'px'
        //              }).attr('src', 'img/retina/'+src.split('img/')[1]);
        //          }
        //      }
        // })
    }
    
    

    function scrollListener(){
        var topIndex = $(this).scrollTop(),
            elemIndex = elemMass[sortIndex];
        if (elemIndex && topIndex > elemIndex.offset) {
            elemIndex.func.apply(elemIndex.elem[0])
            sortIndex++;
        }
    }

    function hidePopup(it){
        var it = it.target ? $(it.target).closest('.popup') : it;
        it.addClass('noFade').removeClass('visible').one('transitionend', function(){
            $(this).removeClass('noFade');
//            if ($('html').width() <= 1000){
//                $("html,body").css("overflow","auto");
//            }
        });
        setTimeout(function(){
            it.removeClass('noFade');
            it.find('.underScreen').addClass('hidden');
        }, 1000);
        $(window).unbind('keypress');
    }

    scrollElem.scroll(scrollListener);
    $('.wrapper').scroll(scrollListener);

    // $('.loadFrame .block:last').one('animationend', function(){
    //     $('.loadFrame').addClass('over').one('transitionend', function(){
    //         $(this).remove();
    //         startAnims();
    //     })
    // });

    // setTimeout(function(){
    //     $('.loadFrame').remove();
    //     startAnims();
    // }, 3000);

    function startAnims(){
           
    }

    // function startSocialBlocks(){
    //     (function(d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5&appId=549726198524170";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));

    //     $.getScript('https://vk.com/js/api/openapi.js?121', function(){
    //         VK.Widgets.Group("vk_groups", {mode: 0, width: "250", height: "350", color1: 'FFFCFC', color2: '2B587A', color3: '5B7FA6'}, 54588582);            
    //     });

    //     (function (d, id, did, st) {
    //       var js = d.createElement("script");
    //       js.src = "https://connect.ok.ru/connect.js";
    //       js.onload = js.onreadystatechange = function () {
    //       if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
    //         if (!this.executed) {
    //           this.executed = true;
    //           setTimeout(function () {
    //             OK.CONNECT.insertGroupWidget(id,did,st);
    //           }, 0);
    //         }
    //       }}
    //       d.documentElement.appendChild(js);
    //     }(document,"ok_group_widget","55130274791441","{width:250,height:350}"));
    // }

    // console.info('prestand', new Date().getTime() - start)

    $(window).load(function(){
        // console.info('overstand', new Date().getTime() - start)
        $.getScript('js/plugins/jquery.maskedinput.js', function(){
            $('input[type="tel"]').mask("+7 (999) 999-9999", {
                autoclear: false
            });
        });

        // startSocialBlocks();
        
        $('body').addClass('loaded');
        $('[data-src]').each(function(){
            $(this).attr('src', $(this).attr('data-src'));
        });

        // $.getScript('https://maps.google.com/maps/api/js?sensor=false', function(){
        //     if ( $('#map').length > 0 ) {
        //         var myOptions = { 
        //             zoom: 15,
        //             center: new google.maps.LatLng(55.70835,37.65321),
        //             mapTypeId: google.maps.MapTypeId.ROADMAP,
        //             disableDefaultUI:true,
        //             panControl: false,
        //             mapTypeControl: false,
        //             streetViewControl: false,
        //             zoomControl: true,
        //             zoomControlOptions: {
        //                 style: google.maps.ZoomControlStyle.SMALL
        //             },
        //             styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#999999"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        //         };
                
                
        //         var map = new google.maps.Map(document.getElementById("map"), myOptions);

        //         var marker = new google.maps.Marker({
        //             map:map,
        //             animation: google.maps.Animation.DROP,
        //             position: new google.maps.LatLng(55.70835,37.65321),
        //             icon: 'https://kassa.life-pay.ru/img/mapIcon.png'
        //         });

        //         var infobox = new google.maps.InfoWindow();
        //             infobox.setContent('<div class="myballoon-txt">Lifepay <br/> ул. Ленинская Слобода<br/> д. 19, БЦ "Омега Плаза"</div>');
        //             infobox.setPosition(new google.maps.LatLng(55.70835,37.65321));
        //             infobox.open(map);

        //         setTimeout(function(){
        //             var elem = $('#map .gm-style-iw');
        //             elem.prev().children(2).css({'background':'transparent', 'border': 'none', 'box-shadow': 'none'})

        //             elem.css({
        //                 'margin': '20px 0 0 -112px',
        //                 'text-align': 'right'
        //             });
        //             elem.prev().hide();
        //         }, 550);
        //     }
        // });

        if(isMobile){
            $('a[href*="facebook"], a[href*="vk.com"], a[href*="twitter.com"], a[href*="instagram.com"]').bind('click', relocator);

            function relocator(e) {
                e.preventDefault();

                var self = $(this),
                    now = new Date().valueOf(),
                    caseLinker = self.attr('href'),
                    linker = null;

                if (caseLinker.search('vk') != -1) {
                    linker = 'vk://vk.com/lifepay';
                } else if (caseLinker.search('facebook') != -1) {
                    linker = 'fb://profile/510067995688319';
                } else if (caseLinker.search('twitter') != -1) {
                    linker = 'twitter://user?id=1229688799';
                } else if (caseLinker.search('instagram') != -1) {
                    linker = 'instagram://user?username=life_pay';
                }

                setTimeout(function() {
                    if (new Date().valueOf() - now < 3000) {
                        window.open(self.attr('href'), '_blank');
                    }
                }, 2000);
                window.location = linker;

                return false;
            }
        }
    });        
    
    $('.slide:first input').focus(function(){
        $('.inHidden').addClass('visible');
    });

    $('input[type="tel"]').on('keydown', function(evt){
        if(evt.keyCode == 56 && this.value == '+7 (___) ___-____'){
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        }
    })

    $('input[type="tel"]').on('paste', function(evt){
        var data        = evt.originalEvent.clipboardData.getData('Text'),
            firstChar   = data.charAt(0);
        if(firstChar == 8 || firstChar == 7){
            $(this).val(data.substring(1));
        }
    });

    $('form').submit(submitForm);

    $('a[href="#"]').click(function(e){
        e.preventDefault();
        return false;
    })

    function animateTo(elem){
        var scroll = $(elem).offset().top;
        $('html, body, .wrapper').animate({scrollTop: scroll}, 700);
    }

    function launchFullScreen(element) {
      if(element.requestFullScreen) {
        element.requestFullScreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      }
    }

    function hasFormValidation() {
            return (typeof document.createElement( 'input' ).checkValidity == 'function');
        };

    function validate(form){
        var result = true;
        

        form.find('input').removeClass('invalid');

        form.find('input[required]').each(function(){
            if(!$.trim(this.value)){
                $(this).addClass('invalid');
                result = false;
            } else {
                var input = this;
                if(input.type == "email"){
                    var email_reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if(!email_reg.test(this.value)){
                        result = false;
                        $(this).addClass('invalid');
                    }
                } else if(input.type == "tel"){
                    if ($(this).val().indexOf('_') != -1){
                        result = false;
                        $(this).addClass('invalid');
                    }
                }
            }
        });
         
        return result;
    }

    function submitForm(e){
            e.preventDefault();

            var form    = $(this),
                sendObj = form.serializeArray(),
                type    = false,
                formId  = form.closest('.popup').attr('id');

            sendObj.push({
                name: 'product',
                value: 'cashbox'
            });

            var utmMass = window.location.href.split('?');

            if(utmMass.length > 1){
                var reffererMass    = utmMass[1].split('&'),
                    indexRefferer   = searchStringInArray('refferer', reffererMass),
                    reffererValue   = reffererMass[indexRefferer].split('=')[1];

                sendObj.push({
                    name: 'f_source',
                    value: reffererValue
                });
            }

            function searchStringInArray (str, strArray) {
                for (var j=0; j<strArray.length; j++) {
                    if (strArray[j].match(str)) return j;
                }
                return -1;
            }

            if(form.hasClass('navigator')){
                return false;
            }

            if(validate(form)){
                $.ajax('/ajax/', {
                    type: 'POST',
                    data: sendObj,
                    success: function(data, textStatus, jqXHR) {
                        yaCounter34622200.reachGoal('request');

                        if(form.siblings('.success').length > 0){
                            form.siblings('.success').removeClass('hidden');
                        } else {
                            $('.popup:first .success').removeClass('hidden');
                            $('.popup:first').addClass('visible');
                           
                        }
                    },
                    error: function(jqXHR, textStatus) {
                        if(form.siblings('.fail').length > 0){
                            form.siblings('.fail').removeClass('hidden');
                        } else {
                            $('.popup:first .fail').removeClass('hidden');
                            $('.popup:first').addClass('visible');
                            
                        }
                    }
                });   
            } else if(!formId){
                $('#request').addClass('visible');
//               
            }
        }

    function isHighDensity(){
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }

    function isRetina(){
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    }

            

});


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
                stepMax : 6,
                on: false,
                end: false,
                time: 500
            },
            auto : '',
            autoTime: 10000,
            slideAutoTime: [6000]
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
                    $(self.item.paginationBtn[0]).click();
                  }
                  else {
                    $(self.item.sliderBtnNext).click();
                  }
                }, params.autoTime);
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
                // if($('body').width() < 600) {
                //     width = width*2.35;
                // }
                $(self.item.sliderRoll).css({'width': (width*steps)+'px',});
                $(self.item.sliderItem).css({'width': width+'px',});
            },
            actionViewChangeSlide: function() {
                var width = $(self.item.sliderWrap).width();
                console.log(width);
                // if($('body').width() < 600) {
                //     width = width*2.35;
                // }
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
                // self.fn.setCanvasSize();
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
                    // self.fn.setCanvasSize();
                    self.fn.setScrollMax();
                    self.fn.actionViewSetSlideParams();
                    self.fn.actionViewChangeSlide();
                });
            },
            scrollWindow : function(type) {
                // $('html, body').bind('DOMMouseScroll mousewheel MozMousePixelScroll', function (e) {
                $(window).scroll(function (e) {
                    if(type == 'baseLoad') {
                        
                        // self.fn.setDelta(e.originalEvent.wheelDelta);
                        self.fn.checkWindowScroll();
                        self.fn.checkAnimateMode();

                        if(params.ScrollMode == 'block') {
                            self.fn.actionShowAnimation();
                            self.fn.setAutoPlay();
                            $('html, body').off();
                        }
                    } else {
                        self.fn.setDelta(e.originalEvent.wheelDelta);
                        self.fn.checkAnimateMode();
                        self.fn.checkWindowScroll();


                        switch (params.ScrollMode) {
                            case 'lock' :
                                e.originalEvent.wheelDelta = 0;
                                return false;
                                break;
                            case 'top':
                                break;
                            case 'animation':
                                self.fn.changeStep();
                                self.fn.actionViewAnimate();
                                self.fn.actionViewPagination();
                                self.fn.actionViewCheckControls();
                                self.fn.actionViewChangeSlide();
                                self.fn.actionViewPagination();

                                return false;
                                break;
                            case 'block':
                                self.fn.actionShowAnimation();
                                self.fn.actionScrollAnimate();
                                return false;

                                break;
                        
                            default:

                                break;
                        }
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

});

