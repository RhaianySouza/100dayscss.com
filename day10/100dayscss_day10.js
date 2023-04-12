function point(){
    var a = document.getElementsByClassName('spinner')[0];
    var text = '';
    var x = 100; var y = 15;
    for(var i=0; i<60; i++){
        x += 9.5 * Math.cos(6.28/60*i);
        y += 9.5 * Math.sin(6.28/60*i);
        text += "<circle cx='"+x+"' cy='"+y+"' r='1'></circle>";
    }
    a.innerHTML += text;
}
function clock(){
    var day = new Date(Date.now()).toLocaleString('en-US', {day: '2-digit'});      
    var mon = new Date(Date.now()).toLocaleString('en-US', {month: 'short'});    
    var year = new Date(Date.now()).getFullYear();
    var hour = new Date(Date.now()).getHours();
    var minute = new Date(Date.now()).getMinutes();
    var week = new Date(Date.now()).toLocaleString('en-US', {weekday:'short'});

    document.getElementById('clock').innerHTML = `${hour}:${minute}`;
    document.getElementById('date').innerHTML = `${week} ${day} ${mon} ${year}`;
    
}
document.addEventListener('DOMContentLoaded', function() {
point();
setInterval(clock(),60000);
},false);