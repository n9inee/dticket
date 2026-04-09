import { defaultBarcode } from "./data";

let config: Config;

export default class Config {
  fullName: string = "Max Mustermann";
  birthday: string = "01.01.1990";
  barcode: string = defaultBarcode;
  id: string = "";

  ticketStart: string;
  ticketEnd: string;
  civ: number;
  orderId: string;
  position: string = "00/11";
  price: string = "63,00";
  ticketCode: string;

  constructor() {
    const fmt = new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const ticketStart = fmt.format(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    );
    const ticketEnd = fmt.format(
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    );

    let civ = Number.parseInt(
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0"),
    );
    const orderId = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
    const code = Array.from(
      { length: 8 },
      () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)],
    ).join("");

    this.ticketStart = ticketStart;
    this.ticketEnd = ticketEnd;
    this.civ = civ;
    this.orderId = orderId;
    this.ticketCode = code;

    this.load();
    this.apply();
  }

  load(): boolean {
    let stored = localStorage.getItem("config");

    if (stored) {
      Object.assign(this, JSON.parse(stored));
      this.apply();
      return true;
    }

    this.save();
    return false;
  }

  save() {
    localStorage.setItem("config", JSON.stringify(this));
    this.apply();
  }

  apply() {
    const ticketHeaderDate = document.getElementById(
      "ticket-header-info-date",
    ) as Element;
    const ticketDataBarcode = document.getElementById("ticket-data-barcode");
    const ticketDataFullName = document.getElementById(
      "ticket-data-full-name",
    ) as HTMLElement;
    const ticketDataBirthday = document.getElementById(
      "ticket-data-birthday",
    ) as HTMLElement;
    const ticketDataIdContainer = document.getElementById(
      "ticket-data-id-container",
    ) as HTMLElement;
    const ticketDataId = document.getElementById(
      "ticket-data-id",
    ) as HTMLElement;
    const ticketDataCIV = document.getElementById(
      "ticket-data-civ",
    ) as HTMLElement;
    const ticketDataDateStart = document.getElementById(
      "ticket-data-date-start",
    ) as HTMLElement;
    const ticketDataDateEnd = document.getElementById(
      "ticket-data-date-end",
    ) as HTMLElement;
    const ticketDataOrderId = document.getElementById(
      "ticket-data-order-id",
    ) as HTMLElement;
    const ticketDataPosition = document.getElementById(
      "ticket-data-position",
    ) as HTMLElement;
    const ticketDataPrice = document.getElementById(
      "ticket-data-price",
    ) as HTMLElement;
    const ticketDataCode = document.getElementById(
      "ticket-data-code",
    ) as HTMLElement;

    const profileDataFullName = document.getElementById(
      "profile-data-full-name",
    ) as HTMLInputElement;
    const profileDataBirthday = document.getElementById(
      "profile-data-birthday",
    ) as HTMLInputElement;

    ticketHeaderDate.textContent = `Gültig vom ${this.ticketStart}`;
    ticketDataBarcode?.setAttribute("src", this.barcode);
    ticketDataFullName.textContent = this.fullName;
    ticketDataBirthday.textContent = this.birthday;
    ticketDataId.setAttribute("src", this.id);
    ticketDataCIV.textContent = `CIV ${this.civ}`;
    ticketDataDateStart.textContent = `Von: ${this.ticketStart} 00:00 Uhr`;
    ticketDataDateEnd.textContent = `Bis: ${this.ticketEnd} 00:00 Uhr`;
    ticketDataOrderId.textContent = `Auftragsnummer: ${this.orderId}`;
    ticketDataPosition.textContent = `Position: ${this.position}`;
    ticketDataPrice.textContent = `Gesamtpreis: ${this.price}€`;
    ticketDataCode.textContent = `Ticketcode: ${this.ticketCode}`;

    this.id === ""
      ? ticketDataIdContainer.setAttribute("hidden", "")
      : ticketDataIdContainer.removeAttribute("hidden");

    profileDataFullName.value = this.fullName;
    profileDataBirthday.value = this.birthday;
  }

  delete() {
    localStorage.removeItem("config");
    config = new Config();
  }
}

const fileToDataUrl = async (
  file: Blob,
  cb: (result: string) => void,
  err: () => void,
) => {
  const fr = new FileReader();
  fr.onload = () => {
    cb(fr.result as string);
  };
  fr.onerror = () => err();
  fr.readAsDataURL(file);
};

document.addEventListener("DOMContentLoaded", () => {
  config = new Config();

  const ticketDataBarcode = document.getElementById(
    "ticket-data-barcode",
  ) as HTMLElement;

  const profileDataFullName = document.getElementById(
    "profile-data-full-name",
  ) as HTMLInputElement;
  const profileDataBirthday = document.getElementById(
    "profile-data-birthday",
  ) as HTMLInputElement;
  const profileDataBarcode = document.getElementById(
    "profile-data-barcode",
  ) as HTMLInputElement;

  ticketDataBarcode.addEventListener("click", (e) => {
    alert(config.orderId);
  });

  document
    .getElementById("profile-data-id-btn")
    ?.addEventListener("change", (e) => {
      fileToDataUrl(
        (e.target as HTMLInputElement).files?.[0] as Blob,
        (res) => {
          config.id = res;
        },
        () => {
          alert("Couldn't load Image! Please try again or a different one!");
        },
      );
    });

  document
    .getElementById("profile-data-save-btn")
    ?.addEventListener("click", (e) => {
      if (profileDataFullName.value) {
        config.fullName = profileDataFullName.value;
      }
      if (profileDataBirthday.value) {
        config.birthday = profileDataBirthday.value;
      }
      if (profileDataBarcode.value !== "") {
        config.barcode = profileDataBarcode.value;
      } else {
        config.barcode = defaultBarcode;
      }

      config.save();
    });
  document
    .getElementById("profile-data-delete-btn")
    ?.addEventListener("click", (e) => {
      config.delete();
      config = new Config();
    });
});
