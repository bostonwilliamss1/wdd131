document.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.querySelector('.menu-button');
    let menu = document.getElementById('menu');

    console.log(menuButton);
    console.log(menu);

    menu.classList.add('hide');

    function toggleMenu() {
        menu.classList.toggle("hide");
        console.log("Menu toggled");
    }

    menuButton.addEventListener("click", toggleMenu);

    // Add event listener to gallery section
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
    // Check if the clicked element is an image
    if (event.target.tagName === 'IMG') {
        // Get the src attribute from the clicked image
        const srcAttribute = event.target.getAttribute('src');

        // Split the src attribute value on the "-" character
        const srcParts = srcAttribute.split("-");

        // Construct the new image file name by adding "-full.jpeg" to the first part of the array
        const newSrc = srcParts[0] + "-full.jpeg";

        // Construct the viewer template HTML
        const viewerHTML = viewerTemplate(newSrc, "Enlarged Image");

        // Insert the viewer template into the top of the body element
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        // Add a listener to the close button (X) that calls the closeViewer function when clicked
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    // Remove the viewer from the DOM
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}