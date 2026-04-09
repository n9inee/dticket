import { defaultBarcode } from "./data";

let config: Config;

export default class Config {
  fullName: string = "Max Mustermann";
  birthday: string = "01.01.1990";
  barcode: string = defaultBarcode;
  idPic: string = "";

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
    const validFromText = document.querySelector(
      "#ticket-header > div > p:nth-child(2)",
    ) as Element;
    const dataContainerPs = document.querySelectorAll(
      "#ticket-data-container > p",
    );
    const dataPicContainer = document.getElementById(
      "ticket-data-pic-container",
    ) as HTMLElement;
    const dataPic = document.getElementById("ticket-data-pic") as HTMLElement;
    const barcode = document.getElementById("ticket-data-barcode");

    validFromText.textContent = "Gültig vom " + this.ticketStart;

    barcode?.setAttribute("src", this.barcode);

    (dataContainerPs[0] as HTMLElement).textContent = this.fullName;
    (dataContainerPs[1] as HTMLElement).textContent = this.birthday;
    dataPic.setAttribute("src", this.idPic);
    (
      (dataContainerPs[2] as HTMLElement).firstChild as HTMLElement
    ).textContent = `CIV ${this.civ}`;
    (dataContainerPs[8] as HTMLElement).textContent =
      `Von: ${this.ticketStart} 00:00 Uhr`;
    (dataContainerPs[9] as HTMLElement).textContent =
      `Von: ${this.ticketEnd} 00:00 Uhr`;
    (dataContainerPs[11] as HTMLElement).textContent =
      `Auftragsnummer: ${this.orderId}`;
    (dataContainerPs[12] as HTMLElement).textContent =
      `Position: ${this.position}`;
    (dataContainerPs[13] as HTMLElement).textContent =
      `Gesamtpreis: ${this.price}€`;
    (dataContainerPs[15] as HTMLElement).textContent =
      `Ticketcode: ${this.ticketCode}`;

    this.idPic === ""
      ? dataPicContainer.setAttribute("hidden", "")
      : dataPicContainer.removeAttribute("hidden");

    (document.getElementById("profile-data-name") as HTMLInputElement).value =
      this.fullName;
    (
      document.getElementById("profile-data-birthday") as HTMLInputElement
    ).value = this.birthday;
    (
      document.getElementById("profile-data-barcode") as HTMLInputElement
    ).value = this.barcode;
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
  const barcode = document.getElementById("ticket-data-barcode");

  if (barcode !== null)
    barcode.addEventListener("click", (e) => {
      alert(config.orderId);
    });

  const dataFullName = document.getElementById(
    "profile-data-name",
  ) as HTMLInputElement;
  const dataBirthday = document.getElementById(
    "profile-data-birthday",
  ) as HTMLInputElement;
  const dataBarcode = document.getElementById(
    "profile-data-barcode",
  ) as HTMLInputElement;

  document
    .getElementById("profile-data-pic-chooser")
    ?.addEventListener("change", (e) => {
      fileToDataUrl(
        (e.target as HTMLInputElement).files?.[0] as Blob,
        (res) => {
          config.idPic = res;
        },
        () => {
          alert("Couldn't load Image! Please try again or a different one!");
        },
      );
    });

  document
    .getElementById("profile-data-save-btn")
    ?.addEventListener("click", (e) => {
      if (dataFullName.value) {
        config.fullName = dataFullName.value;
      }
      if (dataBirthday.value) {
        config.birthday = dataBirthday.value;
      }
      if (dataBarcode.value) {
        config.barcode = dataBarcode.value;
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
