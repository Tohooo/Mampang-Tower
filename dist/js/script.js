function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;

      // Jalankan script navbar SETELAH HTML navbar masuk ke halaman
      if (id === "navbar") {
        initNavbar();
      }
    })
    .catch((err) => console.error("Gagal load:", file, err));
}

function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".menu");

  if (!hamburger || !menu) {
    console.error("Navbar elements not found!");
    return;
  }

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Dropdown mobile
  document.querySelectorAll(".dropdown > a").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      trigger.parentElement.classList.toggle("active");
    });
  });
}
