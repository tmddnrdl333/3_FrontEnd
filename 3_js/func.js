
// 1. 함수는 기본적으로 return을 무조건 한다.
// 아무것도 안주면 undefined를 준다.
// 2. js는 우선 선언부를 모두 맨 위로 끌어올리고 위에서 아래로 읽으면서 실행된다.
// 아래와 같은 경우도 let sum; 만 끌어올려지고 원래 자리에 sum = function() 이런식으로 남게된다.

// 선언적 함수
// function 함수이름(매개변수리스트) { }
function small(x, y) {
    return x < y ? x : y;
}

// 함수 표현식
// 변수에 함수를 저장
let sum = function () {
    let res = 0;
    for (let i = 1; i <= 10; i++) {
        res += i;
    }
    return res;
};

console.log(small(10,20));
console.log(sum());