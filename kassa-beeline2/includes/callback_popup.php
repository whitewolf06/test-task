<div class="popup" id="requestCall">
		<div class="middle">
			<div class="frame center">
				<div class="xbtn"></div>
				<p class="h1">Обратный звонок</p>
				<form class="fields" data-product="<?php if(isset($product_datatype)){ echo $product_datatype; } ?>">
					<input type="text" required placeholder="Имя" name="f_fio">
					<input type="tel" required placeholder="Телефон" name="f_phone" >
					<div class="greyframe">
						<button>Оставить заявку</button>
					</div>
				</form>
				<div class="success hidden">
					<div class="table">
						<div class="middle">
							<p class="h1">Спасибо, <br />что выбрали Lifepay</p>
							<p>
								Наш специалист свяжется с вами в ближайшее время.
							</p>
							<div class="greyframe">
								Для активации доступа воспользуйтесь кодом из смс, который мы отправили на ваш номер телефона.
							</div>
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