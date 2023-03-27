function cont(a,x){
    var i = 0;
    var interval = setInterval(function(){
        if(i<a){i+=1; x.innerHTML = i;}
        else{clearInterval(interval)}
    },5)
}
document.addEventListener('DOMContentLoaded', function() {
    cont(523,document.getElementsByClassName("status")[0].getElementsByTagName('div')[0].getElementsByTagName('h3')[0]);
    cont(1387,document.getElementsByClassName("status")[0].getElementsByTagName('div')[1].getElementsByTagName('h3')[0]);
    cont(146,document.getElementsByClassName("status")[0].getElementsByTagName('div')[2].getElementsByTagName('h3')[0]);
},false);