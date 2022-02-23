//visualizzare cinque numeri casuali ``
//creare un array vuoto
let numeriCasuali = [];
let numeriUtente = [];
let numeriCorretti = [];
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
  numeri = getRandomInt(min,max)

  if(numeriCasuali.includes(numeri) === false){
    numeriCasuali.push(numeri)
  }
  
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
    //comunicare quali e quanti numeri sono giusti
    if(numeriCasuali.includes(num) && !numeriCorretti.includes(num)){
      numeriCorretti.push(num)
    }

  } while(numeriUtente.length < numeriCasuali.length)

}, 30000);


console.log(numeriCorretti)
