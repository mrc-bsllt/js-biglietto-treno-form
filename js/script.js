var bottoneGenera = document.getElementById("active_button");
var bottoneAnnulla = document.getElementById("cancel_button");
var biglietto = document.getElementById("ticket");

// bottone genera
bottoneGenera.addEventListener("click",


function() {

  // estraggo le informazioni inserite dall'utente
  var nomeUtente = document.getElementById("user_name").value;
  var kmUtente = parseInt(document.getElementById("user_km").value);
  var etaUtente = document.getElementById("user_age").value;

  // calcolo i possibili prezzi dei biglietti
  var prezzoStandardBiglietto = kmUtente * 0.21;
  var prezzoMinorenniBiglietto = prezzoStandardBiglietto - (prezzoStandardBiglietto * 0.2);
  var prezzoOverBiglietto = prezzoStandardBiglietto - (prezzoStandardBiglietto * 0.4);
  var prezzoFinale = "";

  if (etaUtente == "Minorenne") {
    prezzoFinale = prezzoMinorenniBiglietto.toFixed(2);
    document.getElementById("offer").innerHTML = "Sconto del 20%";
  } else if (etaUtente == "Over 65") {
    prezzoFinale = prezzoOverBiglietto.toFixed(2);
    document.getElementById("offer").innerHTML = "Sconto del 40%";
  } else {
    prezzoFinale = prezzoStandardBiglietto.toFixed(2);
    document.getElementById("offer").innerHTML = "Biglietto Standard";
  }

  document.getElementById("ticket_price").innerHTML = prezzoFinale + " €";

  // scrivo a video le informazione che ha inserito l'utente
  var nomeUtenteValore = document.getElementById("name_value").innerHTML = nomeUtente;

  // informazioni di viaggio
  // numero carrozza
  var numeroCarrozza = Math.floor((Math.random() * 9 ) + 1);
  document.getElementById("carriage_number").innerHTML = numeroCarrozza;
  // codice CP
  var numeroCp = Math.floor((Math.random() * 10000 ) + 90000);
  document.getElementById("cp_number").innerHTML = numeroCp;

  // apparizione sezione ticket
  biglietto.className = "show";

}
);

// bottone Annulla
bottoneAnnulla.addEventListener("click",
function() {

  // sparizione del Biglietto e dei valori inseriti
  biglietto.className = "hidden";
  document.getElementById("user_name").value = "";
  document.getElementById("user_km").value = "";
  document.getElementById("user_age").value = "";
  document.getElementById("name_value").innerHTML = "";
  document.getElementById("offer").innerHTML = "";
  document.getElementById("carriage_number").innerHTML = "";
  document.getElementById("cp_number").innerHTML = "";
  document.getElementById("ticket_price").innerHTML = "";
}
);
