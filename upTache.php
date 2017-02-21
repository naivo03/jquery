<?php 

	require_once("tacheRepository.php");

	$tache = TacheRepository::getTacheById($_POST['tacheId']);
	$tache->setContent($_POST['tache'])->setDateToNow()->update();

	$data = [];
	$data['modif'] = "ok";

	$json = json_encode($data);
	echo $json;
 ?>