// =====================
// 1. addEventListener & removeEventListener
// =====================
function onButtonClick() {
  alert("Button clicked!");
}

document.getElementById("btn-attach").addEventListener("click", onButtonClick);

document.getElementById("btn-remove").addEventListener("click", () => {
  document.getElementById("btn-attach").removeEventListener("click", onButtonClick);
  alert("Click event removed from 'Click Me' button!");
});

// =====================
// 2. preventDefault()
// =====================
document.getElementById("demo-form").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form reload
  alert("Form submission prevented! Input: " + document.getElementById("text-input").value);
});

// =====================
// 3. stopPropagation()
// =====================
document.getElementById("outer").addEventListener("click", () => {
  alert("Outer DIV clicked!");
});

document.getElementById("inner").addEventListener("click", (event) => {
  event.stopPropagation(); // prevents bubbling up
  alert("Inner DIV clicked (propagation stopped)!");
});

// =====================
// 4. stopImmediatePropagation()
// =====================
function firstHandler(event) {
  alert("First handler executed.");
  event.stopImmediatePropagation(); // stops other handlers on same element
}

function secondHandler() {
  alert("Second handler should not run!");
}

const innerBox = document.getElementById("inner");
innerBox.addEventListener("dblclick", firstHandler);
innerBox.addEventListener("dblclick", secondHandler);

// =====================
// 5. dispatchEvent()
// =====================
const customEvent = new Event("myCustomEvent");

document.getElementById("btn-dispatch").addEventListener("myCustomEvent", () => {
  alert("Custom event triggered!");
});

document.getElementById("btn-dispatch").addEventListener("click", () => {
  document.getElementById("btn-dispatch").dispatchEvent(customEvent);
});

// =====================
// 6. Common Events Examples
// =====================

// input
document.getElementById("text-input").addEventListener("input", (e) => {
  console.log("Input changed:", e.target.value);
});

// keydown
document.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});
