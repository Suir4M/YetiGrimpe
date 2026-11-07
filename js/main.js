// Yeti 85 – interactions communes aux différentes pages.

const menuButton = document.querySelector(".nav-toggle");
const navigation = document.getElementById("menu");

function closeNavigation({ restoreFocus = false } = {}) {
  if (!menuButton || !navigation) return;

  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");

  if (restoreFocus) menuButton.focus();
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeNavigation({ restoreFocus: true });
    }
  });
}

// Met en évidence le jour actuel dans le planning (dimanche = 0, samedi = 6).
const today = new Date().getDay();

document.querySelectorAll(".day[data-day]").forEach((day) => {
  if (Number(day.dataset.day) === today) {
    day.classList.add("is-today");
  }
});
