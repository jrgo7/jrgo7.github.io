async function switchLayout(layoutName) {
  layoutHtml = await (await fetch(`layouts/${layoutName}.html`)).text();
  document.querySelector("main").innerHTML = layoutHtml;

  allLinks = document.querySelectorAll("a.switch-layout");
  allLinks.forEach((a) => {
    a.onclick = async () => {
      switchLayout(a.dataset.layout);
      allLinks.forEach((a) => (a.style.fontWeight = "normal"));
      a.style.fontWeight = "bold";
    };
  });
}

switchLayout("home");
