// Interaktiv SVG-side
const svgShrek = document.querySelector(".svg_shrek");

const sump = document.querySelector("#details-sump");
const bar = document.querySelector("#details-bar");
const doris = document.querySelector("#details-doris");
if (svgShrek) {
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
}

// Opsamlingsside
const kostumePass = document.querySelector(".opsamling-page");

if (kostumePass) {
  const params = new URLSearchParams(location.search);

  const nicknameOutput = document.querySelector(".nickname-output");
  const nicknameImg = document.querySelector(".shrek_karakter");
  const reasonOutput = document.querySelector(".reason-output");
  const hypeLevel = document.querySelector(".hype-level");
  const farveBoks = document.querySelector(".opsamling_container");

  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
  const nickname = params.get("nickname");
  if (nickname == "sassy") {
    nicknameOutput.textContent = "The Sassy Swamp Queen";
    nicknameImg.src = "./imgs/sassy.webp";
  } else if (nickname === "rizzler") {
    nicknameOutput.textContent = "Mr. Steal your Fiona";
    nicknameImg.src = "./imgs/rizzler.webp";
  } else if (nickname === "danse") {
    nicknameOutput.textContent = "Lord of the Dancefloor";
    nicknameImg.src = "./imgs/danse.webp";
  }

  const reason = params.get("reason");
  reasonOutput.textContent = reason;

  // Hent hype, og vis Høj, Middel eller Lav
  const hypeValue = params.get("hype");
  if (hypeValue >= 75) {
    hypeLevel.textContent = "Høj";
  } else if (hypeValue >= 50) {
    hypeLevel.textContent = "Middel";
  } else {
    hypeLevel.textContent = "Lav";
  }

  const color = params.get("color");
  if (color === "green") {
    farveBoks.style.backgroundColor = "#2d3a27";
  } else if (color === "red") {
    farveBoks.style.backgroundColor = "#3b0c0c";
  } else if (color === "brown") {
    farveBoks.style.backgroundColor = "#7f2501";
  } else if (color === "purple") {
    farveBoks.style.backgroundColor = "#2d1535";
  }
}

// fjern fejlbesked
const form = document.querySelector("form");
if (form) {
  function cancelPopup(event) {
    // Forhindr browserens valideringsboble
    event.preventDefault();
    form.querySelector(":invalid").focus();
  }

  form.addEventListener("invalid", cancelPopup, true);
}
