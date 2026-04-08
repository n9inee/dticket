import Config from "./config";

document.addEventListener("DOMContentLoaded", () => {
  // TODO: impl this
  const headerText = document.querySelector("#header > p") as HTMLElement;

  const profileSec = document.getElementById("profile-page") as HTMLElement;
  const journeysSec = document.getElementById("journeys-page") as HTMLElement;
  const profileSecBtn = document.getElementById(
    "profile-page-btn",
  ) as HTMLElement;
  const journeysSecBtn = document.getElementById(
    "journeys-page-btn",
  ) as HTMLElement;

  let params = new URLSearchParams(document.location.search);
  let page = params.get("page");
  if (page === "profile") {
    profileSec.hidden = false;
    journeysSec.hidden = true;

    profileSecBtn.classList.add("active");
    journeysSecBtn.classList.remove("active");

    headerText.textContent = "Settings";
  } else {
    profileSec.hidden = true;
    journeysSec.hidden = false;

    profileSecBtn.classList.remove("active");
    journeysSecBtn.classList.add("active");

    headerText.textContent = "Subscription-Ticket";
  }
});
