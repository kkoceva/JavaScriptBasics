var area;
var array = [7, 1.5, 20];
function calcArea(radius) {
        area = Math.PI * Math.pow(radius, 2);
    return area;
}
    document.getElementById("first-area").innerHTML="r="+ array[0] +" area= "+calcArea(array[0]);
    document.getElementById("second-area").innerHTML="r="+ array[1] + " area= "+calcArea(array[1]);
    document.getElementById("third-area").innerHTML="r="+ array[2] +" area= "+calcArea(array[2]);