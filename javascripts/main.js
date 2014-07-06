var clicks = 0;

function incrementby(number){
clicks = clicks + number;
document.getElementById("clicks").innerHTML = clicks;
};


window.setInterval(function(){
incrementby(1);
},1000);

