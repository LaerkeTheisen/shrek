// Opsamlingsside
const kostumePass = document.querySelector(".opsamling-placeholder");

if (kostumePass) {
  const params = new URLSearchParams(window.location.search);

  const nicknameOutput = document.querySelector(".nickname-output");
  const reasonOutput = document.querySelector(".reason-output");
  const hypeLevel = document.querySelector(".hype-level");
  const colorOutput = document.querySelector(".color-output");

  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
  const nickname = params.get("nickname");
  const reason = params.get("reason");
  const color = params.get("color");

  nicknameTitel.textContent = nickname;
  nicknameImg.src = `./imgs/${nickname}.webp`;
  reasonOutput.textContent = reason;
  colorOutput.textContent = color;

  // const titles = {
  //   sassy: "The Sassy Swamp Queen",
  //   rizzler: "Shrek the Rizzler",
  //   danse: "Lord of the Dancefloor"
  // };

  // Hent hype, og vis Høj, Middel eller Lav
  const hypeValue = params.get("hype");
  if (hypeValue >= 75) {
    hypeLevel.textContent = "Høj";
  } else if (hypeValue >= 50) {
    hypeLevel.textContent = "Middel";
  } else {
    hypeLevel.textContent = "Lav";
  }
}

// fjern fejlbesked
const form = document.querySelector("form");

function cancelPopup(event) {
  // Forhindr browserens valideringsboble
  event.preventDefault();
  form.querySelector(":invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

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
