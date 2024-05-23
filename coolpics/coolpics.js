document.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.querySelector('.menu-button');
    let menu = document.getElementById('menu');

    if (menuButton && menu) {
        menu.classList.add('hide');

        function toggleMenu() {
            menu.classList.toggle('hide');
            console.log("Menu toggled");
        }

        menuButton.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu button or menu not found.");
    }

    let gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', viewHandler);
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" class="viewer-img">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const srcAttribute = event.target.getAttribute('src');

        const srcParts = srcAttribute.split("-");

        const newSrc = srcParts[0] + "-full.jpeg";

        const viewerHTML = viewerTemplate(newSrc, "Enlarged Image");

        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}