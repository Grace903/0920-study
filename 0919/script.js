let user = {
  name: 'hong',
  age : 20
};

user.hello = function() {
  console.log('hello');
};
// user.xxx = yyy()  --> xxx를 yyy로 수정(등록)

user.hello();

function hi() {
  console.log('hi')
}

user.hello = hi;
user.hello();

user = {
  name: 'hong',
  msg() {   //msg: function() { 에서 : function 생략된 형태
    console.log(this.name);
  },
  age : 20,
};

let kim = user;
console.log(user);
console.log(kim);

kim.msg();

kim = {
  name: 'kim',
  age: 20
}

let park = {
  name: 'park',
  age: 30
}

function himsg() {
  console.log(this.name + "님 안녕하세요");
}

kim.fn = himsg;
park.fn = himsg;

kim.fn();
park.fn();

function createUser(name, age) {
  return user;
}

function User(name, age) {
  this.name = name;
  this.age = age;
  
  this.hi = function() {
    console.log('${this.name} 안녕');
  }
}

let lee = new User('lee', 40);
console.log(lee)

// document.body.style.background = 'red'















