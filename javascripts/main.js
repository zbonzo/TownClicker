var Money = 0;
var Date = 0;
var standardInterval = 1000;
var moneyIncrementInterval = 7;

function incrementMoneyBy(number){
Money = Money + number;
document.getElementById("Money").innerHTML = Money;
};


function incrementDateBy(number){
  var x = 0;
  var y = 0;
  
  x = Math.floor(Date/moneyIncrementInterval)
  Date = Date + number;
  document.getElementById("Date").innerHTML = Date;
  y = Math.floor(Date/moneyIncrementInterval)
  console.log(x)
  console.log(y)
  if (y > x){
    incrementMoneyBy(y-x)
    
  }
}

window.setInterval(function(){
incrementDateBy(1);
},standardInterval);

