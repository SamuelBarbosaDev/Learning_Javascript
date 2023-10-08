alert("Oi. Tudo bem?");

const h1Element = document.querySelector(".titulo");

h1Element.addEventListener("click", function() {
    this.style.transform = "rotate(360deg)";
});

const h2Element = document.querySelector(".texto");

h2Element.addEventListener("click", function() {
    this.style.transform = "rotate(360deg)";
});