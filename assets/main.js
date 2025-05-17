async function setLayout(tabName) {
    // Get layout from tabName
    let resp = await fetch(`layout/${tabName}.html`);
    let html = await resp.text();

    // (Re)-initialize main
    let main = document.body.querySelector('main');
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    };

    // Place and reveal layout
    main.insertAdjacentHTML('beforeend', html);
    main.removeAttribute('hidden');

    // Bolden selected tab
    document.querySelectorAll('nav > ul > li >  a').forEach(element => {
        console.log(element);
        element.classList.remove('nav-selected');
    });
    let element = document.getElementById(tabName);
    element.classList.add('nav-selected');
}

setLayout('index');
