function shuffleCards() {
  let parent = document.getElementById("shuffled");
  if (!parent) return;
  let children = shuffle(parent.children);
  for (let child of children) {
    parent.removeChild(child);
  }
  for (let child of children) {
    parent.appendChild(child);
  }
}

function shuffle(array) {
  let source = [...array];
  let result = [];
  while (source.length > 0) {
    let i = Math.floor(source.length * Math.random());
    result.push(source.splice(i, 1)[0]);
  }
  return result;
}

shuffleCards();
