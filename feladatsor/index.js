

/**
 * @type {{Title:string,colSpan?:Number}[]} tömb ami tartalmazza a fejléc elemei objecteket
 */
const HeaderArr = [ //definiáljuk a fejléc tömböt
    {
        Title:'Szerző' //szerző elem
    },
    {
        Title:'Mű' //mű elem
    },
    {
        Title:'Fogalmak', //Fogalom elem
        colSpan: 2 //Colspan, értéke 2
    }
]
/**
 * @type {WestDat []} //adattömb
 */
const WestArr = [ //tömb definiálása
    {
        Author:'Ady Endre', //szerző elem
        Creation:'Őrizem a szemed', //mű elem
        FirstConcept:'Csinszka-vers', //első fogalom elem
        SecondConcept:'hitvesi költészet' //második fogalom elem
    },
    {
        Author:'Babits Mihály', //szerző elem
        Creation:'In Horatium', //mű elem
        FirstConcept:'óda',  //első fogalom elem
    },
    {
        Author:'Kosztolányi Dezső', //szerző elem
        Creation:'A szegény kisgyermek panaszai', //mű elem
        FirstConcept:'versciklus', //első fogalom elem
        SecondConcept:'freudizmus' //második fogalom elem
    },
    {
        Author:'Kosztolányi Dezső', //szerző elem
        Creation:'Édes Anna', //mű elem
        FirstConcept:'regény', //második fogalom elem
    },
    {
        Author:'Móricz Zsigmond', //szerző elem
        Creation:'Tragédia', //mű elem
        FirstConcept:'novella', //első fogalom elem
        SecondConcept:'dzentri' //második fogalom elem
    }
]
/**
 * @type {HTMLDivElement} div section
 */
const divSection = document.createElement('div')//div element létrehozása
document.body.appendChild(divSection) //hozzáfűzés a htmlhez
divSection.id = 'jssection' //azonosító beállítása
/**
 * @type {HTMLTableElement} table
 */
const table = document.createElement('table') //táblázat elem létrehozása
divSection.appendChild(table) //hozzáfűzzük a html törzséhez

/**
 * @type {HTMLTableSectionElement} fejléc
 */
const thead = document.createElement('thead') //fejléc elem létrehozása
table.appendChild(thead) //hozzáfűzzük a táblázathoz

/**
 * @type {HTMLTableSectionElement} táblázat törzse
 */
const tbody = document.createElement('tbody') //létrehozzuk a táblázat törzsét
table.appendChild(tbody) //hozzáfűzzük a táblázathoz
tbody.id = "jsTbody" //adunk neki egy azonosítót

renderHeader(HeaderArr,thead) //meghívjuk a függvényt, rendereli a fejlécet
renderTable(WestArr,tbody) //meghívjuk a függvényt, ami rendereli a táblázat törzset

/**
 * @type {HTMLInputElement} jelölőnégyzet
 */
const checkBox = document.querySelector('#tableselector') //checkbox lekérése id alapján
handleCheckBox(checkBox) //függvény meghívása, hogy alapból csak 1 táblázat jelenjen meg
checkBox.addEventListener('change',function(e){ //change esemény kezelése a checkbox elemre
    /**
     * @type {HTMLInputElement} eventlistener target értéke
     */
    const target = e.target //target értéke egy változóban
    handleCheckBox(target) //checkboxkezelő függvény meghívása
})

/**
 * @type {HTMLFormElement} form létrehozása
 */
const jsform = document.createElement('form') //form létrehozása, változóba tétele
divSection.appendChild(jsform) //fűzés a jssection divjéhez
jsform.id = 'jsform' //azonosító megadása

/**
 * @type {HTMLDivElement} div szerző section létrehozása
 */
const szerzoDiv = document.createElement('div') //div létrehozása,változó tárolása
jsform.appendChild(szerzoDiv) //fűzése a js formjához

/**
 * @type {HTMLLabelElement} szerző felirata
 */
const szerzoLabel = document.createElement('label') //felirat létrehozása
szerzoDiv.appendChild(szerzoLabel) //fűzés a szerző divhez
/**
 * @type {HTMLBRElement} sortörés
 */
const szerzoBr = document.createElement('br') //sortörés elem létrehozása,tárolása
szerzoDiv.appendChild(szerzoBr) //divhez fűzés
szerzoLabel.htmlFor = 'elso' //megadjuk a for tulajdonságot, milyen azonosítóra mutat
szerzoLabel.innerText = 'Szerző' //belső szöveg megadása

/**
 * @type {HTMLInputElement} szerző bemenet
 */
const szerzoInput = document.createElement('input') //bemenet létrehozása, tárolása
szerzoDiv.appendChild(szerzoInput) //fűzés a szerző divhez
szerzoInput.id = 'elso' //bemenet azonosítójának beállítása
szerzoInput.name = 'Szerzo' //nevet megadjuk

/**
 * @type {HTMLDivElement} div az errornak
 */
const szerzoError = document.createElement('div') //div létrehozása,tárolása
szerzoDiv.appendChild(szerzoError) //divhez fűzés
szerzoError.classList.add('error') //error osztály hozzáadásaa divhez

