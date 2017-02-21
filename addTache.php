<?php 

	require_once("tacheRepository.php");

	$tache = new Tache();
	$tache->setContent($_POST['tache'])->setUserId(42)->setDateToNow()->insert();

	$data = [];
	$data['ajout'] = "ok";

	$json = json_encode($data);
	echo $json;
 ?>