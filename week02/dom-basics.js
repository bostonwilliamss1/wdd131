const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "picture");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const newPara = document.createElement("p");

newH2.innerText = "DOM Basics";
newPara.innerText = "This was added with Javascript";

newSection.appendChild(newH2);
newSection.appendChild(newPara);

document.body.appendChild(newSection);
