<?php 
	require_once('TacheRepository.php');

	$tabTaches = TacheRepository::getAllTache();


	$data = [];
	foreach ($tabTaches as $tache) {
		$line = [];
		$line['id'] = $tache->getId();
		$line['content'] = $tache->getContent();
		$line['date'] = $tache->getDate();
		$line['userId'] = $tache->getUserId();
		$data[] = $line;
	}

	$json = json_encode($data);
	
	echo $json;

 ?>