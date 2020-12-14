function shuffleCards() {
  let parent = document.getElementById("shuffled");
  if (!parent) return;
  let oldElements = [...parent.children];
  let newElements = [];
  while (oldElements.length > 0) {
    let i = Math.floor(oldElements.length * Math.random());
    newElements.push(oldElements[i]);
    oldElements.splice(i, 1);
  }
  for (let child of [...parent.children]) {
    parent.removeChild(child);
  }
  for (let child of newElements) {
    parent.appendChild(child);
  }
}
shuffleCards();
