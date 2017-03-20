<div class="popup" id="request">
		<div class="middle">
			<div class="frame center">
				<div class="xbtn"></div>
				<p class="h1">Заявка на подключение</p>
				<form class="fields" data-product="<?php if(isset($product_datatype)){ echo $product_datatype; } ?>">
					<input type="text" required placeholder="Имя" name="f_fio">
					<input type="tel" required placeholder="Телефон" name="f_phone" >
					<input type="email" placeholder="E-mail" name="f_mail">
					<div class="greyframe">
						<button>Отправить заявку</button>
					</div>
				</form>
				<div class="success hidden">
					<div class="table">
						<div class="middle">
							<?php if($product_datatype == 'pinpad' || $product_datatype == 'pos'){ ?>
								<p class="h1">Спасибо, <br />что выбрали Lifepay</p>
								<p><br>Осталась пара формальностей.<br> Заполнение карточки займёт не более 3х минут,<br>но значительно ускорит подключение<br></p>
								<p>&nbsp;</p>
								<a href="https://www.life-pay.ru/documents"><button>Заполнить карточку</button></a>
							<?php } else { ?>
								<p class="h1">Спасибо, <br />что выбрали Lifepay</p>
								<p>
									Наш специалист свяжется с вами <br /> в ближайшее время.
								</p>
							<?php } ?>
						</div>
					</div>
				</div>
				<div class="fail hidden">
					<div class="table">
						<div class="middle">
							<p class="h1">Опаньки<br />что-то пошло не так</p>
							<p>
								мы уже исправляем неполадки, а пока вы можете поговорить с нашей замечательной службой поддержки, мы всегда рады Вашему звонку по номеру
							</p>
							<div class="greyframe">
								<a href="tel:8(800)555-23-62" class="bigOne">8 (800) 555-23-62</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>