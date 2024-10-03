// DOM 요소 선택
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

// 고정된 아이디와 비밀번호
const correctUsername = "admin";
const correctPassword = "1234";

// 로그인 버튼 클릭 시 이벤트 처리
loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 동작 방지 (페이지 리로드 방지)

    const username = usernameInput.value.trim(); // 입력된 아이디 값
    const password = passwordInput.value.trim(); // 입력된 비밀번호 값

    // 아무것도 입력되지 않은 경우
    if (username === "" && password === "") {
        errorMessage.textContent = "아이디와 비밀번호를 모두 입력해주세요.";
        errorMessage.style.display = "block"; // 에러 메시지 표시
        successMessage.style.display = "none"; // 성공 메시지 숨김
    }
    // 아이디만 맞고 비밀번호는 틀린 경우
    else if (username === correctUsername && password !== correctPassword) {
        errorMessage.textContent = "비밀번호가 틀렸습니다.";
        errorMessage.style.display = "block"; // 에러 메시지 표시
        successMessage.style.display = "none"; // 성공 메시지 숨김
    }
    // 아이디가 틀린 경우
    else if (username !== correctUsername) {
        errorMessage.textContent = "아이디가 틀렸습니다.";
        errorMessage.style.display = "block"; // 에러 메시지 표시
        successMessage.style.display = "none"; // 성공 메시지 숨김
    }
    // 아이디와 비밀번호 모두 맞은 경우
    else if (username === correctUsername && password === correctPassword) {
        successMessage.textContent = "로그인 성공!";
        successMessage.style.display = "block"; // 성공 메시지 표시
        errorMessage.style.display = "none"; // 에러 메시지 숨김
    }
});
