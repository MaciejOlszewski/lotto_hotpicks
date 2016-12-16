var container = document.getElementById('lucky_numbers');
numbers_picker();

function numbers_picker() {
  var rand = [];
  var i=0;
  while (i<5){
    var temp = Math.floor((Math.random()*59));
    console.log(temp);
    if(rand.find(lookup(),temp) == undefined){
      rand.push();
      console.log("push");
      i++;
    }
    console.log("dupa");
  }
  return(rand);
}

function lookup(x) {
  return x == this;
}

// function numbers_picker() {
//   var rand = [];
//   var i;
//   while (i<5){
//     var x = Math.floor((Math.random()*59));
//     if (rand.find(x){
//       rand.push(x);
//       i++;
//     }
//   }
//   populate(rand);
// }
//
// function populate(numbers) {
//   console.log(numbers);
//   for (var i=0; i<5; i++){
//     container.appendChild(document.createTextNode(numbers[i]));
//   }
// }
