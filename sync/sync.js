// 동기 처리 예제

console.log("1. 작업 시작"); // 첫 번째 작업

// 시간이 오래 걸리는 작업 (동기적으로 실행)
function longTask() {
    const start = Date.now();
    // 3초 동안 CPU 점유 (blocking)
    while (Date.now() - start < 3000) {}
    console.log("2. 긴 작업 완료"); // 두 번째 작업
}

longTask();

console.log("3. 작업 종료"); // 세 번째 작업

// ####################################

// 비동기 처리 예제

console.log("1. 작업 시작"); // 첫 번째 작업

// 비동기 작업 (3초 후 실행)
setTimeout(() => {
    console.log("2. 비동기 작업 완료"); // 두 번째 작업 (비동기)
}, 3000);

console.log("3. 작업 종료"); // 세 번째 작업

// ####################################

// Promise 사용 예제

console.log("1. 작업 시작");

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2. 비동기 작업 완료");
        }, 3000);
    });
}

asyncTask().then((message) => {
    console.log(message); // 비동기 작업 완료 메시지 출력
});

console.log("3. 작업 종료");

// ####################################

// async/await 사용 예제

console.log("1. 작업 시작");

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2. 비동기 작업 완료");
        }, 3000);
    });
}

async function runTask() {
    const message = await asyncTask(); // asyncTask가 완료될 때까지 기다림
    console.log(message); // 비동기 작업 완료 메시지 출력
}

runTask();

console.log("3. 작업 종료");

// #### 각 방식의 한계점들 ####

// 동기 처리에서의 블로킹 문제

console.log("1. 작업 시작"); // 첫 번째 작업

// 시간이 오래 걸리는 작업 (동기적으로 실행)
function longTask() {
    const start = Date.now();
    // 5초 동안 CPU 점유 (blocking)
    while (Date.now() - start < 5000) {}
    console.log("2. 긴 작업 완료"); // 두 번째 작업
}

// 이 작업이 블로킹되어 아래 로그는 5초 후에야 실행됨
longTask();

console.log("3. 작업 종료"); // 세 번째 작업 (5초 후 실행)

// ####################################

// 비동기 처리에서의 콜백 지옥 문제

console.log("1. 작업 시작"); // 첫 번째 작업

// 첫 번째 비동기 작업
setTimeout(() => {
    console.log("2. 첫 번째 비동기 작업 완료"); // 두 번째 작업

    // 두 번째 비동기 작업 (첫 번째 작업 후에 실행)
    setTimeout(() => {
        console.log("3. 두 번째 비동기 작업 완료"); // 세 번째 작업

        // 세 번째 비동기 작업 (두 번째 작업 후에 실행)
        setTimeout(() => {
            console.log("4. 세 번째 비동기 작업 완료"); // 네 번째 작업
        }, 1000);
    }, 2000);
}, 1000);

console.log("5. 작업 종료"); // 비동기 작업 대기 중이므로 먼저 실행

// ####################################

// Promise 사용에서의 긴 체인 문제

console.log("1. 작업 시작");

function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("2. 첫 번째 비동기 작업 완료"), 1000);
    });
}

function asyncTask2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("3. 두 번째 비동기 작업 완료"), 2000);
    });
}

function asyncTask3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("4. 세 번째 비동기 작업 완료"), 1000);
    });
}

// 체인이 길어지는 문제
asyncTask1()
    .then((message) => {
        console.log(message); // 첫 번째 비동기 작업 완료
        return asyncTask2();
    })
    .then((message) => {
        console.log(message); // 두 번째 비동기 작업 완료
        return asyncTask3();
    })
    .then((message) => {
        console.log(message); // 세 번째 비동기 작업 완료
    });

console.log("5. 작업 종료");

// ####################################

// async/await에서의 에러 처리 문제

console.log("1. 작업 시작");

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("에러 발생!"), 2000); // 에러 발생
    });
}

async function runTask() {
    try {
        const message = await asyncTask();
        console.log(message); // 비동기 작업 완료 메시지 출력
    } catch (error) {
        console.log("에러 처리:", error); // 에러 발생 시 처리
    }
}

runTask();

console.log("2. 작업 종료");
