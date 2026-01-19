/**
 * @typedef {{Author:string,Creation:string,FirstConcept:string,SecCreation?:string,SecondConcept?:string}} WestDat  tartalmazza a táblázatok adatainak típusát
 */

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
 * kezeli a táblázatokat az alapján hogy a checkbox be van-e pipálva
 * @param {HTMLInputElement} CheckBoxValue checkbox elem
 * @returns {void} nem returnol semmivel
 */
function handleCheckBox(CheckBoxValue) //függvény definiálás
{
    /**
     * @type {HTMLDivElement} html table divje
     */
    const htlmSection = document.querySelector('#htmlsection') //html táblázat divjének lekérése id alapján,tárolása változóba
    /**
     * @type {HTMLDivElement} js table divje
     */
    const jsSection = document.querySelector('#jssection') //js táblázat divjének lekérése id alapján, tárolása változóba
    if(CheckBoxValue.checked){ //megnézzük, hogy a checkbox, be van-e pipálva
        jsSection.classList.remove('hide') //js tábleről hide class eltüntetés
        htlmSection.classList.add('hide') //html táblához hide class hozzáadás
    }
    else{ //hamis ág
        htlmSection.classList.remove('hide') //html tábláról hide class levétel
        jsSection.classList.add('hide') //js táblehöz hide class hozzáadás
    }

}