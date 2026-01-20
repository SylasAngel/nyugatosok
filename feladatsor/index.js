

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

generateForm(divSection) //legeneráljuk a formot a függvény segítségével

jsform.addEventListener('submit',function(e) //eventlistener hozzáadása a formhoz submit eseményre
{
    e.preventDefault() //az oldal alapértelmezett működést

    /**
     * @type {HTMLFormElement}a form a target
     */
    const target = e.target // az esemény targetjét egy változóba belerakjuk

    /**
     * @type {HTMLInputElement} első bemenet elem
     */
    const szerzoInput = target.querySelector('#elso') //első inputot azonosító alapján lekérjük,beletesszük egy változóba
    /**
     * @type {HTMLInputElement} második bemenet elem
     */
    const muInput = target.querySelector('#masodik') //második inputot azonosító alapján lekérjük,beletesszük egy változóba
    /**
     * @type {HTMLInputElement} harmadik bemenet elem
     */
    const elsoFogInput = target.querySelector('#harmadik') //harmadik inputot azonosító alapján lekérjük,beletesszük egy változóba
    /**
     * @type {HTMLInputElement} negyedik bemenet elem
     */    
    const masodikFogInput = target.querySelector('#negyedik') //negyedik inputot azonosító alapján lekérjük,beletesszük egy változóba

    /**
     * @type {string} a szerző bemenetében lévő érték
     */
    const szerzoValue = szerzoInput.value //első input értékének tárolása
    /**
     * @type {string} a mű bemenetében lévő érték
     */
    const muValue = muInput.value //második input értékéne tárolása
    /**
     * @type {string} az első fogalom bemenetében lévő érték
     */
    const elsoFogValue = elsoFogInput.value //harmadik input értékének tárolása
    /**
     * @type {string} a második fogalom bemenetében lévő érték
     */
    const masodikFogValue = masodikFogInput.value //harmadik input értékének tárolása
    /**
    * @type {WestDat} adat object
    */
    const newObj = {} //üres object létrehozása
    newObj.Author = szerzoValue //objekt szerző értékét hozzáadjuk az objecthez
    newObj.Creation = muValue  //objekt mű értékét hozzáadjuk az objecthez
    newObj.FirstConcept = elsoFogValue //objekt első fogalom értékét hozzáadjuk
    if(masodikFogValue) //vizsgáljuk hogy a második fogalom érték üres-e
    {
        newObj.SecondConcept = masodikFogValue //hozzáadjuk az objecthez a második fogalmat is
    }
    /**
     * @type {HTMLTableSectionElement} táblázat törzse
     */
    const tbody = document.querySelector('#jsTbody') //lekérjuk id alapján a js táblázat törzsét
    WestArr.push(newObj) //az adattömbhöz hozzáadjuk ezt az objectet is
    renderTable(WestArr,tbody) //rendereljük újra a táblázatot
    target.reset() //reseteljük a formot, minden input újra üres lesz
})




