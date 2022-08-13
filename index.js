const saveEL = document.getElementById('save-el');
const countEl = document.getElementById('count-el');
const count = 0;

function increment() {
  count += 1
  countEl.textContent = count;
}

function save() {
  const countStr = count + " - "
  saveEL.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
