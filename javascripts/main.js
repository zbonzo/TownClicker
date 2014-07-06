var Money = 0;
var date = 0;

function incrementMoneyBy(number){
Money = Money + number;
document.getElementById("Money").innerHTML = Money;
};


function incrementDateBy(number){
  var x = 0;
  var y = 0;
  
  x = Math.floor(Date/7)
  Date = Date + number;
  document.getElementByID("Date").innerHTML = date;
  y = Math.floor(date/7)
  console.log(x)
  console.log(y)
  
}

window.setInterval(function(){
incrementDateBy(1);
},1000);

