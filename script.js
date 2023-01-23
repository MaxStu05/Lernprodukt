var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var ip = data.ip;
        document.getElementById("ip").innerHTML = ip;
    }
};
xhr.send();

function DM() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
