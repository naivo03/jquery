<?php 

	require_once('TacheRepository.php');

	$tache = TacheRepository::getTacheById($_GET['id']);


	$line = [];
	$line['id'] = $tache->getId();
	$line['content'] = $tache->getContent();
	$line['date'] = $tache->getDate();
	$line['userId'] = $tache->getUserId();

	$json = json_encode($line);
	
	echo $json;

 ?>