import "./config";

document.addEventListener("DOMContentLoaded", () => {
  // TODO: impl this
  const activePageText = document.querySelector(
    "#section-header > p",
  ) as HTMLElement;

  const profileSection = document.getElementById(
    "section-profile",
  ) as HTMLElement;
  const profileSectionBtn = document.getElementById(
    "section-profile-btn",
  ) as HTMLElement;

  const journeysSection = document.getElementById(
    "section-journeys",
  ) as HTMLElement;
  const journeysSectionBtn = document.getElementById(
    "section-journeys-btn",
  ) as HTMLElement;

  const currentPage = new URLSearchParams(document.location.search).get("page");
  if (currentPage === "profile") {
    // Set text of the page header
    activePageText.textContent = "Settings";

    profileSection.hidden = false;
    profileSectionBtn.classList.add("active");

    journeysSection.hidden = true;
    journeysSectionBtn.classList.remove("active");
  } else {
    activePageText.textContent = "Subscription-Ticket";

    journeysSection.hidden = false;
    journeysSectionBtn.classList.add("active");

    profileSection.hidden = true;
    profileSectionBtn.classList.remove("active");
  }
});
