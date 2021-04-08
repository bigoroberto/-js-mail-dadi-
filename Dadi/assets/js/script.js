/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. */
/* Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//mio lancio
var my_Launch = Math.floor(Math.random() * 6) + 1;

//lancio pc
var pc_Launch = Math.floor(Math.random()* 6) +1;

/*  Detto la condizione :
SE:  il mio lancio è minore del lancio del pc HO PERSO
OPPURE SE: il mio lancio è uguale al lancio del pc HO PAREGGIATO 
ALTRIMENTI: HO VINTO
 */

if(my_Launch < pc_Launch){
  document.getElementById("msg-auto").innerHTML = "Il numero per te generato è "+ my_Launch + "<br>" + "Il numero generato per il pc è " + pc_Launch + "<br>" +"HAI PERSO. <br> Ritenta, sarai più fortunato"
}else if(my_Launch == pc_Launch){
  document.getElementById("msg-auto").innerHTML = "Il numero per te generato è "+ my_Launch + "<br>" + "Il numero generato per il pc è " + pc_Launch + "<br>" +"HAI PAREGGIATO CON IL PC."
}else{
  document.getElementById("msg-auto").innerHTML = "Il numero per te generato è "+ my_Launch + "<br>" + "Il numero generato per il pc è " + pc_Launch + "<br>" +"HAI VINTO"
}
