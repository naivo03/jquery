/* Premier Appel -> Get for Templating */
	read();

	function remove()
	{
				$(".btn-remove").click(function(event) {
					event.preventDefault();
					        var taskId = event.target.id;
					        $.ajax({
							       	url : 'suppTache.php',
							       	type : 'GET',
							       	data : 'tacheId=' + taskId,
							       	dataType : 'json', // On désire recevoir du JSON
							       	success : function(response, statut){ // code_json contient le JSON renvoyé
									    read();
						       		}
						    	});
							});
	}

	function read()
	{
		$.ajax({
			       	url : 'getAllTache.php',
			       	type : 'GET',
			       	dataType : 'json', // On désire recevoir du JSON
			       	success : function(code_json, statut){ // code_json contient le JSON renvoyé
		           		$("#contentTache").children().remove();
		           		$("#contentTache").append('<p><label for="tache">Tache</label></p><textarea name="content" class="form-control" id="tache"></textarea>');
		           		$("#Taches").children().remove();
		           		code_json.forEach(function (tache){
							// templating de la tache 
				  			$("#Taches").append('<tr><td>'+tache.content+'</td><td><button id="buttonModif '+tache.id+'" hidden="'+tache.id+'" type="button" class="btn btn-update btn-primary">Modifier</button></td><td><button id="'+tache.id+'" hidden="'+tache.id+'" type="button" class="btn btn-remove btn-danger">Supprimer</button></td></tr>');
						});

						add();
						update();
						remove();

		       		}
		});
	}

	function add()
	{
		$("#btn-add").unbind("click").click(function(event){
			event.preventDefault();
		$.ajax({
	       	url : 'addTache.php',
	       	type : 'POST',
	       	data : 'tache=' + $('#tache').val(),

	       	dataType : 'json', // On désire recevoir du JSON

	       	success : function(code_json, statut){ // code_json contient le JSON renvoyé

			    $.ajax({
			       	url : 'getAllTache.php',
			       	type : 'GET',
			       	dataType : 'json', // On désire recevoir du JSON
			       	success : function(code_json, statut){ // code_json contient le JSON renvoyé
		           		read();
		       		}
		    	});
       		}
    	});
		});
	}

	function update()
	{
		$(".btn-update").click(function(event) {
			event.preventDefault();
					        var test = event.target.id;
					        var tab = test.split(" ");
					        $.ajax({
						       	url : 'getTacheById.php',
						       	type : 'GET',
						       	data : 'id=' + tab[1],

						       	dataType : 'json', // On désire recevoir du JSON
						       	success : function(code_json, statut){
						       		$("#contentTache").children().remove();
		           					$("#contentTache").append('<p><label for="tache">Tache</label></p><textarea name="content" class="form-control" id="tache">'+code_json.content+'</textarea>');
		           					$("#buttonAjoutModif").children().remove();
		           					$("#buttonAjoutModif").append('<p><button type="button" id="validModif" class="btn btn-primary">Modif</button></p>');

		           					$("#validModif").click(function(){
		           						$.ajax({
									       	url : 'upTache.php',
									       	type : 'POST',
									       	data : 'tacheId=' + tab[1] + '&tache=' + $('#tache').val(),

									       	dataType : 'json', // On désire recevoir du JSON

									       	success : function(code_json, status){
									       		$("#contentTache").children().remove();
										        $("#contentTache").append('<p><label for="tache">Tache</label></p><textarea name="content" class="form-control" id="tache"></textarea>');
										        $("#buttonAjoutModif").children().remove();
					           				    $("#buttonAjoutModif").append('<p><button type="button" id="btn-add" class="btn btn-success">Creer</button></p>');
										        $("#Taches").children().remove();
									       		
									       		read();
									       	}
		           						});
		           					});
						       	}
							});
		       			});
	}