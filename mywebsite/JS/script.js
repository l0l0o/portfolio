// SECTIONS SWITCH

const sections = document.querySelectorAll("section");
console.log("sections : ", sections);

const navItems = document.querySelectorAll(".nav-item");
console.log("navItems : ", navItems);

let selector = null;
SectionSelector = 0;
sectionSwitch();

function sectionSwitch() {
  sections.forEach(function (invisible) {
    invisible.classList.add("invisible");
    sections[SectionSelector].classList.remove("invisible");
  });
}

navItems[0].addEventListener("click", function () {
  console.log("Travaux click");

  SectionSelector = 0;
  sectionSwitch();
});

navItems[1].addEventListener("click", function () {
  console.log("À propos click");

  SectionSelector = 1;
  sectionSwitch();
});

navItems[2].addEventListener("click", function () {
  console.log("Contacts click");

  SectionSelector = 2;
  sectionSwitch();
});

// CARD SWITCH

const cardImage = document.querySelector(".mock-up");
const cardTitle = document.querySelector(".title");
const cardDescription = document.querySelector(".story-telling");
const cardDate = document.querySelector(".date");
const cardSkillIcon = document.querySelector(".skill-icon");
const cardSkillName = document.querySelector(".skill-name");

const buttonRight = document.querySelector("#right");
const buttonLeft = document.querySelector("#left");

const skillsData = [
  (css = [(tagicon = `./assets/tech-logos/css3.svg`), (tagname = `CSS`)]),
  (html = [(tagicon = `./assets/tech-logos/html5.svg`), (tagname = `HTML`)]),
  (js = [(tagicon = `./assets/tech-logos/js.svg`), (tagname = `JavaScript`)]),
  (php = [(tagicon = `./assets/tech-logos/php.svg`), (tagname = `php`)]),
  (figma = [(tagicon = `./assets/tech-logos/figma.svg`), (tagname = `Figma`)]),
];

const cardsData = [
  (music_dashboard = [
    (picture = `./assets/mock-ups/music_dashboard.png`),
    (title = `Music Dashboard`),
    (description = `Réalisé pour apprendre à utiliser le logiciel Figma.
    Utilisation d'auto-layouts et de components`),
    (date = `10/2023`),
    (skillIcon = [skillsData[4][0]]),
    (skillName = [skillsData[4][1]]),
  ]),
  (marshall_integration = [
    (picture = `./assets/mock-ups/marshall_integration.png`),
    (title = `Marshall Intégration`),
    (description = `Projet centré sur l'apprentissage des propriétés Flexbox en pair-programming.`),
    (date = `10/2023`),
    (skillIcon = [skillsData[1][0], skillsData[0][0]]),
    (skillName = [skillsData[1][1], skillsData[0][1]]),
  ]),
  (theme_website = [
    (picture = `./assets/mock-ups/black_mirror_website.png`),
    (title = `Black Mirror Fanpage`),
    (description = `Création de la maquette d'un site autour d'un univers de notre choix. Réalisé en pair-programming.`),
    (date = `11/2023`),
    (skillIcon = [skillsData[4][0]]),
    (skillName = [skillsData[4][1]]),
  ]),
];

console.log(cardsData[2][4]);

function cardsSwitch() {
  cardImage.src = cardsData[cardNumber][0];
  cardTitle.textContent = cardsData[cardNumber][1];
  cardDescription.textContent = cardsData[cardNumber][2];
  cardDate.textContent = cardsData[cardNumber][3];
  cardSkillIcon.src = cardsData[cardNumber][4];
  cardSkillName.textContent = cardsData[cardNumber][5];
}

let cardNumber = 0;

buttonRight.addEventListener("click", () => {
  console.log("click");

  cardNumber++;

  if (cardNumber > cardsData.length - 1) {
    cardNumber = 0;
  }
  console.log("cardNumber : ", cardNumber);

  cardsSwitch();
});

buttonLeft.addEventListener("click", () => {
  console.log("click");

  cardNumber--;

  if (cardNumber + 1 < 1) {
    cardNumber = cardsData.length - 1;
  }
  console.log("cardNumber : ", cardNumber);

  cardsSwitch();
});
