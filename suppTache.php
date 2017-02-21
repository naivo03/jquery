<?php 
	require_once('TacheRepository.php');

	TacheRepository::removeTacheById($_GET['tacheId']);
	$data = [];
	$data['supp'] = "ok";

	$json = json_encode($data);
	echo $json;
 ?>