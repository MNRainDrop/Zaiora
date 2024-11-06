var reel = document.getElementById("reel");
var resume = document.getElementById("resume");
var about = document.getElementById("about");
var dyn = document.getElementById("dyanmic-body");

reel.addEventListener("click", () => {
    dyn.innerHTML = "";

    var child = document.createElement("p");
    child.textContent = "hello world";

    dyn.append(child);
})

resume.addEventListener("click", () => {
    dyn.innerHTML = "";

    var child = document.createElement("p");
    child.textContent = "wysi";

    dyn.append(child);
})

about.addEventListener("click", () => {
    dyn.innerHTML = "";

    var child = document.createElement("p");
    child.textContent = "727";

    dyn.append(child);
})