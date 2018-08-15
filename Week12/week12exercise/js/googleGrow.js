

function growMe() { 
    var gImg = document.getElementById("hplogo");
    var curWidth = gImg.clientWidth;
    var curHeight = gImg.clientHeight
    gImg.style.width = (curWidth + 1) + "px";
    gImg.style.height = (curHeight + 1) + "px";
    
    setTimeout( "growMe()" , 5000);

}