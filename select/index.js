/**
 * @typedef {{Author:string,Creation:string,FirstConcept:string,SecCreation?:string,SecondConcept?:string}} WestDat  tartalmazza a táblázatok adatainak típusát
 */

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
const sectionDiv = document.createElement('div') //div létrhozása a táblázatnak és gomboknak
document.body.appendChild(sectionDiv) //hozzáfűzás a htmlhez
sectionDiv.id = 'jssection' //azonosító megadása
/**
 * @type {HTMLTableElement} table
 */
const table = document.createElement('table') //táblázat elem létrehozása
sectionDiv.appendChild(table) //hozzáfűzzük a html törzséhez

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

/**
 * létrehoz egy cellát
 * @param {string} inText a cella belső szövege
 * @param {string} type milyen típusu cella lesz th/td
 * @param {HTMLTableRowElement} toAppend amihez hozzáfüzzük a cellát
 * @returns {HTMLTableCellElement} visszatér a cellával
 */
function createCell(inText, type,toAppend) //definiáljuk a függvényt 
{
    /**
     * @type {HTMLTableCellElement} cella
     */
    const cell = document.createElement(type) //létrehozunk egy cellát
    toAppend.appendChild(cell) //hozzáfűzzük amit megadtunk paraméternek
    cell.innerText = inText //belső szöveg megadása
    return cell //visszatér a cellával
}

/**
 * függvény ami rendereli a fejlécet
 * @param {{Title,colSpan?:Number}[]} headerList tömb ami a fejléc elemeit tartalmazza
 * @param {HTMLTableSectionElement} toAppendH amihez hozzáfűzzük az elemeket
 * @returns {void} nem tér vissza semmivel
 */
function renderHeader(headerList,toAppendH) //függvény definíció
{
    for(const e of headerList) //végigiterálunk a tömb elemein
    {
        /**
         * @type {HTMLTableCellElement} cella
         */
        const tableHeader = createCell(e.Title,'th',toAppendH) //létrehozunk, hozzáfűzzük a táblázathoz, és egy változóba tesszük a feléc cellát
        if(e.colSpan != undefined) //megnézzük, hogy a colspan elem undefined-e, igazág
        { 
            tableHeader.colSpan = 2 //az oszlopszélességet átállítjuk 2-re
        }
    }
}
renderHeader(HeaderArr,thead) //meghívjuk a függvényt, rendereli a fejlécet
/**
 * rendereli a táblázatot
 * @param {WestDat []} dataArray tömb ami tartalmazza a táblázat elemeit
 * @param {HTMLTableSectionElement} tableBody táblázat törzse, amihez hozzáfűzzük az adatokat
 * @returns {void} nem returnol semmivel
 */
function renderTable(dataArray,tableBody) //függvény definiálás
{
    tableBody.innerHTML = '' //a táblázattörzset kiürítjük
    for(const e of dataArray) //végigiterálunk az adattömbön
    {
        /**
         * @type {HTMLTableRowElement} táblázat sora
         */
        const tableRow = document.createElement('tr') //táblázat sora egy változóban
        tableBody.appendChild(tableRow) //hozzáfűzzük a sort

        createCell(e.Author,'td',tableRow) //1. cella létrehozása, és hozzáfűzése
        createCell(e.Creation,'td',tableRow) //2. cella létrehozása, és hozzáfűzése
        /**
         * @type {HTMLTableCellElement} cella
         */
        const tableData = createCell(e.FirstConcept,'td',tableRow) //3. cella létrehozása, és hozzáfűzése, és változóba tevése
        if(e.SecondConcept != undefined) //megnézzük a második fogalmat hogy undefined-e, igazág
        {
            createCell(e.SecondConcept,'td',tableRow) //létrehozunk és hozzáfűzzük a 4. elemet
        }
        else{ //hamiság
            tableData.colSpan = 2 //oszlopszélességet átállítjuk 2-re
        }
    }
}
renderTable(WestArr,tbody) //meghívjuk a függvényt, ami rendereli a táblázat törzset

/**
 * új sort hozzáfűz a táblázathoz
 * @param {WestDat} rowObj object, ami tartalmazza a sor adatait
 * @param {HTMLTableSectionElement} AppendTo amihez hozzáakarjuk fűzni a sort
 * @returns {void} nem returnol semmit
 */
