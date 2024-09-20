// // js에서 산술연산은 안전함
// console.log(10 / 0)
// console.log(typeof Infinity)  // 특수 숫자 값

// let msg = "js";

// console.log("hello" + msg)
// console.log('hello' + msg)
// console.log(`hello ${msg}`)

// let a = null    // 비어있다, 알 수 없음

// let b;
// console.log(b);

// // 알림창(모달)
// alert('aaa')
// console.log('alert 실')

// let bbb = confirm('예 아니오')
// console.log(bbb)

// // 논리연산자 - &&, ||, !
// console.log(1 == "1");     // 타입 구분 없이 비교 -> 문제생길 가능성 up 
// console.log(1 === "1");   // 타입 구분해서 비교 (엄격하게 비교하여 나중에 문제될 가능성 낮아짐)

// console.log(1 != "1"); 
// console.log(1 !== "1"); 


// 조건문
// if (조건식) {
//   참일때
// } else if {
//   조건식 2 참
// } else {
// } 모두 거짓

// let age = Number( prompt('나이입력') );
// if (age > 20) {
//   console.log('성인')
// } else {
//   console.log('청소년')
// }
// // 콘솔창에 띄우려면 console.log 사용, 알림창(모달창)으로 띄우려면 alert 사용

// let result = age >= 20 ? "성인" : "청소년";       // 삼항연산자

// switch-case문 - 자료형 (숫자 / 문자) 일치해야 함
// switch (a) {
//   case 1:

//     break;
//   case 2:

//     break;
//   default:
// }

// 반복문
// while(조건식) {
//   반복 실행할 코드
// }

// for(초기값; 조건식; 증감식) {
//   반복실행할코드
// }

for(let i=1; i<=10; i++) {
  console.log(i);
}











