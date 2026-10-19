// Runs in <head> so the saved theme applies before first paint.
// With no saved choice, the CSS follows the operating system setting.
(function () {
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {
    // Storage can be blocked (private windows, strict settings). Fall back to the system theme.
  }
})();
