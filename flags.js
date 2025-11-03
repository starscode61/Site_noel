let all_flags = null

fetch("flags.json")
    .then(res => res.json())
    .then(data => {
        all_flags = data;
        for (let i = 0; i < 5; i++){
            const div = document.createElement("div")
            div.id = i
            document.body.appendChild(div)
            
            if (i % 2 === 0) {
                setInterval(() => create_flag("left", i * 15 + 20, document.getElementById(i)), 1000);
            } else {
                setInterval(() => create_flag("right", i * 15 + 20, document.getElementById(i)), 1000);
            }
            
        }
           
        
    })


function create_flag(direction, position, box) {
    const little_box = document.createElement("div");
    const number = Math.floor(Math.random() * all_flags.length);
    const img = document.createElement("img")
    img.src ="assets/flags/" + all_flags[number]["code"] + ".svg"
    const text = document.createElement("div")
    text.textContent = all_flags[number]["texte"]
    text.style.fontWeight = "bold"
    text.style.color = "rgba(0,125,0,255)"
    little_box.appendChild(img)
    little_box.appendChild(text)
    little_box.classList.add(direction);
    little_box.style.top = position + "vh";
    box.appendChild(little_box);
    setTimeout(() => little_box.remove(), 15000);
}

