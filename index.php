<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"> <!--charset pour comprendre le francais (accents, cedille, etc..) sinon met des @, #,etc...-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>TO DO LIST EN JQUERY</title>

	<!-- Bootstrap core CSS -->
    <link href="assets/bootstrap.min.css" rel="stylesheet">

</head>

<body>
		<div class="container">
		<h1>TO DO LIST</h1>
		<form class="form-inline" id="tachePartForViews">
			<div>
				<div class="form-group" id="contentTache">
					<p><label for="tache">Tache</label></p>
					<textarea name="content" class="form-control" id="tache"></textarea>
				</div>
				<div id="buttonAjoutModif">
					<p><button type="button" id="btn-add" class="btn btn-success">Creer</button></p>
				</div>
			</div>
		</form>

		<div class="table-responsive">
		  <table id="tabTaches" class="table table-striped" >
		  	<thead>
		  		<tr>
		  			<th>Taches</th>
		  			<th>Modification</th>
		  			<th>Suppression</th>
		  		</tr>
		  	</thead>

		  	<tbody id="Taches">

		  	</tbody>
		  </table>
		</div>



	</div>
<script type="text/javascript" src="assets/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="assets/todolist.js"></script>
<script type="text/javascript" src="assets/app.js"></script>

</body>

</html>