// Save initial content of the page
const initialHTML = document.getElementById("page").innerHTML;

// 1. getElementById
function testGetById() {
  const el = document.getElementById("title");
  el.style.color = "red";
  el.textContent = "Hello (id found)";
}

// 2. getElementsByClassName
function testGetByClass() {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold";
    items[i].style.color = "blue";
  }
}

// 3. getElementsByTagName
function testGetByTag() {
  const divs = document.getElementsByTagName("div");
  divs[0].style.backgroundColor = "lightblue";
  divs[1].style.backgroundColor = "lightgreen";
  divs[2].style.backgroundColor = "lightcoral";
}

// 4. querySelector
function testQuerySelector() {
  const firstMsg = document.querySelector(".msg");
  firstMsg.style.color = "green";
  firstMsg.textContent = "Premier texte modifié";
}

// 5. querySelectorAll
function testQuerySelectorAll() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(li => {
    li.style.textDecoration = "underline";
    li.style.color = "purple";
  });
}

// 🔄 reset page
function resetPage() {
  // Reset h1
  const title = document.getElementById("title");
  title.textContent = "Bonjour";
  title.style.color = "";

  // Reset for class 'item'
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "";
    items[i].style.color = "";
  }

  // Reset divs
  const divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "";
  }

  // Reset firt '.msg'
  const firstMsg = document.querySelector(".msg");
  firstMsg.textContent = "Texte 1";
  firstMsg.style.color = "";

  // Reset All <li>
  const listItems = document.querySelectorAll("li");
  listItems.forEach(li => {
    li.style.textDecoration = "";
    li.style.color = "";
  });
}

