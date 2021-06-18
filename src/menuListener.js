import * as pg from './pageLoad.js';
import styles from './css/menu.css';
function menuLoad() {
  let navLinks = document.querySelectorAll('nav h3');
  navLinks[1].addEventListener('click', (e) => {
    e.preventDefault();
    pg.mainFunc(`    <div class="main">
          <h1 class="title">Menu <img src="./chef.png" alt="" /></h1>
          <div class="container">
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/hamburger.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Hamburger:</p>
                    <p class="price">$2.49</p>
                  </div>
                  <p class="desc">
                    Buns, patty, tomato, onions, lettuce, and our secret family
                    recipe.
                  </p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/cheeseburger.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Cheeseburger:</p>
                    <p class="price">$2.99</p>
                  </div>
                  <p class="desc">Similar to our hamburger, but with cheese.</p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/double-cheeseburger.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Double Cheeseburger:</p>
                    <p class="price">$3.49</p>
                  </div>
                  <p class="desc">
                    Similar to our cheeseburger, but with an extra patty.
                  </p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/steak.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Steak:</p>
                    <p class="price">$11.99</p>
                  </div>
                  <p class="desc">A juicy steak made just how you like it.</p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/ribs.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>BBQ Ribs:</p>
                    <p class="price">$8.99</p>
                  </div>
                  <p class="desc">Barbecue ribs with your choice of a add-ons.</p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/grilled-cheese.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Grilled Cheese Sandwich:</p>
                    <p class="price">$4.99</p>
                  </div>
                  <p class="desc">
                    A toasted and grilled cheese sandwich, dipped in our special
                    sauce.
                  </p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/caesar-salad.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>Caesar Salad:</p>
                    <p class="price">$7.99</p>
                  </div>
                  <p class="desc">
                    Your typical caesar salad that comes with your choice of
                    dressings.
                  </p>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="food-item">
                <div class="food-pic">
                  <img src="./img/french-fries.png" alt="" />
                </div>
                <div class="item-text">
                  <div class="food-title">
                    <p>French Fries:</p>
                    <p class="price">$1.99</p>
                  </div>
                  <p class="desc">
                    Sometimes you don't want to eat your burger alone, why not add
                    some french fries?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`);
  });
}
export default menuLoad;
