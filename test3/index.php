<html>
 
<head>   
 
<!-- 1 -->
<link href="dropzone.css" type="text/css" rel="stylesheet" />
 
<!-- 2 -->
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script src="dropzone.min.js"></script>
 
</head>
 
<body>
<form action="upload.php" enctype="multipart/form-data" method="POST">
	<input type="file" name="pic" />
	<input type="submit" value="Upload" />
</form>
 <style>
	.test {
		    min-height: 150px;
    border: 1px solid #ccc;
    background: white;
    padding: 23px 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    margin: 25px 0;
	}
 </style>
<!-- 3 -->
<form action="upload.php" class="test" method="post" enctype="multipart/form-data"></form>
  <script type="text/javascript">
  	$('.test').addClass('active');
	$('.test').dropzone({
		    url: "upload.php",
            maxFiles: 10,
            addRemoveLinks: true,
            autoProcessQueue: true,
    		    uploadMultiple: true,
            acceptedFiles: 'image/*,application/pdf',
        init: function() {
	      this.on('success', function(file, json) {
	      });
	      this.on('addedfile', function(file) {
	        
	      });
	      this.on('drop', function(file) {
	      }); 
   	 	}
	});
  </script>
</body>
 
</html>