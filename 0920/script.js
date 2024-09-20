// 해당요소.addEventListener('이벤트종류', 콜백함수)
function showModal() {
  alert('모달창 나타남');
}

const btn = document.querySelector('.btn');
// btn.addEventListener('click', showModal);
// btn.removeEventListener('click', showModal);

btn.addEventListener('click', () => {
  alert('알림창');
});

// 함수 내용은 동일하지만 다른 객체이므로 삭제 안됨
btn.addEventListener('click', () => {
  alert('알림창');
});

// 이벤트 객체
btn.addEventListener('click', (e) => {
  console.log(e.type);    // e.type은 이벤트 종류
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e);
});

















