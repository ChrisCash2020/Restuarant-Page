const pageLoad = {
  nav: `<nav>
      <h1 class="heading">Toulouse Exotica</h1>
      <h3>Home</h3>
      <h3>Menu</h3>
      <h3>Contact us</h3>
    </nav>`,
  main: `<div class="main">
      <div class="message">
        <h1 class="fancy-heading">Come on down for some delicious cuisine</h1>
        <h3>Tasty and affordable!</h3>
        <input type="button" value="Order Now" />
      </div>
      <div class="info">
        <div class="mini-txt">
          <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
          <p>
            1024 Oakwood Ave
            <br />
            San Diego, CA 22434
          </p>
        </div>
        <div class="mini-txt">
          <div class="icon"><i class="far fa-clock"></i></div>
          <p>
            <strong>Mon-Thurs:</strong> 8am-8pm
            <br />
            <strong>Fri-Sun</strong> 8am-11pm
          </p>
        </div>
      </div>
    </div>`,
  get updatePage() {
    var content = document.querySelector('#content');
    return (content.innerHTML = `${this.nav}${this.main}`);
  },
};
export { pageLoad };
