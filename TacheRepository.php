<?php 
	require_once('Database.php');
	require_once('Tache.php');

class TacheRepository
{
	public static function getAllTache()
	{
		$db = Database::connect();
		$sql = "SELECT * FROM tache"; //j'initialise ma commande SQL
		$data = $db->query($sql); //articles = l'execution de la requete sql
		Database::disconnect();
		$taches = $data->fetchAll(PDO::FETCH_CLASS, "Tache");

		return $taches;	
	}

	public static function getTacheById($idTache)
	{
		//modifier requete sql
		$db = Database::connect();
		$sql = "SELECT * FROM tache WHERE id = $idTache"; //j'initialise ma commande SQL
		$data = $db->query($sql); //articles = l'execution de la requete sql
		$db = Database::disconnect();
		$taches = $data->fetchAll(PDO::FETCH_CLASS, "Tache");
		if (count($taches) == 1)
			return $taches[0];
		else
			return null;
	}

	public static function removeTacheById($idTache)
	{
 		//modifier sql
 		$db = Database::connect();
		$sql = "DELETE FROM tache WHERE id = $idTache"; //j'initialise ma commande SQL
		$tache = $db->exec($sql); //articles = l'execution de la requete sql
		$db = Database::disconnect(); 
	}

}
 ?>