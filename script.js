const book = document.getElementById('book');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');

openBtn.onclick = () => {
  book.classList.add('open');
};

closeBtn.onclick = () => {
  book.classList.remove('open');
};

let current = 0;
const pages = document.querySelectorAll('.page');

nextBtn.onclick = () => {
  pages[current].classList.remove('active');
  current++;

  if (current >= pages.length) current = 0;

  pages[current].classList.add('active');
};
