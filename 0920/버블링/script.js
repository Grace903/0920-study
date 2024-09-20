document.querySelector('a').addEventListener('click', (e) => {
  e.stopPropagation();  // 버블링 막기
  e.preventDefault();   // 기본동작 막기
  alert('a태그');
})































