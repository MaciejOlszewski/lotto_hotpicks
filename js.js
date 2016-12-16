var container = document.getElementById('lucky_numbers');
numbers_picker();

function numbers_picker() {
  var rand = [];
  var i=0;
  while (i<5){
    var temp = Math.floor((Math.random()*59));
    if(rand.find(lookup, temp) == undefined){
      rand.push(temp);
      i++;
    }
  }
  rand.sort(sortit);
  console.log(rand);
  return(rand);
}

function lookup(x) {
  return x == this;
}

function sortit(a, b){
  return a-b
};


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
