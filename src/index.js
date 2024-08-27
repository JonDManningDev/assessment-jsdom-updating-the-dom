import "./styles.css";

/**
  Write the addheadings() function here
*/
function addHeadings() {
  const articles = document.querySelectorAll(".articles > article");
  for (let article of articles) {
    const artHeading = document.createElement("h2");
    artHeading.innerText = article.innerText;
    article.appendChild(artHeading);        
  }
}
/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll(".articles > article");
  for (let article of articles) {
    if (article.innerText.includes("Tutorial")) {
      article.classList.add("tutorial");
    } else if (article.innerText.includes("Article")) {
      article.classList.add("article");
    }
  }
}
/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials() {
  const articles = document.querySelectorAll(".articles > article");
  const newTutSection = document.createElement("section");
  const div = document.querySelector("div.container");
  div.appendChild(newTutSection);
  newTutSection.classList.add("tutorials");
  for (let article of articles) {
    if (article.classList.contains("tutorial")) {
      newTutSection.appendChild(article);
    }
  }
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
