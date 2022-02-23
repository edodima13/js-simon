//visualizzare cinque numeri casuali ``
//creare un array vuoto
let numeriCasuali = [];
let numeriUtente = [];
  //fare una funzione che generi numeri casuali
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//dichiarare il range dei numeri casuali
const min = 1;
const max = 10;
  
//inserire i numeri all'interno di un array vuoto

do{
  numeri = numeriCasuali.push(getRandomInt(min,max))
}
while(numeriCasuali.length < 5)
//console.log( numeriCasuali)

//inserire i numeri dell'array all'interno di un alert
alert(`memorizza questi cinque numeri: ${numeriCasuali.join(", ")}`)

//generare un timer per inserire i numeri 
setTimeout(() => {
  //alla fine del timer deve inserire i numeri con dei prompt uno alla volta
  do{

    const num = parseInt(prompt(`inserisci un numero da ${ min } a ${ max }`))
    numeriUtente.push( num )

  } while(numeriUtente.length < numeriCasuali.length)

}, 2000);
 
//comunicare quali e quanti numeri sono giusti






/*

let numberAlert1 = getRandomInt( 1, 10 )
console.log( numberAlert )

const messaggio = alert(numberAlert)*/