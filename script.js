const flocon_box = document.getElementById("flocon-box");
const curseur = document.getElementById("curseur");


let mousex = 0
let mousey = 0
document.addEventListener("mousemove", function(e){
    mousex = e.pageX
    mousey = e.pageY
    curseur.style.left = e.pageX + "px";
    curseur.style.top = e.pageY + "px";
})



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

ok.addEventListener("click", () => {
    hidePopup();
    create_follow()
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

const follow_box = document.getElementById("follow_curseur")
const vitesse = 3


function follow(objet) {
    let objetx = objet.offsetLeft
    let objety = objet.offsetTop
    objetx = objet.offsetLeft
    objety = objet.offsetTop
    let a = mousex - objetx
    let b = mousey - objety
    if (a < 0){
        objet.style.transform = "scaleX(1)"
    }
    else {
        objet.style.transform = "scaleX(-1)"
    }
    let distance = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))

    if (distance > 10 ) {
        let ratio = distance/vitesse
        objet.style.left = objetx + a/ratio + "px"
        objet.style.top = objety + b/ratio + "px"
        requestAnimationFrame(() => follow(objet))
    }
    else {
        showPopup()
        objet.remove()
        console.log("a");
    }
}


function create_follow() {
    const objet = document.createElement("div")
    objet.textContent = "🦌🛷"
    objet.style.position = "absolute"
    objet.style.fontSize = "40px"
    
    objet.style.left = 0
    objet.style.top = 0
    document.body.appendChild(objet)
    
    requestAnimationFrame(() => follow(objet))
    console.log("a");
}
