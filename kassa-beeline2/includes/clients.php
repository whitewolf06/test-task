<div class="slide auto kosoy client">
			<div class="content">
        <div class="wrap_pointList">
          <p class="center largeOffset h1">Клиенты о Lifepay</p>
          <ul class="pointList">
              <li>
                  <img src="img/reviews/anna_slavutina_review.png" alt=""/>
                  <img class="faded" src="img/reviews/anna_slavutina_review_colored.png" alt=""/>
                  <div class="block"></div>
              </li>
              <li>
                  <img src="img/reviews/mikhail_prokopez_review.png" alt=""/>
                  <img class="faded" src="img/reviews/mikhail_prokopez_review_colored.png" alt=""/>
                  <div class="block"></div>
              </li>
              <li>
                  <img src="img/reviews/galina_korotkova_review.png" alt=""/>
                  <img class="faded" src="img/reviews/galina_korotkova_review_colored.png" alt=""/>
                  <div class="block"></div>
              </li>
              <li>
                  <img src="img/reviews/anatoly_sobolev_review.png" alt=""/>
                  <img class="faded" src="img/reviews/anatoly_sobolev_review_colored.png" alt=""/>
                  <div class="block"></div>
              </li>
              <li>
                  <img src="img/reviews/andrey_duhlenko_review.png" alt=""/>
                  <img class="faded" src="img/reviews/andrey_duhlenko_review_colored.png" alt=""/>
                  <div class="block"></div>
              </li>
          </ul>
				</div>
				<div class="viewReview">
					<img src="img/reviews/anna_slavutina_review_colored.png" alt=""/>
					<div class="bubble">
						<div class="middle">
							<h4>Анна Славутина, авторские украшения Anna Slavutina</h4>
							<p>Банковские терминалы мне не показались столь удобными, как изящное решение от Lifepay. Самое ценное – Lifepay не только принимает платежи, но и помогает вести статистику продаж. Не создавайте сложностей, всегда найдется возможность сделать работу более приятной и комфортной!</p>
						</div>
					</div>
				</div>
				<ul class="reviews">
					<li>
						<h4>Анна Славутина, авторские украшения Anna Slavutina</h4>
						<p>Банковские терминалы мне не показались столь удобными, как изящное решение от Lifepay. Самое ценное – Lifepay не только принимает платежи, но и помогает вести статистику продаж. Не создавайте сложностей, всегда найдется возможность сделать работу более приятной и комфортной!</p>
					</li>
					<li>
						<h4>Михаил Прокопец, интернет-магазин дизайнерских предметов интерьера Storystore</h4>
						<p>Нам, как интернет-магазину, очень важно, чтобы для наших клиентов существовали различные способы оплаты покупок, удобные им. Раньше, когда у клиентов не оказывалось наличных средств при оплате заказа курьеру или возникала потребность оплатить приглянувшуюся вещь в нашем шоу-руме. С сервисом Lifepay таких проблем не существует.</p>
					</li>
					<li>
						<h4>Галина Короткова, детокс смузи Ukrop Detox</h4>
						<p>Ваш терминал - очень крутая вещь. Он невероятно удобен в использовании, особенно все в восторге от росписи на экране. Все наши курьеры по доставке уже на Lifepay!</p>
					</li>
					<li>
						<h4>Анатолий Соболев, вейпшоп Babylonvape</h4>
						<p>Терминал Lifepay помогает нам быть ближе к клиенту. Выставки, маркеты, pop-up проекты - теперь больше не существует неудобств с оплатой! Впечатления самые положительные, приятно удивила скорость работы компании. Подключение и техподдержка Lifepay работают удивительно быстро.</p>
					</li>
          <li>
            <h4>Андрей Духленко и Кристина Лазаревич, Основатели кофейни COFFEESPHERE</h4>
            <p>Lifepay - это идеальное решение как для только созданного бизнеса (которым и являлась наша кофейня на момент начала сотрудничества), так и для действующих организаций.  Современные технологии, используемые командой Lifepay, позволяют минимизировать вложения в кассовое оборудование, при этом получив очень удобный аналитический функционал для управления бизнесом. Сервис не стоит на месте, а постоянно развивается и совершенствуется, в том числе обязательно учитываются пожелания и комментарии со стороны бизнеса. Сейчас, оглядываясь назад, можем уверенно сказать, что рады, что выбрали тогда Lifepay среди всех кассовых решений на рынке. Желаем сервису только развития!</p>
          </li>


				</ul>
			</div>
			
			<div class="gradient_bank_klient">
                <div class="mini_content">
                    <h1>Банки-партнёры</h1>
                </div>    
                <ul class="bank_partner">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="mini_content">
			        <h1 class="center largeOffsetTop">Kлиенты</h1>
                </div>    
			    <ul class="banks clients center">
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    	<li></li>
			    </ul>
			</div>
		</div>
<script type="text/javascript" async>
$(document).ready(function(){
	$('.pointList li').click(function(){
            $('.block').css({
                opacity: '0'
            });
            $(this).find('.block').css({
                opacity: '1'    
            });
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
})
</script>