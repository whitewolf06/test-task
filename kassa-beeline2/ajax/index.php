<?php
require_once 'Notify.php';

session_start();

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && 
	strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {

	if(!$_SESSION['sendedRequests']){
		$_SESSION['sendedRequests'] = array();
		$_SESSION['lastPhone']		= null;
	} else if(in_array($_REQUEST['f_subj'], $_SESSION['sendedRequests'], true) && $_SESSION['lastPhone'] == $_REQUEST['f_phone']){
		echo json_encode(array(
				'error' => true,
				'type'	=> 'bruteforce'
			));
		exit;
	}

	$_SESSION['sendedRequests'][] 	= $_REQUEST['f_subj'];
	$_SESSION['lastPhone']			= $_REQUEST['f_phone'];

	$notify = new Notify('landingKassa');
	$result = $notify->send();
	echo $result;
}
die;
