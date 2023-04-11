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

document.addEventListener('DOMContentLoaded', function() {
point();
},false);