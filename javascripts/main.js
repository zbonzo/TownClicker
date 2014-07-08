var intMoney = 0;
var intDate = 0;
var standardInterval = 1000;
var moneyIncrementInterval = 7;
var tool = "none";

var townDB = indexedDB.open('buildings', 1);
var townbuilding;

townDB.onsuccess = function(evt){
    townbuilding = evt.target.result;
}


if (localStorage.getItem("intMoney")){
    
    intMoney = parseInt(localStorage.getItem("intMoney"));
    document.getElementById("intMoney").innerHTML = intMoney;
    intDate = parseInt(localStorage.getItem("intDate"));
    document.getElementById("intDate").innerHTML = intDate;
    
    //This is commented out until I figure out what I want to do with it.
    //standardInterval = localStorage.getItem("standardInterval");
    //moneyIncrementInterval = localStorage.getItem("moneyIncrementInterval");
    
} 

function setTool(toolName){
    tool = toolName;
    document.getElementById("tool").innerHTML = tool;
    
}

function useTool(x,y){
    console.log(x)
    console.log(y)
    console.log(tool)
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

window.setInterval(function(){
    localStorage.clear();
  window.location.reload(true);
},600000);
