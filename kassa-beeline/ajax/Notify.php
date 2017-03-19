<?php

class Notify {

	private $source;
	private $params = array();
	private $orderId = null;
	private $clickId = null;

	public function __construct($source) {
		$this->source = $source;
	}

	public function send() {

		$this->prepareData();

		$send = false;

		try {

	        $client = new SoapClient('http://54.246.149.185/api/wsdl', array('cache_wsdl' => WSDL_CACHE_NONE));
	        $answer = $client->request($this->params);

	        $send = ($answer->code == 0) ? true : false;

	        $res = ($answer->code == 0) ? 'Спасибо, что выбрали Beeline. Мы уже звоним вам.' : $answer->message;

	    } catch(SoapFault $e) {
	        $res = 'Возникла техническая проблема. Свяжитесь со службой поддержки.';
	    }

	    if($this->clickId && $send) {
	    	$this->sendAdv();
	    }

        return $res;
	}

	private function prepareData() {

		$this->params['phone'] = !empty($_REQUEST['f_phone']) ? $_REQUEST['f_phone'] : null;

		if(empty($this->params['phone'])) {
			$this->params['phone'] = !empty($_REQUEST['companyPhone']) ? $_REQUEST['companyPhone'] : null;
		}

		$this->params['name'] = !empty($_REQUEST['f_fio']) ? $_REQUEST['f_fio'] : null;
		$this->params['email'] = !empty($_REQUEST['f_mail']) ? $_REQUEST['f_mail'] : null;
		$this->params['source'] = $this->source;
		$this->params['partnerId'] = !empty($_REQUEST['f_source']) ? $_REQUEST['f_source'] : null;

		$product = !empty($_REQUEST['product']) ? $_REQUEST['product'] : null;
		if(!empty($product)) {
			$this->params['product'] = $product;
		}

		$fields = array(
			'f_subj',
			'f_mess',
			'f_promo',
		);

		foreach ($_REQUEST as $key => $value) {
        	if(in_array($key, $fields) && !empty($value)) {
        		$this->params[$key] = $value;
        	}
        }

        $this->prepareAdv();

		return true;
	}

	private function prepareAdv() {
		$this->orderId = uniqid();
		$this->clickId = !empty($_COOKIE['click_id']) ? $_COOKIE['click_id'] : null;
		if($this->clickId) {
		    $this->params['order_id'] = $this->orderId;
		}

		return true;
	}

	private function sendAdv() {
		$url = "https://cityads.ru/service/postback?order_id={$this->orderId}&click_id={$this->clickId}";

	    $ch = curl_init(); curl_setopt( $ch, CURLOPT_URL, $url );
	    curl_setopt( $ch, CURLOPT_HEADER, false );
	    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, false );
	    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	    curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
	    curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, false );

	    $response = curl_exec( $ch );

	    $xml = new SimpleXMLElement($response);

	    $code = strval($xml->code);

	    if ($code == "OK") {
	        // Success
	    } else {
	        // Failed: Send repeat
	        //Рекламодателю следует реализовать функцию повторной отправки запроса самостоятельно
	    }

	    return true;
	}
}
