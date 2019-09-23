function layoutDrawerOpen() {
    document.getElementById("drawer").style.visibility = "visible";
    document.getElementById("drawerbuttonopen").style.visibility = "hidden";
}

function layoutDrawerClose() {
    document.getElementById("drawer").style.visibility = "hidden";
    document.getElementById("drawerbuttonopen").style.visibility = "visible";
}

function changeFood() {
    if (document.getElementById("foodText").innerHTML === "Græsk farsbrød") {
        document.getElementById("foodText").innerHTML = "Torsketårn";
        document.getElementById("foodImage").src = "images/fish.png";
    } else {
        document.getElementById("foodText").innerHTML = "Græsk farsbrød";
        document.getElementById("foodImage").src = "images/meatloaf.png";
    }
}