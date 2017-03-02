<?php
$ds          = DIRECTORY_SEPARATOR;  //1
 
$storeFolder = 'uploads';   //2
 
if (!empty($_FILES)) {
     
    foreach ($_FILES['file']['name'] as $key => $item) {
	    $tempFile = $_FILES['file']['tmp_name'][$key];                  
	      
	    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  
	     
	    $targetFile =  $targetPath. $_FILES['file']['name'][$key];  
	    move_uploaded_file($tempFile,$targetFile); 
    }
     
}
// echo json_encode($_FILES);
?> 