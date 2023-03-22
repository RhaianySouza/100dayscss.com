function svg(a,x){
    var div = document.getElementsByClassName('statistic')[0].getElementsByTagName('svg')[0];
    var text = '';
    for(var i=0; i<x.length-1;i++){
       text+= '<circle class="'+a+'" cx="'+x[i][0]+'" cy="'+x[i][1]+'" r="3"/>';
       text+= '<line class="'+a+'" x1="'+x[i][0]+'" y1="'+x[i][1]+'" x2="'+x[i+1][0]+'" y2="'+x[i+1][1]+'"/>';
    };
    text+= '<circle class="'+a+'" cx="'+x[i][0]+'" cy="'+x[i][1]+'" r="3"/>';
    div.innerHTML += text;
}
document.addEventListener('DOMContentLoaded', function() {
     svg('x',[[5,65],[52,15],[90,25],[130,15],[170,48],[210,65],[256,25]]);
     svg('y',[[5,80],[52,60],[90,75],[130,65],[170,68],[210,80],[256,75]]);
},false);