const headerContainer = document.getElementById("header");
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    headerContainer.innerHTML = this.responseText;
    }
};
xhttp.open("GET", "menu.html", true);
xhttp.send();