var bottoneGenera = document.getElementById("active_button");
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
  } else if (etaUtente == "Over 65") {
    prezzoFinale = prezzoOverBiglietto.toFixed(2);
  } else {
    prezzoFinale = prezzoStandardBiglietto.toFixed(2);
  }

  document.getElementById("ticket_price").innerHTML = prezzoFinale + " €";

  // scrivo a video le informazione che ha inserito l'utente
  var nomeUtenteValore = document.getElementById("name_value").innerHTML = nomeUtente;
}

);
