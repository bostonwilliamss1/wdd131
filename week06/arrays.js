const steps = ["one", "two", "three"];

steps.map(step => {
    document.querySelector("#myList").innerHTML += `<li>${step}</li>`;
});

for (let i = 0; i < steps.length; i++) {
    document.querySelector("#myList").innerHTML += `<li>${steps[i]}</li>`;
};

// const listTemplate(step) {
//   return //the html string made from step
// }
// const stepsHtml = // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = // set the innerHTML