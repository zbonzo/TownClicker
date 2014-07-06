var intMoney = 0;
var intDate = 0;
var standardInterval = 1000;
var moneyIncrementInterval = 7;

if (localStorage.getItem("intMoney")){
    /*
    intMoney = localStorage.getItem("intMoney");
    intDate = localStorage.getItem("intDate");
    standardInterval = localStorage.getItem("standardInterval");
    moneyIncrementInterval = localStorage.getItem("moneyIncrementInterval");
    */
} 


function incrementMoneyBy(number){
  intMoney = intMoney + number;
  document.getElementById("intMoney").innerHTML = intMoney;
  localStorage.setItem("intMoney", intMoney)
}


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
  localStorage.setItem("intDate", intDate)
}

function saveToLocalStorage(){
  localStorage.setItem("intMoney", intMoney)
  localStorage.setItem("intDate", intDate)
  localStorage.setItem("standardInterval", standardInterval)
  localStorage.setItem("moneyIncrementInterval", moneyIncrementInterval)
}

window.setInterval(function(){
  incrementDateBy(1);
},standardInterval);

