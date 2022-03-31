(async () => {
  let token;
  token = "DUBLON";
  token = "WOOD";
  const coordinates = "1 : 1";
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;

  while (1) {
    await new Promise((res) => setTimeout(res, PAUSE_TASK));

    var btns = document.getElementsByClassName("button-desk");
    var repairText = "Repair";

    for (var i = 0; i < btns.length; i++) {
      if (
        btns[i].textContent.includes(repairText) &&
        !btns[i].classList.value.includes("-inactive")
      ) {
        btns[i].click();
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
      }
    }

    claimText = "Claim";

    for (var i = 0; i < btns.length; i++) {
      if (btns[i].textContent.includes(claimText)) {
        btns[i].click();
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
        for (var i = 0; i < btns.length; i++) {
          if (btns[i].textContent.includes("OK")) {
            btns[i].click();
            break;
          }
        }
      }
    }

    const trawlText = "Trawl";

    for (var b = 0; b < btns.length; b++) {
      if (
        btns[b].textContent.includes(trawlText) &&
        !btns[b].classList.value.includes("-inactive")
      ) {
        btns[b].click();
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
        const tiles = document.querySelectorAll(".territories__item");
        for (var i = 0; i < tiles.length; i++) {
          if (tiles[i].textContent.includes(` ${coordinates} `)) {
            tiles[i].click();
            break;
          }
        }
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));

        for (var i = 0; i < btns.length; i++) {
          if (btns[i].textContent.includes(token)) {
            btns[i].click();
            break;
          }
        }
        await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
      }
    }
  }
})();
