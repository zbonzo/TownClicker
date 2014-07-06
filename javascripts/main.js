var clicks = 0;
var date = 0;

function incrementmoneyby(number){
money = money + number;
document.getElementById("money").innerHTML = money;
};


function incrementdateby(number){
  x = floor(date/7)
  date = date + number;
  document.getElementByID("date").innerHTML = date;
  y = floor(date/7)
  console.log(x)
  console.log(y)
  
}

window.setInterval(function(){
incrementdateby(1);
},1000);

