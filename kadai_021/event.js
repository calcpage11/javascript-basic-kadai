const get_btn = document.getElementById('btn');
let get_text = document.getElementById('text');

get_btn.addEventListener('click', () => {
  setTimeout(() => {
    get_text.innerText = 'ボタンをクリックしました'
  }, 2000);
});