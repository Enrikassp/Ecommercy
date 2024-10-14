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
