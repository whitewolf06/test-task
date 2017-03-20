$(document).ready(function(){
        var li = $('.i'),
                        sum_at = 0;


                    var objs = li.map(function(n){
                        return $(this).addClass('back' + n++).attr('data-item', sum_at += 200); 
                    }).get();        


                     $('.content.scroll').on('scroll', function() {  
                        var heig = $(this).scrollTop();

                             for (i = 0; i < objs.length; i++) {

                                if(heig > objs[i].attr('data-item')){

                                    $('.i.opacity').removeClass('opacity');
                                    objs[i].addClass('opacity');

                                } 
                            };
                         if (heig > 3600 && heig < 3800){
                             console.log('hello');
                             $('.anim_atol').addClass('opacity');
                         } else {
                             $('.anim_atol').removeClass('opacity');
                         };
                         
                         if (heig > 2200 && heig < 3800){
                             console.log('hello');
                             $('.anim_pinpad').addClass('opacity');
                         } else {
                             $('.anim_pinpad').removeClass('opacity');
                         };
                         
                         if (heig > 2400 && heig < 3800){
                             console.log('hello');
                             $('.anim_cart').addClass('opacity');
                         } else {
                             $('.anim_cart').removeClass('opacity');
                         };

                       }); 
});