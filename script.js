const flocon_box = document.getElementById("flocon-box");

function create_flocon() {
    const flocon = document.createElement("div");
    flocon.classList.add("flocon");
    flocon.textContent = "❄";
    let positonne = Math.random() * 100;
    flocon.style.left = positonne + "vw";
    flocon_box.appendChild(flocon);
    setTimeout(() => flocon.remove(), 6000);
}
setInterval(create_flocon, 100);

const popup = document.getElementById("popup");
const ok = document.getElementById("ok");

function showPopup() {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function hidePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
}


function NextPopup() {
    const delay = (7 + Math.random() * 3) * 1000;
    setTimeout(showPopup, delay);
}

ok.addEventListener("click", () => {
    hidePopup();
    NextPopup();
});

showPopup();

const curseur = document.getElementById("curseur");
document.addEventListener("mousemove", e => {
    curseur.style.left = e.pageX + "px";
    curseur.style.top = e.pageY + "px";
});

function majCompteur() {
    const compteur = document.getElementById("compteur");
    const now = new Date();
    const year = now.getFullYear();
    const christmas = new Date(year, 11, 25);
    if (now > christmas) christmas.setFullYear(year + 1);
    const diff = christmas - now;
    const jours = Math.ceil(diff / (1000 * 60 * 60 * 24));
    compteur.textContent = `Il reste ${jours} jour${jours > 1 ? "s" : ""} avant Noël !`;
}
majCompteur();
setInterval(majCompteur, 3600000);
