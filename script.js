// Interaktiv SVG-side
const svgShrek = document.querySelector(".svg_shrek");

if (svgShrek) {
  const status = document.querySelector("#shrek-status");
  document.querySelectorAll(".accordion-item[data-position]").forEach((location) => {
    location.addEventListener("toggle", () => {
      const openLocation = document.querySelector(".accordion-item:open");
      if (openLocation) {
        svgShrek.dataset.position = openLocation.dataset.position;
        if (status) {
          status.textContent = `Shrek er på vej til ${openLocation.querySelector("summary").textContent}.`;
        }
      } else {
        delete svgShrek.dataset.position;
        if (status) {
          status.textContent = "Shrek står på stien. Vælg et sted, han skal besøge.";
        }
      }
    });
  });
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
