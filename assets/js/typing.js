const texts = {
  default: ["Web Developer", "Software Engineer", "UI/UX Designer"],
  about: ["Passionate", "Creative", "Precision"],
  coding: ["HTML/CSS/SASS", "JavaScript/.NET", "PHP/Lavarel/SQL"],
  scs: ["Learning", "Growing", "Achieving"],
};

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let cycle = 0;
const typingElements = [document.getElementById("typing-text-1"), document.getElementById("typing-text-2"), document.getElementById("typing-text-3")];

let typeTimeout;
let backspaceTimeout;

function updateTexts() {
  const hash = window.location.hash;
  if (hash === "#about-section") {
    return texts.about;
  } else if (hash === "#coding-section") {
    return texts.coding;
  } else if (hash === "#scs-section") {
    return texts.scs;
  }
  return texts.default;
}

function resetAnimation() {
  // Clear any ongoing timeouts
  clearTimeout(typeTimeout);
  clearTimeout(backspaceTimeout);

  count = 0;
  index = 0;
  cycle = 0;
  typingElements.forEach((el) => {
    el.textContent = "";
    el.style.borderRight = "";
  });
  // Start typing immediately
  type();
}

function type() {
  const currentTexts = updateTexts();
  if (count === currentTexts.length) {
    count = 0;
    cycle++;
    if (cycle === 2) {
      return;
    }
  }
  currentText = currentTexts[count];
  letter = currentText.slice(0, ++index);

  typingElements[count].textContent = letter;

  if (letter.length === currentText.length) {
    if (cycle === 0) {
      backspaceTimeout = setTimeout(backspace, 1500);
    } else {
      if (count < 2) {
        typingElements[count].style.borderRight = "none";
      }
      count++;
      index = 0;
      typeTimeout = setTimeout(type, 500);
    }
  } else {
    typeTimeout = setTimeout(type, 100);
  }
}

function backspace() {
  if (index > 0) {
    letter = currentText.slice(0, --index);
    typingElements[count].textContent = letter;
    backspaceTimeout = setTimeout(backspace, 33);
  } else {
    count++;
    index = 0;
    typeTimeout = setTimeout(type, 500);
  }
}

// Start the initial animation
typeTimeout = setTimeout(type, 2000);

window.addEventListener("hashchange", resetAnimation);
