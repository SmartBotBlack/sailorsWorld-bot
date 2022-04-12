(async () => {
  let token;
  token = "WOOD";
  token = "DUBLON";
  const x = 1;
  const y = 1;
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;

  while (1) {
    await new Promise((res) => setTimeout(res, PAUSE_TASK));

    let btns = document.getElementsByClassName("button-desk");
//     let repairText = "Repair";

//     for (let i = 0; i < btns.length; i++) {
//       if (
//         btns[i].textContent.includes(repairText) &&
//         !btns[i].classList.value.includes("-inactive")
//       ) {
//         btns[i].click();
//         await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
//       }
//     }

    const claimText = "Claim";

    for (let i = 0; i < btns.length; i++) {
      if (btns[i].textContent.includes(claimText)) {
        btns[i].click();
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
        for (let i = 0; i < btns.length; i++) {
          if (btns[i].textContent.includes("OK")) {
            btns[i].click();
            break;
          }
        }
      }
    }

    const trawlText = "Trawl";

    for (let b = 0; b < btns.length; b++) {
      if (
        btns[b].textContent.includes(trawlText) &&
        !btns[b].classList.value.includes("-inactive")
      ) {
        btns[b].click();
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
        const tiles = document.querySelectorAll(".territories__item");
        for (let i = 0; i < tiles.length; i++) {
          if (tiles[i].textContent.startsWith(`${x} : ${y} `)) {
            tiles[i].click();
            break;
          }
        }
        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));

        for (let i = 0; i < btns.length; i++) {
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
