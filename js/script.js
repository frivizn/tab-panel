const tabs = document.querySelector(".tabs");
const tabButton = document.querySelectorAll(".tabs__button");
const panels = document.querySelectorAll(".panel__body");

tabs.onclick = e => {
  const id = e.target.dataset.id;

  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", false);
    });

    e.target.classList.add("active");
    e.target.setAttribute("aria-expanded", true);

    panels.forEach(panel => {
      panel.classList.remove("active");
      panel.setAttribute("aria-hidden", true);
    });

    const elementId = document.getElementById(id);
    elementId.classList.add("active");
    elementId.setAttribute("aria-hidden", false);
  }
}

