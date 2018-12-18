var minNum = 1;
var maxNum = 6;
var randomNum =function(){
   return Math.floor(Math.random() * (+maxNum - +minNum)) + +minNum;
}
var totalPoints =
function rollDiceb() {
 var random = randomNum();
 if (random != 1) {
   $("#p1points").text(random);
 } else {
   $("#p2points").text(random);
 }
};
