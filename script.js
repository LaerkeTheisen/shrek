// Interaktiv SVG-side
const svgShrek = document.querySelector(".svg_shrek");

const sump = document.querySelector("#details-sump");
const bar = document.querySelector("#details-bar");
const doris = document.querySelector("#details-doris");

sump.addEventListener("toggle", updateSvgPosition);
bar.addEventListener("toggle", updateSvgPosition);
doris.addEventListener("toggle", updateSvgPosition);

function updateSvgPosition() {
  console.log("updateSvgPosition");
  const openDetails = document.querySelector(".accordion-item:open");
  if (openDetails) {
    // Hvis der er en åben
    const position = openDetails.getAttribute("data-position");
    svgShrek.setAttribute("data-position", position);
  } else {
    // Hvis der ikke er nogen åben
    delete svgShrek.dataset.position;
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
