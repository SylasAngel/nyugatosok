

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
 * @type {{formId:string,formName:string,formText:string}[]} a form fieldek adatai object tömbben
 */
const jsFormData = [ //tömb definíció
    {
        formId :'elso', //formfield azonosító
        formName:'Szerzo', //formfield name
        formText :'Szerző' //formfield szöveg
    },
    {
        formId :'masodik', //formfield azonosító
        formName:'Mu1', //formfield name
        formText :'Mű' //formfield szöveg
    },
    {
        formId :'harmadik', //formfield azonosító
        formName:'Fogalom1', //formfield name
        formText :'Első fogalom' //formfield szöveg
    },
    {
        formId:'negyedik', //formfield azonosító
        formName:'Fogalom2', //formfield name
        formText:'Második fogalom' //formfield szöveg
    }
]
/**
 * @type {HTMLFormElement} form létrehozása
 */
const jsform = document.createElement('form') //form létrehozása, változóba tétele
divSection.appendChild(jsform) //fűzés a jssection divjéhez
jsform.id = 'jsform' //azonosító megadása

for(const e of jsFormData) //végigiterálunk a jsFormDatán
{
    createFormField(e.formId,e.formName,e.formText,jsform) //függvény meghívása, az objectet adataival
}


/**
 * @type {HTMLButtonElement} gomb, amivel majd az adatokat táblázathoz fűzzük
 */
const jsButton = document.createElement('button') //gomb elem létrehozás,tárolás
jsform.appendChild(jsButton) //hozzáfűzzük a formhoz
jsButton.innerText = 'Submit' //belső szövegét megadjuk




