// Interaktiv SVG-side
const svgMap = document.querySelector(".svg-map");

if (svgMap) {
  const shrek = svgMap.querySelector("#shrek-mover");
  const status = document.querySelector("#shrek-status");

  document.querySelectorAll(".svg-location").forEach((location) => {
    location.querySelector("summary").addEventListener("click", () => {
      if (!shrek || !status) return;

      const { x, y } = location.dataset;
      shrek.style.transform = `translate(${x}px, ${y}px)`;
      status.textContent = `Shrek er på vej til ${location.querySelector("summary").textContent}.`;
    });
  });
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
