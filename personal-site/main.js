document.addEventListener('DOMContentLoaded', function() {
    init();
    const searchButton = document.querySelector('#search-button');
    if (searchButton) {
        searchButton.addEventListener('click', searchHandler);
    }
    window.addEventListener('resize', function() {
        init();
    });

    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;
            let message = document.getElementById('message').value;

            if (name && email && subject && message) {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});

import crochetPatterns from './crochet.js';

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getRandomPatterns(count) {
    const patterns = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = getRandomNumber(crochetPatterns.length);
        patterns.push(crochetPatterns[randomIndex]);
    }
    return patterns;
}

function generateTags(tags) {
    return tags.map(tag => `<div class="tag">${tag}</div>`).join('');
}

function getRatingStars(rating) {
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = (rating % 1 !== 0) ? '⭐' : '';
    const emptyStars = '☆'.repeat(Math.floor(5 - rating));
    return `${fullStars}${halfStar}${emptyStars}`;
}

function generatePatternHTML(pattern) {
    let detailsHtml = '';
    if (window.innerWidth > 400) {
        detailsHtml = `
        <div class="details">
            <div class="description">${pattern.description}</div>
            <div class="rating" role="img" aria-label="Rating: ${pattern.rating} out of 5 stars">
                ${getRatingStars(pattern.rating)}
            </div>
        </div>`;
    }

    return `
    <div class="crochet-card">
        <img src="${pattern.image}" alt="${pattern.name}">
        <div class="crochet-details">
            <div class="tags-container">${generateTags(pattern.tags)}</div>
            <h2>${pattern.name}</h2>
            <p>Materials: ${pattern.materials}</p>
            ${detailsHtml}
        </div>
    </div>`;
}

function init() {
    const crochetContainer = document.querySelector('#crochet-container');
    if (crochetContainer) {
        const randomPatterns = getRandomPatterns(6);
        const patternsHTML = randomPatterns.map(generatePatternHTML).join('');
        crochetContainer.innerHTML = patternsHTML;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    init();

    const searchButton = document.querySelector('#search-button');
    if (searchButton) {
        searchButton.addEventListener('click', searchHandler);
    }

    window.addEventListener('resize', function() {
        init();
    });
});

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector('#search-input').value.toLowerCase();
    const filteredPatterns = filterPatterns(query);
    renderPatterns(filteredPatterns);
}

function filterPatterns(query) {
    return crochetPatterns
        .filter(pattern => {
            const nameMatch = pattern.name?.toLowerCase().includes(query) || false;
            const descriptionMatch = pattern.description?.toLowerCase().includes(query) || false;
            const tagsMatch = pattern.tags?.some(tag => tag.toLowerCase().includes(query)) || false;

            return nameMatch || descriptionMatch || tagsMatch;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
}

function renderPatterns(patterns) {
    const patternsContainer = document.querySelector('#crochet-container');
    if (patternsContainer) {
        patternsContainer.innerHTML = patterns.map(generatePatternHTML).join('');
    }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        if (name && email && subject && message) {
            contactForm.style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
        } else {
            alert('Please fill in all fields.');
        }
    });
}