document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const logoButton = document.getElementById("logoButton");
  const saveContact = document.getElementById("saveContact");

  // Intro -> card transition.
  window.setTimeout(() => {
    intro.classList.add("is-hidden");
  }, 3300);

  // Clicking the small logo restarts the intro animation.
  logoButton.addEventListener("click", () => {
    intro.classList.remove("is-hidden");
    window.setTimeout(() => intro.classList.add("is-hidden"), 2300);
  });

  // Generate a real vCard without requiring any backend.
  saveContact.addEventListener("click", () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Зацепина;Регина;;;",
      "FN:Регина Зацепина",
      "ORG:Аркобалено Инжиниринг",
      "TITLE:Исполнительный директор",
      "TEL;TYPE=CELL:+79258408433",
      "EMAIL:r.zacepina@arcoengi.ru",
      "ADR;TYPE=WORK:;;Рязанский проспект, д. 10 с18;Москва;;;Россия",
      "URL:https://t.me/arcoengi",
      "END:VCARD"
    ].join("\\r\\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Regina_Zatsepina.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
});
