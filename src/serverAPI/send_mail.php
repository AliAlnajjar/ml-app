<?php
header("Access-Control-Allow-Origin: *");

$_POST = json_decode($file_get_contents("php://input"), true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST)
	{
	// set response code - 200 OK
	http_response_code(200);
	
	// data
    $subject = $_POST['subject'];
	$to = "ali_alnajjar@live.com";
	$from = "info@mobilland.no";
	$msg =$_POST['message'];

	// Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );
	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
