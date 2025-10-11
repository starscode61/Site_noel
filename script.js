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
