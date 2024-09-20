// div 태그 생성
let divTag = document.createElement('div');
let textNode = document.createTextNode('텍스트노드')

divTag.className = 'alert';
divTag.innerHTML = '<b>강조</b>생성된 div 태그임';

document.body.append(divTag);
// append : 맨뒤(자식)에 추가, HTML상에 표시되게 해줌

const ol = document.querySelector('#ol');

ol.before('이전');
ol.after('이후');
// 서버에 ol 태그 위에 '이전', ol 태그 밑에 '이후' 표시됨

const liTag = document.createElement('li');
// liTag 생성!
liTag.innerHTML = 'prepend';
ol.prepend(liTag);
// ol 태그의 1번째 자식으로 들어감

const liTag2 = document.createElement('li');
liTag2.innerHTML = 'append';
ol.append(liTag2);
// ol 태그의 마지막 자식으로 들어감 but 앞의 변수 (prepend)사라짐
// --> 앞의 변수도 같이 뜨려면 2개의 변수 따로 생성  ex. liTag, liTag2

const div = document.querySelector('#div');

divTag.insertAdjacentHTML('beforebegin', '<p>앞에</p>');
divTag.insertAdjacentHTML('afterbegin','<p>해당 태그 첫번째</p>');
divTag.insertAdjacentHTML('beforeend', '<p>해당 태그 첫번째 자식</p>'); 
divTag.insertAdjacentHTML('afterend', '<p>해당 태그 마지막 자식</p>');

// 태그 지우기
// setTimeout(콜백함수, 시간);
setTimeout(() => {
  divTag.remove();
}, 3000);

// 이동 - 기본적으로 태그를 삽입할 때 기존 태그를 삭제 후 해당 위치에 삽입됨
second.after(first);

// 태그 복사
// true : 자손들까지 복사가 됨
// false : 해당 태그만 복사가 됨
const ol2 = ol.cloneNode(false);
document.body.append(ol2);









