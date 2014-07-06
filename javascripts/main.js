var money = 0;
var date = 0;

function incrementmoneyby(number){
money = money + number;
document.getElementById("money").innerHTML = money;
};


function incrementdateby(number){
  var x = 0;
  var y = 0;
  
  x = Math.floor(date/7)
  date = date + number;
  document.getElementByID("date").innerHTML = date;
  y = Math.floor(date/7)
  console.log(x)
  console.log(y)
  
}

window.setInterval(function(){
incrementdateby(1);
},1000);

