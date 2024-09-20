const ab = document.getElementById('ab');

// function show() {
//   ab.style.display = 'block';
// }

// function hide() {
//   ab.style.display = 'none';
// }

// 요약
function showHide(value) {
  ab.style.display = value;
}

const alertBox = document.querySelector('.alert-box')[1];

function showBox(msg) {

  // js 문법
  // document.querySelectorAll('.alert-box')[1].style.display =  'block';
  // document.querySelectorAll('.alert-box')[1].innerHTML = msg;

  // jQuery 문법:
  $('.alert-box').eq(1).css('display', 'block');
  $('.alert-box').eq(1).html(msg);

  // 2개 문법 조합 불가
  // alertBox.style.display = 'block';
  // alertBox.innerHTML = msg;
}

function closeBox() {
  document.querySelectorAll('.alert-box')[1].style.display = 'none';
  // alertBox.style.display = 'none';
}












