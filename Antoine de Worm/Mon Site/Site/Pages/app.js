var myBtn = document.getElementById("myBtn");
var modal1 = document.getElementById("modal1");
var Close = document.getElementById("btnClose");

myBtn.onclick = function() {
    modal1.style.display = "block";
}

Close.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(Event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }   
}
