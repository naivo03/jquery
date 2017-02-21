function	showAllTaches(){

	var xhr = getXMLHttpRequest();

	//templating du haut de page
	var form = $("#tachePartForViews");

	console.log(form);
	if(form){
		while (form.firstChild) form.removeChild(form.firstChild);

		var elemForm = document.createElement('div');
		var textEntry = '<div class="form-group" id="contentTache"><p><label for="tache">Tache</label></p><textarea name="content" class="form-control" id="tache"></textarea></div><div id="buttonAjoutModif"><p><button type="button" onClick="addTache()" class="btn btn-success">Creer</button></p></div>';
		elemForm.innerHTML = textEntry;
		form.appendChild(elemForm);
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200)) {
			var tabTaches = JSON.parse(xhr.response);
			var allTaches = document.getElementById('Taches');
			while (allTaches.firstChild) allTaches.removeChild(allTaches.firstChild);

			tabTaches.forEach(function (tache){

				/* templating de la tache */
				var elem = document.createElement('tr');
	  			var todo = '<td>'+tache.content+'</td><td><button type="button" class="btn btn-primary" onClick="updateTache('+tache.id+')">Modifier</button></td><td><button type="button" onClick="suppTache('+tache.id+', this.parentNode.parentNode.rowIndex)" class="btn btn-danger">Supprimer</button></td>';
	  			elem.innerHTML = todo;
	  			allTaches.appendChild(elem);

			});
		}
	};

	xhr.open("GET", "getAllTache.php", true);
	xhr.send(null);
}