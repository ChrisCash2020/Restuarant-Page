import homeStyles from './css/home.css';
import homeImg from './img/restaurant.jpg';
import menuStyles from './css/menu.css';
import contactStyles from './css/contact.css';
import { home } from './homeBtn';
import { menu } from './menuBtn';
import { contact } from './contactBtn';
let content = document.querySelector('#content');
let nav = `<nav>
      <div class="heading-div">
      <h1 class="heading">Toulouse Exotica</h1>
      <button><i class="fas fa-bars"></i></button>
      </div>
      <div class="links links-alter" >
      <h3 class="active" >Home</h3>
      <h3 class="active" >Menu</h3>
      <h3 class="active" >Contact us</h3>
      </div>
    </nav>`;
content.innerHTML = `${nav}${home}${menu}${contact}`;
let wasClicked = false;
let body = document.querySelector('body');
body.style.backgroundImage = `linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('${homeImg}')`;
if (content.innerHTML != '') {
  const btns = document.querySelectorAll('.links h3');
  const tabs = document.querySelectorAll('.tab');
  btns.forEach((btn, btn_i) => {
    btn.addEventListener('click', () => {
      wasClicked = true;
      console.log(wasClicked);
      btns.forEach((btn) => {
        btn.classList.remove('active');
        btn.classList.remove('color-change');
        if (btn.textContent === 'Home') {
          body.style.backgroundImage = `linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('${homeImg}')`;
          body.style.backgroundColor = 'linen';
        }
      });
      btn.classList.add('active');
      btn.classList.add('color-change');
      if (btn.textContent != 'Home') {
        body.style.backgroundImage = `none`;
      }
      tabs.forEach((content, content_i) => {
        if (content_i == btn_i) {
          content.style.display = 'flex';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
  let navBtn = document.querySelector('button');
  let links = document.querySelector('.links');
  let nav = document.querySelector('nav');
  navBtn.addEventListener('click', (e) => {
    links.classList.toggle('links-alter');
    nav.classList.toggle('height');
    tabs[0].classList.toggle('min-height');
  });
}