/**
 * @type {HTMLDivElement} div mű section létrehozása
 */
const muDiv = document.createElement('div') //div elem létrehozása,tárolása
jsform.appendChild(muDiv) //fűzés a formhoz

/**
 * @type {HTMLLabelElement} Mű felirata
 */
const muLabel = document.createElement('label') //felirat elem létrehozása,tárolása
muDiv.appendChild(muLabel) //fűzés a mű divhez
/**
 * @type {HTMLBRElement} sortörés
 */
const muBreak = document.createElement('br') //sortörés létrehozás,tárolás
muDiv.appendChild(muBreak) //divhez fűzés 
muLabel.htmlFor = 'masodik' //for tulajdonság beállítása, melyik azonosítóhoz tartozik
muLabel.innerText = 'Mű' //belső szöveg

/**
 * @type {HTMLInputElement} Mű bemenet
 */
const muInput = document.createElement('input') //bemenet létrehozása,tárolása
muDiv.appendChild(muInput) //hozzáfűzés a mű divhez
muInput.id = 'masodik' //azonosító beállítás
muInput.name = 'Mu1' //név tulajdonság beállítása

/**
 * @type {HTMLDivElement} div az errornak
 */
const muError = document.createElement('div') //div létrehozása,tárolása
muDiv.appendChild(muError) //fűzés a mű divhez
muError.classList.add('error') //error osztály hozzáadása az error divhez

/**
 * @type {HTMLDivElement} div első fogalom section létrehozása
 */
const firstConceptDiv = document.createElement('div') //div létrehozása,tárolása
jsform.appendChild(firstConceptDiv) //fűzés a formhoz

/**
 * @type {HTMLLabelElement} első fogalom felirata
 */
const firstConceptLabel = document.createElement('label') //első fogalom feliratának létrehozása, tárolása
firstConceptDiv.appendChild(firstConceptLabel) //fűzés a divhez
/**
 * @type {HTMLBRElement} sortörés
 */
const firstConceptBr = document.createElement('br') //sortörés létrehozás,tárolás
firstConceptDiv.appendChild(firstConceptBr) //divhez fűzés
firstConceptLabel.htmlFor = 'harmadik' //for tulajdonság beállítása, melyik azonosítóhoz tartozik
firstConceptLabel.innerText = 'Első fogalom' //belső szöveg megadása

/**
 * @type {HTMLInputElement} első fogalom bemenet
 */
const firstConceptInput = document.createElement('input') //bemeneti mező létrehozása, tárolása
firstConceptDiv.appendChild(firstConceptInput) //divhez fűzése
firstConceptInput.id = 'harmadik' //azonosító megadása
firstConceptInput.name = 'Fogalom1' //név tulajdonság megadása

/**
 * @type {HTMLDivElement} div az errornak
 */
const firstConceptError = document.createElement('div') //error div létrehozása, tárolása
firstConceptDiv.appendChild(firstConceptError) //divhez fűzés
firstConceptError.classList.add('error') //error osztály hozzáadása az error divhez

/**
 * @type {HTMLDivElement} div második fogalom section létrehozása
 */
const secondConceptDiv = document.createElement('div') //div létrehozása,tárolása
jsform.appendChild(secondConceptDiv) //formhoz fűzés

/**
 * @type {HTMLLabelElement} második fogalom felirata
 */
const secondConceptLabel = document.createElement('label') //felirat létrehozása, tárolása
secondConceptDiv.appendChild(secondConceptLabel) //fűzés a második fogalom divhez
/**
 * @type {HTMLBRElement} sortörés
 */
const secondConceptBr = document.createElement('br') //sortörés elem létrehozása, tárolása
secondConceptDiv.appendChild(secondConceptBr) //divhez fűzés
secondConceptLabel.htmlFor= 'negyedik' //for tulajdonság megadása, melyik azonosítóra mutat
secondConceptLabel.innerText = 'Második Fogalom' //belső szöveg megadása

/**
 * @type {HTMLInputElement} második fogalom bemenet
 */
const secondConceptInput = document.createElement('input') //bemenet mező létrehozás,tárolás
secondConceptDiv.appendChild(secondConceptInput) //divhez fűzés
secondConceptInput.id = 'negyedik' //azonosító megadása
secondConceptInput.name = 'Fogalom2' //név tulajdonság megadása

/**
 * @type {HTMLDivElement} div az errornak
 */
const secondConceptError = document.createElement('div') //error div létrehozása
secondConceptDiv.appendChild(secondConceptError) //hozzáfűzés a második fogalom divhez
secondConceptError.classList.add('error') //error divhez hozzáadjuk az error classot

/**
 * @type {HTMLButtonElement} gomb, amivel majd az adatokat táblázathoz fűzzük
 */
const jsButton = document.createElement('button') //gomb elem létrehozás,tárolás
jsform.appendChild(jsButton) //hozzáfűzzük a formhoz
jsButton.innerText = 'Submit' //belső szövegét megadjuk




