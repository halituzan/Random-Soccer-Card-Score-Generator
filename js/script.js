let formSub = document.getElementById("formSub")
let sidebar = document.querySelector(".sidebar")
let hamMenu = document.querySelector(".hamburger-menu")
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
let shopList = document.querySelector(".shop-list")
let card = document.getElementsByClassName("card")
let showmenu = document.getElementById("showmenu")

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

let shopListing = [
    {
        image: "triple-bundle.jpg",
        url: "https://www.etsy.com/listing/1329125262/special-triple-bundle-fifa-football",
        desc: "This product will offer you 3 different designs in 3 formats (JPG, PNG or PDF) you want. Please consider this. Customizable FIFA 2023 football card Blue Gold Fut Card, Fifa Card 2023",
        title: "Special Triple Bundle Fifa Football Cards, Fut Card High Definition, Special Gift Cards - Gold - Blue Gold - Black Gold - Gift Soccer Cards"
    },
    {
        image: "gold.jpg",
        url: "https://www.etsy.com/listing/1334416295/special-fifa-football-cards-high",
        desc: "This product is a digital product. It will be designed individually. It is not possible to refund. The product is delivered within 1-3 days from the moment the requested information is sent.",
        title: "Special Fifa Football Cards High Definition, Special Gift Cards, Special Days Gift Cards, Gold Color Gift Soccer Cards"
    },
    {
        image: "black-gold.jpg",
        url: "https://www.etsy.com/listing/1343096941/football-fifa-soccer-cards-fut-card-high",
        desc: "Customizable FIFA 2023 football card Black Gold Fut Card, Fifa Card 2023. The designs will be sent to you in 3 formats of your choice. Formats include, JPG,PNG and PDF",
        title: "Football Fifa Soccer Cards, Fut Card High Definition, Special Gift Cards, Special Days Gift Cards, Black Gold Color Gift Soccer Cards"
    },
    {
        image: "blue.jpg",
        url: "https://www.etsy.com/listing/1329116726/special-fifa-football-cards-fut-card",
        desc: "Customizable FIFA 2023 football card Black Gold Fut Card, Fifa Card 2023. The designs will be sent to you in 3 formats of your choice. Formats include, JPG,PNG and PDF",
        title: "Special Fifa Football Cards, Fut Card High Definition, Special Gift Cards, Special Days Gift Cards, Blue Gold Color Gift Soccer Cards"
    },
]

shopListing.forEach(e => {
    return shopList.innerHTML += `
    <div class="card text-black mt-2">
  <a href="${e.url}"><img class="card-img-top" src="./image/shop/${e.image}" alt="${e.title}"></a>
  <div class="card-body p-1">
    <h5 class="card-title" style="font-size:12px!important"> <a href="${e.url}">${e.title}</a></h5>
  </div>
</div>
    
    `
})

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
    console.log(window.innerWidth)
    if (window.innerWidth < 900) {
        sidebar.style.display = "none"
        hamMenu.style.display = "block"
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
showmenu.onclick = () => {
    sidebar.style.display = "block"
    hamMenu.style.display = "none"

}

(async function () {
    await fetch('./js/countries.json')
        .then((response) => response.json())
        .then((json) => countriesData = json);
    countries.innerHTML += countriesData.map(item => `<option value="${item.alpha3}">${item.name}</option>`)

}())
