const hamBtn = document.querySelector('.navbar-toggler');

hamBtn.addEventListener('click', () => {
  // js코드
  // document.querySelector('.list.group').classList.toggle('show');

  // jQuery 문법
  $('.list-group').toggleClass('visi')
});

document.querySelector('#write').addEventListener('click', () => {
  document.querySelector('.black-bg').classList.add('visi');
});

$('#close').on('click', () => {
  $('.black-bg').removeClass('visi');
});

// 다크모드
const modeBtn = document.querySelector('#mode');

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if(modeBtn.value == "다크모드") {
    modeBtn.value = "화이트모드"
  } else {
    modeBtn.value = "다크모드"
  }
})




















