function shuffleChildren(parent) {
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

{
  let parent = document.getElementById("shuffled");
  if (parent && !document.location.hash.match(/sorted/)) {
    shuffleChildren(parent);
  }
  let m = document.location.hash.match(/section-(\d)/);
  if (m) {
    let hiddenSections = new Set(["1", "3", "5"]);
    hiddenSections.delete(m[1]);
    for (let s of hiddenSections) {
      let d = document.getElementsByClassName(`cclab-section-${s}`);
      [...d].forEach(e => e.style.display = "none");
    }
  }
}
