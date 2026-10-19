// Theme toggle. The button names the mode it will switch to.
(function () {
  var root = document.documentElement;
  var query = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return query.matches ? "dark" : "light";
  }

  function labelButtons() {
    var next = currentTheme() === "dark" ? "Light mode" : "Dark mode";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.textContent = next;
    });
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var theme = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        // Not saved, but the switch still works for this visit.
      }
      labelButtons();
    });
  });

  query.addEventListener("change", labelButtons);
  labelButtons();
})();
