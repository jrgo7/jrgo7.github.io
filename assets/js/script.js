async function switchLayout(layoutName) {
    layoutHtml = await (await fetch(`layouts/${layoutName}.html`)).text();
    document.querySelector('main').innerHTML = layoutHtml;

    document.querySelectorAll("a.switch-layout").forEach(a => {
        a.onclick = async () => switchLayout(a.dataset.layout)
    })

}



switchLayout('home')