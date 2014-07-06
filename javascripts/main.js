var intMoney = 0;
var intDate = 0;
var standardInterval = 1000;
var moneyIncrementInterval = 7;

function incrementMoneyBy(number){
intMoney = intMoney + number;
document.getElementById("intMoney").innerHTML = intMoney;
};


function incrementDateBy(number){
  var x = 0;
  var y = 0;
  
  x = Math.floor(intDate/moneyIncrementInterval)
  intDate = intDate + number;
  document.getElementById("intDate").innerHTML = intDate;
  y = Math.floor(intDate/moneyIncrementInterval)

  if (y > x){
    incrementMoneyBy(y-x)
    
  }
}

window.setInterval(function(){
incrementDateBy(1);
},standardInterval);

