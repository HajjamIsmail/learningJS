// Save initial HTML for reset
const initialHTML = document.getElementById("page").innerHTML;

// ====================
// Content Examples
// ====================
function changeInnerHTML() {
  document.getElementById("content-box").innerHTML = "<em>Updated</em> HTML content!";
}

function changeTextContent() {
  document.getElementById("content-box").textContent = "<em>Updated</em> textContent!";
}

function changeInnerText() {
  document.getElementById("content-box").innerText = "<em>Updated</em> innerText!";
}

// ====================
// Attributes Examples
// ====================
function setAttributeExample() {
  document.getElementById("my-image").setAttribute("alt", "Updated Alt Text");
}

function getAttributeExample() {
  const alt = document.getElementById("my-image").getAttribute("alt");
  alert("Alt attribute: " + alt);
}

function removeAttributeExample() {
  document.getElementById("my-image").removeAttribute("data-info");
}

function hasAttributeExample() {
  const has = document.getElementById("my-image").hasAttribute("data-info");
  alert("Has data-info? " + has);
}

function datasetExample() {
  const img = document.getElementById("my-image");
  let result = "Datasets:\n";

  for (let key in img.dataset) {
    result += `data-${key} = ${img.dataset[key]}\n`;
  }

  alert(result);
}


// ====================
// Classes Examples
// ====================
function addClassExample() {
  document.getElementById("class-box").classList.add("green");
}

function removeClassExample() {
  document.getElementById("class-box").classList.remove("red");
}

function toggleClassExample() {
  document.getElementById("class-box").classList.toggle("blue");
}

function replaceClassExample() {
  document.getElementById("class-box").classList.replace("green", "red");
}

function containsClassExample() {
  const hasClass = document.getElementById("class-box").classList.contains("red");
  alert("Contains 'red'? " + hasClass);
}

// ====================
// Styles Examples
// ====================
function changeInlineStyle() {
  const box = document.getElementById("style-box");
  box.style.backgroundColor = "lightgreen";
  box.style.width = "150px";
  box.style.height = "150px";
}

function getComputedStyleExample() {
  const box = document.getElementById("style-box");
  const styles = getComputedStyle(box);
  alert(`Width: ${styles.width}, Background: ${styles.backgroundColor}`);
}

// 🔄 Reset
function resetPage() {
  document.getElementById("page").innerHTML = initialHTML;
}
