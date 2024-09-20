// 함수
// function 함수이름() {
//   함수 실행 코드
// }

let name = "홍길동";

function msg() {
  let message = "안녕하세요";
  let name = "유재석"
  console.log(name + ' ' +message);
}

msg();


// 함수 선언문
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 20));

// 함수 표현식
let mul = function(num1, num2) {
  
}

let age = 20;

if(age<20) {
  function msg() {
    console.log('안녕하세요')
  }
} else {
  msg = function() {
    console.log('안녕')
  }
}

msg();

// 콜백 함수   - 확인,취소
function yesOrNo(yes, no) {
  if(confirm('예 아니오 선택'))
    yes();
  else
    no();
}
function ok() {
  console.log("오케이")
}
function cancel() {
  console.log("노")
}

// yesOrNo(ok, cancel);

// 화살표 함수 (파이썬, 자바 - 람다)
let sum = (num1, num2) => {
  return num1 + num2;
}

console.log( sum(10, 20) );

// 객체(Object) - 파이썬(딕셔너리), 자바(map)
let user = {
  'name' : '홍길동',
  'age' : 20,
  'math score' : 90
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['math score']);

user.name = "유재석"
console.log(user);

let str = 'name';
console.log(user[str])

str = 'lang';

// let study = {
//   [str]
// }

console.log(study);

function mkObject(name, age) {
  return {
    name,
    age
  };
}

let hong = mkObject('홍길동', 20);
console.log(hong);

console.log('name' in hong);

for(let key in hong) {
  console.log(key, hong[key]);
}







