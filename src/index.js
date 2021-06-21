import homeStyles from './css/home.css';
import menuStyles from './css/menu.css';
import contactStyles from './css/contact.css';
import { home } from './homeBtn';
import { menu } from './menuBtn';
import { contact } from './contactBtn';

let content = document.querySelector('#content');
let nav = `<nav>
      <h1 class="heading">Toulouse Exotica</h1>
      <h3 class="active" >Home</h3>
      <h3 class="active" >Menu</h3>
      <h3 class="active" >Contact us</h3>
    </nav>`;
content.innerHTML = `${nav}${home}${menu}${contact}`;
let wasClicked = false;
if (content.innerHTML != '') {
  const btns = document.querySelectorAll('nav h3');
  const tabs = document.querySelectorAll('.tab');
  btns.forEach((btn, btn_i) => {
    btn.addEventListener('click', () => {
      wasClicked = true;
      console.log(wasClicked);
      btns.forEach((btn) => {
        btn.classList.remove('active');
        btn.classList.remove('color-change');
      });
      btn.classList.add('active');
      btn.classList.add('color-change');

      tabs.forEach((content, content_i) => {
        if (content_i == btn_i) {
          content.style.display = 'flex';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
}
