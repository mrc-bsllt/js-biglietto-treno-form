var bottoneGenera = document.getElementById("active_button");
bottoneGenera.addEventListener("click",

function() {

  // estraggo le informazioni inserite dall'utente
  var nomeUtente = document.getElementById("user_name").value;
  console.log(nomeUtente);
  var kmUtente = parseInt(document.getElementById("user_km").value);
  console.log(kmUtente);
  var etaUtente = document.getElementById("user_age").value;
  console.log(etaUtente);
  
}

);
