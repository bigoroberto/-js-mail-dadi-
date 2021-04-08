/* chiedere una email all'utente */

var infoEmail = prompt("La tua email?");

/* se l'email inserita dall'utente termina con le condizioni riportate sotto si procede alla condizione all'intero altrimenti da l'errore tramite l'else finale  */

if(infoEmail.endsWith("@gmail.com")|| infoEmail.endsWith("@hotmail.it")||infoEmail.endsWith("@virgilio.it")||infoEmail.endsWith("@gmail.com")||infoEmail.endsWith("@libero.it")){

  /* qui c'è elenco delle email dentro l'array */

  var arrayEmail = [
    "roberto@gmail.com",
    "romina@gmail.com",
    "pino@gmail.com",
    "giacomo@gmail.com",
    "gianni@gmail.com",
  ];
  
  /* flag di default deve essere falso */

  var email_to_found = false;
  
  
  for(var i = 0; i<arrayEmail.length; i++){
    var searchEmail = arrayEmail[i];
    if(searchEmail === infoEmail){
      email_to_found = true;
      break;
    }
  }
  
  /* SE l'email è stata trovata sopra nel CICLO verrà autorizzata ad entrare ALTRIMENTI no */
  if(email_to_found){
    document.getElementById("msg_auto").innerHTML = "l'email da lei inserita '"  + infoEmail  + "' è autorizzata ad accedere."
  }else(
    document.getElementById("msg_auto").innerHTML = "l'email da lei inserita '" + infoEmail + "' non è autorizzata ad accedere."
  )

}else{
  alert("Error 254.51.021.02.");
}
