function timerFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("clock").value =
        "" + hour + ":" + min + ":" + sec;
}
setInterval('timerFunc()', 1000);

