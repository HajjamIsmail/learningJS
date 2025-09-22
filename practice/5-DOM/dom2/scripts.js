// Save initial HTML for reset
const initialHTML = document.getElementById("page").innerHTML;

// ====================
// Classic Methods
// ====================
function exampleCreateAppend() {
  const newDiv = document.createElement("div");
  const text = document.createTextNode("Hello DOM with appendChild!");
  newDiv.appendChild(text);
  document.body.appendChild(newDiv);
}

function exampleInsertBefore() {
  const newPara = document.createElement("p");
  newPara.textContent = "Inserted before the first fruit";
  const firstLi = document.querySelector("#fruit-list li");
  firstLi.parentNode.insertBefore(newPara, firstLi);
}

function exampleRemoveChild() {
  const firstLi = document.querySelector("#fruit-list li");
  if (firstLi) firstLi.parentNode.removeChild(firstLi);
}

function exampleReplaceChild() {
  const newHeading = document.createElement("h2");
  newHeading.textContent = "Title replaced!";
  const oldHeading = document.querySelector("h1");
  oldHeading.parentNode.replaceChild(newHeading, oldHeading);
}

function exampleCloneNode() {
  const list = document.getElementById("fruit-list");
  const clonedList = list.cloneNode(true);
  document.body.appendChild(clonedList);
}

// ====================
// Modern Methods
// ====================
function exampleAppend() {
  const newDiv = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = " (with append)";
  newDiv.append("Text added with append", span);
  document.body.appendChild(newDiv);
}

function examplePrepend() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "Added at the start with prepend";
  document.body.prepend(newDiv);
}

function exampleInsertAdjacentHTML() {
  const ul = document.getElementById("fruit-list");
  ul.insertAdjacentHTML("beforeend", "<li>Kiwi</li>");
}

function exampleInsertAdjacentText() {
  const ul = document.getElementById("fruit-list");
  ul.insertAdjacentText("afterbegin", "Fruits: ");
}

// 🔄 Reset
function resetPage() {
  document.getElementById("page").innerHTML = initialHTML;
}
