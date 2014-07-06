var Money = 0;
var Date = 0;

function incrementMoneyBy(number){
Money = Money + number;
document.getElementById("Money").innerHTML = Money;
};


function incrementDateBy(number){
  var x = 0;
  var y = 0;
  
  x = Math.floor(Date/7)
  Date = Date + number;
  document.getElementById("Date").innerHTML = Date;
  y = Math.floor(Date/7)
  console.log(x)
  console.log(y)
  if (y > x){
    incrementMoneyBy(y-x)
    
  }
}

window.setInterval(function(){
incrementDateBy(1);
},1000);

