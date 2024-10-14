function customNavbar() {
  return `    
  <nav>
    <div class="widthContainer">
        <h1>Logo</h1>

        <ul>
        <li class="active"><a href="/">Pagrindinis</a></li>
        <li><a href="/store">Parduotuvė</a></li>
        </ul>

        <div class="actionBtnContainer">
        <button>
            <a href="/"><i class="fa-solid fa-cart-shopping"></i></a>
        </button>
        <button>
            <a href="sign-up"><i class="fa-regular fa-user"></i></a>
        </button>

        <button class="mobileMenu">
            <a href="/"><i class="fa-solid fa-bars"></i></a>
        </button>
        </div>

        <div class="miniBasket">
        <h1>Mano krepšelis</h1>

        <div class="basketList">
            <div class="basketItem">
            <div class="imageContainer">
                <img src="/assets/images/pelyte.png" width="90" />
            </div>

            <article>
                <h1>Logitech pelytė</h1>
                <h3>49.99€</h3>

                <div class="countContainer">
                <button><i class="fa-solid fa-square-plus"></i></button>
                <input type="number" value="1" min="1" />
                <button><i class="fa-solid fa-square-minus"></i></button>
                </div>

                <button class="removeItem">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </article>
            </div>
        </div>

        <div class="totalContainer">
            <div class="total">
            <h1>Išviso:</h1>
            <span>49444.99€</span>
            </div>
        </div>

        <div class="buttonContainer">
            <a class="basketBtn" href="/basket">Krepšelis</a>
            <a class="checkOutBtn" href="/checkout">Apmokėjimas</a>
        </div>
        </div>
    </div>
</nav>
    `;
}

function fillNavbars() {
  let navbars = document.querySelectorAll("CustomNav");

  for (const navbar of navbars) {
    navbar.innerHTML = customNavbar();
  }
}

fillNavbars();

function customFooter() {
  return `
       <footer>
      <div class="widthContainer">
        <div class="leftSide">
          <h1 class="big-text">Ar jūs susidomėjote?</h1>

          <a href="">Pirkites dabar<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="rightSide">
          <div class="logo">
            <h1>Logo</h1>
          </div>

          <ul>
            <li><a href="">Parduotuvė</a></li>
            <li><a href="">Apie</a></li>
            <li><a href="">Kontaktai</a></li>
          </ul>

          <div class="socialMedias">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
    `;
}

function fillFooters() {
  let footers = document.querySelectorAll("CustomFooter");
  for (const footer of footers) {
    footer.innerHTML = customFooter();
  }
}

fillFooters();
