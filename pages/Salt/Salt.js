let csvData = null;
let rows = [];
let isCSVReady = false;
let listCat = [];
let listOfCategories = [];
let listOfProductOptions = [];


main(); // Start the async load

async function main() {
    csvData = await fetchCSV('test_products.csv');
    isCSVReady = true;
    initApp(); // trigger all post-load logic
}

async function fetchCSV(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        
        return data;
    } catch (error) {
        console.error('Error fetching CSV:', error);
    }
}

function initApp() {

    parseCSV();
    prepare_Categories();
    fill_categories_data();
}

function parseCSV() {
    if (!isCSVReady) return console.warn("CSV not ready");

    rows = csvData.trim().split('\n').map(row =>
        row.split(',').map(cell => cell.trim())
    );

    console.log("Parsed CSV:", rows);
}

function prepare_Categories() {
    if (!isCSVReady) return;

    for (let a of rows) {
        listCat.push(a[1]);
    }
       let s = new Set(listCat);
       listOfCategories = [...s]
       listOfCategories.shift();
}

function fill_categories_data() {

listOfCategories.forEach (Element => {
            var container = document.getElementById('list_of_categories');
            var newButton = document.createElement('button');
            newButton.id = Element;
            newButton.setAttribute("onclick","create_list_of_products(this.id)");
            newButton.textContent = Element;
            console.log(Element);
            container.append(newButton);
})

}

function create_list_of_products(category) {
    listOfProductOptions = [];
    for (let a of rows) {
        if (a[1] == category) {
        listOfProductOptions.push(a[0]);
        }
    }

let e = document.getElementById('product-select');
        e.innerHTML = "";

listOfProductOptions.forEach (Element => {
            var container = document.getElementById('product-select');
            var newOption = document.createElement('option');
            newOption.value = Element;
            newOption.textContent = Element;
            container.append(newOption);

})

update_Salt_text ();

}

function update_Salt_text () {

const selectElement = document.getElementById('product-select');
const result = document.getElementById('salt_in_product'); 

    for (let a of rows) {
        if (a[0] == selectElement.value) {
        salt_in_selected_product = a[2];
        }
    }
  result.textContent = salt_in_selected_product;
};