function addNewRow(rowObj,AppendTo) //függvény definiálás
{
    /**
     * @type {HTMLTableRowElement} sor element
     */
        const tableRow = document.createElement('tr') //egy sort létrehozunk egy változóban
        AppendTo.appendChild(tableRow) //hozzáfűzzük ahhoz amit megadtunk

        /**
         * @type {HTMLTableCellElement} cella
         */
        const CellData = createCell(rowObj.Author,'td',tableRow) //cella létrehozása,fűzése és változóba tétele
        createCell(rowObj.Creation,'td',tableRow) //cella létrehozása,fűzés
        createCell(rowObj.FirstConcept,'td',tableRow) //cella létrehozása,fűzés
        if(rowObj.SecCreation != undefined && rowObj.SecondConcept != undefined) //ellenőrizzük hogy a második mű és második fogalom elem undefined-e,igaz ág
        {
            /**
             * @type {HTMLTableRowElement} sor
             */
            const tableRowSec = document.createElement('tr') //táblázat 2. sor létrehozása
            AppendTo.appendChild(tableRowSec) //hozzáfűzés
            createCell(rowObj.SecCreation,'td',tableRowSec) //cella létrehozása
            createCell(rowObj.SecondConcept,'td',tableRowSec) //cella létrehozása
            CellData.rowSpan= 2 //sorszélesség átállítása 2-re
        }
}
/**
 * @type {HTMLButtonElement} gomb
 */
const jsSimpleButton = document.createElement('button') // gomb létrehozása
sectionDiv.appendChild(jsSimpleButton) //hozzáfűzzük a html-hez
jsSimpleButton.innerText = 'JsSimpleButton' //belső szövege
jsSimpleButton.addEventListener('click',function(){ //eventlistener hozzáadása clickre
    /**
     * @type {WestDat} object tartalmazza az új sor elemeit
     */
    const newObj = { //object meghatázorása
        Author:'NewSimAuthor', //szerző elem
        Creation:'NewSimCreation', //mű elem
        FirstConcept:'NewSimConcept1' //fogalom
    }
    WestArr.push(newObj) //adattömbhöz hozzáadás
    renderTable(WestArr,tbody) //táblázatot újra rendereljük
})

/**
 * @type {HTMLButtonElement} gomb
 */
const jsDoubleButton = document.createElement('button') // gomb létrehozása
sectionDiv.appendChild(jsDoubleButton) //hozzáfűzzük a html-hez
jsDoubleButton.innerText = 'JsDoubleButton' //belső szövege
jsDoubleButton.addEventListener('click',function(){ //eventlistener hozzáadása clickre
    /**
     * @type {WestDat} object tartalmazza az új sor elemeit
     */
    const newObj = { //object meghatározás
        Author:'NewDoubAuthor', //szerző elem
        Creation:'NewDoubCreation', //mű elem
        FirstConcept:'NewDoubConcept1', //fogalom
        SecondConcept:'NewDoubConcept2' //fogalom 2
    } 
    WestArr.push(newObj) //adattömbhöz hozzáadás
    renderTable(WestArr,tbody) //táblázatot újra rendereljük
})

/**
 * @type {HTMLButtonElement} gomb
 */
const htmlSimpleButton = document.querySelector('#htmlSimpleButton')// gomb változóba tétele id alapján, lekérjük
/**
 * @type {HTMLTableSectionElement} táblázat törzs
 */
const htmlTableBody = document.querySelector('#HtmlBody') //lekérjük id alapján a html-es táblázatot
htmlSimpleButton.addEventListener('click',function() //eventlistener hozzáadása clickre
{
    /**
     * @type {WestDat} object ami tartalmazza az új sor elemeit
     */
    const newObj = { //object meghatározás
        Author:'HtmlAuthor', //szerző elem
        Creation:'HtmlCreation', //mű elem
        FirstConcept:'HtmlFirstConcept', //fogalom
    }
    addNewRow(newObj,htmlTableBody) //függvény meghívása, új sor hozzáadása
})

/**
 * @type {HTMLButtonElement} gomb
 */
const htmlDoubleButton = document.querySelector('#htmlDoubleButton') // gomb változóba tétele id alapján, lekérjük
htmlDoubleButton.addEventListener('click',function() //eventlistener hozzáadása clickre
{
    /**
     * @type {WestDat} object ami tartalmazza az új sor elemeit
     */
    const newObj = { //object meghatározása
        Author:'HtmlAuthor', //szerző elem
        Creation:'HtmlCreation', //mű elem
        FirstConcept:'HtmlFirstConcept', //fogalom
        SecCreation: 'HtmlSecCreation', //mű elem 2
        SecondConcept: 'HtmlSecConcept' //fogalom 2
    }
    addNewRow(newObj,htmlTableBody) //új sor hozzáadása
})