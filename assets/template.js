//Link Template to website pages
// Load navbar
var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    document.getElementById("navbar-container").innerHTML = this.responseText;
}
};
xhttp1.open("GET", "/istabmprototype/templates/navbar.html", true);
xhttp1.send();
// Load footer
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    document.getElementById("footer-container").innerHTML = this.responseText;
}
};
xhttp2.open("GET", "/istabmprototype/templates/footer.html", true);
xhttp2.send();