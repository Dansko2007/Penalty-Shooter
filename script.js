const zones = document.querySelectorAll(".zone");
const resultaat = document.getElementById("resultaat");

zones.forEach((zone) => {
  zone.addEventListener("click", () => {
    const gekozenZone = zone.dataset.zone;
    const keeperZone = ["links", "midden", "rechts"][Math.floor(Math.random() * 3)];

    if (gekozenZone === keeperZone) {
      resultaat.textContent = `MIS! De keeper dook naar ${keeperZone}.`;
    } else {
      resultaat.textContent = `GOAL! De keeper dook naar ${keeperZone}, jij schoot ${gekozenZone}.`;
    }
  });
});
