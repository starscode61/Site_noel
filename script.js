const box = document.getElementById("flocon-box")

function create_flocon() {
    const flocon = document.createElement("div")
    flocon.classList.add("flocon")
    flocon.textContent = "❄"
    let positonne = Math.random() * 100
    flocon.style.left = positonne + "vw"
    
    box.appendChild(flocon)

    setTimeout(() => flocon.remove(),6000 )
}

setInterval(create_flocon,100)



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
    scheduleNextPopup();
});

function scheduleNextPopup() {
    const delay = (5 + Math.random() * 5) * 1000;
    setTimeout(showPopup, delay);
}

showPopup();
