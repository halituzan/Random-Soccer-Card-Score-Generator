let formSub = document.getElementById("formSub")
let pac = document.getElementById("pac")
let sho = document.getElementById("sho")
let pas = document.getElementById("pas")
let dri = document.getElementById("dri")
let def = document.getElementById("def")
let phy = document.getElementById("phy")
let pstn = document.getElementById("pozisyon")
let totalScore = document.getElementById("total-score")
let imagePerson = document.getElementById("imagePerson")
let blah = document.getElementById("blah")
let frameBlah = document.getElementById("frame-blah")
let unlem = document.querySelector(".unlem")
let uyari = document.querySelector(".uyari")



let arr = []
formSub.addEventListener("submit", (e) => {
    arr = []
    e.preventDefault()
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries())
    const { maxNumber, minNumber, position } = values
    for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * (maxNumber - minNumber)) + Number(minNumber))
        if (i === 5) {
            console.log(2)
            pac.innerHTML = arr[0] + " PAC";
            sho.innerHTML = arr[1] + " SHO";
            pas.innerHTML = arr[2] + " PAS";
            dri.innerHTML = arr[3] + " DRI";
            def.innerHTML = arr[4] + " DEF";
            phy.innerHTML = arr[5] + " PHY";
            pstn.innerHTML = values.position;
            const total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5];
            totalScore.innerHTML = Math.floor(total / 6)
        }
    }
    console.log(values.position)

    const [file] = imagePerson.files
    if (file) {
        frameBlah.src = URL.createObjectURL(file);
        frameBlah.style.display = "block";
    }
    console.log(frameBlah)


})

imagePerson.onchange = evt => {
    const [file] = imagePerson.files
    if (file) {
        blah.src = URL.createObjectURL(file)
        blah.style.display = "block"
    }
}
unlem.onmouseover = e =>{
    uyari.style.display ="flex"
}
unlem.onmouseout = e =>{
    uyari.style.display ="none"
}