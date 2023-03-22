function menuanimation(){
    document.getElementById("menu").classList.toggle("active");
    for(var i=0; i<3; i++){
        document.getElementById("menu").getElementsByTagName('div')[i].classList.remove("animationNone");

    };
};