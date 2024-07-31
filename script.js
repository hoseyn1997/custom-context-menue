let $ = document;

let contextmenu = $.getElementsByTagName("ul")[0];

$.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextmenu.classList.remove("hidden");
  contextmenu.style.left = e.pageX + "px";
  contextmenu.style.top = e.pageY + "px";
});

$.body.addEventListener("click", () => {
  contextmenu.classList.add("hidden");
});
