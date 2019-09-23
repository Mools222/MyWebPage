function layoutDrawerOpen() {
    document.getElementById("drawer").style.visibility = "visible";
    document.getElementById("drawerbuttonopen").style.visibility = "hidden";
    document.getElementById("drawer").style.height = document.body.clientHeight + "px";
}

function layoutDrawerClose() {
    document.getElementById("drawer").style.visibility = "hidden";
    document.getElementById("drawerbuttonopen").style.visibility = "visible";
}

function changeFood() {
    if (document.getElementById("foodText").innerHTML === "Græsk farsbrød") {
        document.getElementById("foodText").innerHTML = "Torsketårn";
        document.getElementById("foodImage").src = "imagesXD/fish.png";
    } else {
        document.getElementById("foodText").innerHTML = "Græsk farsbrød";
        document.getElementById("foodImage").src = "imagesXD/meatloaf.png";
    }
}