import "./config";

document.addEventListener("DOMContentLoaded", () => {
  const headerText = document.querySelector("header > h1") as HTMLElement;

  const sectionProfile = document.getElementById(
    "section-profile",
  ) as HTMLElement;
  const navBtnProfile = document.getElementById(
    "nav-btn-profile",
  ) as HTMLElement;

  const sectionTicket = document.getElementById(
    "section-ticket",
  ) as HTMLElement;
  const ticketBtnProfile = document.getElementById(
    "nav-btn-ticket",
  ) as HTMLElement;

  const currentSection = new URLSearchParams(document.location.search).get(
    "page",
  );
  if (currentSection === "profile") {
    // Set text of the page header
    headerText.textContent = "Settings";

    sectionProfile.hidden = false;
    navBtnProfile.classList.add("active");

    sectionTicket.hidden = true;
    ticketBtnProfile.classList.remove("active");
  } else {
    headerText.textContent = "Abo-Ticket";

    sectionTicket.hidden = false;
    ticketBtnProfile.classList.add("active");

    sectionProfile.hidden = true;
    navBtnProfile.classList.remove("active");
  }
});
