function dropdown(text, link) {
    if (document.getElementById(text).style.display === "block") {
        document.getElementById(text).style.display = "none";
        // document.getElementById(link).style.backgroundColor = "#aaa"; //This breaks the hover effect
        // document.getElementById(link).style.color = "#000"; //This breaks the hover effect
        document.getElementById(link).classList.remove("active"); // This doesn't break the hover effect

    } else {
        document.getElementById(text).style.display = "block";
        // document.getElementById(link).style.backgroundColor = "#555"; //This breaks the hover effect
        // document.getElementById(link).style.color = "white"; //This breaks the hover effect
        document.getElementById(link).classList.add("active"); // This doesn't break the hover effect
    }
}

function spin() {
    if (document.getElementById("pepe").classList.contains("rotate"))
        document.getElementById("pepe").classList.remove("rotate");
    else
        document.getElementById("pepe").classList.add("rotate");
}

function clickMe() {
    document.getElementById("music").src += "?autoplay=1"; // Works in Firefox. Doesn't work in Chrome
    setInterval(changeColor, 100);
}

function changeColor() {
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        elements[i].style.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        elements[i].style.borderColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        // elements[i].style.transform += "rotate(5deg)"
    }
}


