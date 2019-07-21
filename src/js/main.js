console.log("siemanko 👋🏿");
const name = "Łukasz";
const age = 30;
console.log(name);
console.log(age);
console.log(`${name}
${age}`);
console.log(`Nazywam się ${name} 
i mam ${age} lat`);

console.log("Nazywam się " + name + " i mam " + age + " lat");

const about = document.querySelector(".about__paragraph--js");
console.log(about.innerHTML);

// about.innerHTML = `<strong>Nazywam się</strong> ${name} i mam ${age} lat`;

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
console.log(paragraphs[3]);

if ("javascript" != "java") {
  console.log("to prawda!");
}

if (age < 30) {
  console.log("masz mniej niż 30 lat");
} else if (age >= 30 && age <= 40) {
  console.log("masz więcej niż 30 lat, ale mniej niż 40");
} else {
  console.log("jesteś 41+");
}

switch (age) {
  case 30:
    console.log("masz równo 30 lat");
    break;
  case 40:
    console.log("masz równo 40 lat");
    break;
  default:
    console.log(`masz ${age} lat`);
    break;
}

const amIOld = age > 70 ? "yes" : "no";
console.log(amIOld);

function calculate(x) {
  x = x + 3;
  console.log(`tradycyjnie ${x}`);
  return x * 7;
}

calculate(1);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = x => (x + 3) * 7;

console.log(calculateFat(2));

/* Powitanie - funkcja */
const welcome = (name, age) => {
  console.log(`Witaj ${name}, masz ${age} lat!`);
}

welcome('lukas', 29);

const myName = 'lukas';
const myAge = 29;

welcome(myName, myAge);

// HAMBURGER MENU, DODANIE KLASY
const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible');
  if (navigationList.classList.contains('navigation__list--visible')) {
    navigationSwitcher.innerHTML = 'X';
  } else {
    navigationSwitcher.innerHTML = '☰';
  }
});


