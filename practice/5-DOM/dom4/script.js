// Save initial HTML for reset
const initialHTML = document.getElementById("page").innerHTML;

// ====================
// Tree Navigation Examples
// ====================

// 1-2 Parent
function showParentNode() {
  const banana = document.getElementById("banana");
  alert("parentNode: " + banana.parentNode.nodeName);
}

function showParentElement() {
  const banana = document.getElementById("banana");
  alert("parentElement: " + banana.parentElement.nodeName);
}

// 3-4 Children
function showChildren() {
  const list = document.getElementById("fruit-list");
  let result = "children:\n";
  for (let child of list.children) {
    result += child.nodeName + " (" + child.textContent + ")\n";
  }
  alert(result);
}

function showChildNodes() {
  const list = document.getElementById("fruit-list");
  let result = "childNodes:\n";
  list.childNodes.forEach(node => {
    result += node.nodeName + " (type: " + node.nodeType + ")\n";
  });
  alert(result);
}

// 5-8 First/Last
function showFirstChild() {
  const list = document.getElementById("fruit-list");
  alert("firstChild: " + list.firstChild.nodeName);
}

function showLastChild() {
  const list = document.getElementById("fruit-list");
  alert("lastChild: " + list.lastChild.nodeName);
}

function showFirstElementChild() {
  const list = document.getElementById("fruit-list");
  alert("firstElementChild: " + list.firstElementChild.textContent);
}

function showLastElementChild() {
  const list = document.getElementById("fruit-list");
  alert("lastElementChild: " + list.lastElementChild.textContent);
}

// 9-12 Siblings
function showNextSibling() {
  const banana = document.getElementById("banana");
  alert("nextSibling: " + banana.nextSibling.nodeName);
}

function showPreviousSibling() {
  const banana = document.getElementById("banana");
  alert("previousSibling: " + banana.previousSibling.nodeName);
}

function showNextElementSibling() {
  const banana = document.getElementById("banana");
  alert("nextElementSibling: " + banana.nextElementSibling.textContent);
}

function showPreviousElementSibling() {
  const banana = document.getElementById("banana");
  alert("previousElementSibling: " + banana.previousElementSibling.textContent);
}

// 🔄 Reset
function resetPage() {
  document.getElementById("page").innerHTML = initialHTML;
}
