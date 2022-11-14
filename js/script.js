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
let countries = document.querySelector("#countries")
let countryFlag = document.querySelector("#countryflag")
let defaultimage = document.querySelector("#defaultimage")
let arr = []
let countriesData = []

let cardsValue = [
    {
        value: "black-gold",
        image: "soccer-card-default.png"
    },
    {
        value: "gold",
        image: "soccer-card-gold.png"
    },
    {
        value: "blue-gold",
        image: "soccer-card-blue-gold.png"
    },
    {
        value: "champions-league-black",
        image: "champions-league-black.png"
    },
    {
        value: "champions-league-blue",
        image: "champions-league-blue.png"
    },
]


formSub.addEventListener("submit", (e) => {
    arr = []
    e.preventDefault()
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries())
    const { maxNumber, minNumber, position, countries, cards } = values
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

    let selectedCountry = countriesData.filter(i => i.alpha3 === countries)
    countryFlag.innerHTML = `<img src="${selectedCountry[0].file_url}" alt="${selectedCountry[0].name}" style="width: 50px!important;height:30px!important;
"/>`
    let selectedCard = cardsValue?.filter(i => i.value === cards)
    defaultimage.src = `./image/${selectedCard[0].image}`
    const [file] = imagePerson.files
    if (file) {
        frameBlah.src = URL.createObjectURL(file);
        frameBlah.style.display = "block";
    }



})

imagePerson.onchange = evt => {
    const [file] = imagePerson.files
    if (file) {
        blah.src = URL.createObjectURL(file)
        blah.style.display = "block"
    }
}
unlem.onmouseover = e => {
    uyari.style.display = "flex"
}
unlem.onmouseout = e => {
    uyari.style.display = "none"
}

(async function () {
    await fetch('./js/countries.json')
        .then((response) => response.json())
        .then((json) => countriesData = json);
    countries.innerHTML += countriesData.map(item => `<option value="${item.alpha3}">${item.name}</option>`)

}())

