function majCompteur() {
    const compteur = document.getElementById("compteur");
    const now = new Date();
    const year = now.getFullYear();
    const christmas = new Date(year, 11, 25);
    if (now > christmas) christmas.setFullYear(year + 1);
    const diff = christmas - now;
    const jours = Math.ceil(diff / (1000 * 60 * 60 * 24));
    compteur.textContent = `Il reste ${jours} jour${jours > 1 ? "s" : ""} avant Noël !`;
    compteur.style.fontSize = '50px';
}
majCompteur();
setInterval(majCompteur, 3600000);
