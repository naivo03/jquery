<?php 

class Database
{
	private static $connection = null;
	private static $dbName = 'todolist'; //si on veut utiliser une variable dans une fonction static il faut que celle la soit aussi static
	private static $host = 'localhost';
	private static $user = 'root';
	private static $password = '';

	public static function connect() //ici nous avons une fonction static qui pourra s'appeler sans l'instantiation d'une class
	{
		self::$connection = new PDO('mysql:host='.self::$host.';dbname='.self::$dbName.';charset=utf8', self::$user, self::$password);
		return self::$connection; //l'utilisation d'une variable static s'utilise avec self::nomAttribut
	}

	public static function disconnect()
	{
		self::$connection = NULL; //je remet database a NULL pour ne pas pourrir ma base avec d'autre elements
	}
}

 ?>