let csvData = null;
let rows = [];
let isCSVReady = false;
let listCat = [];
let listOfCategories = [];
let listOfProductOptions = [];

let calories_in_selected_product = "";
let calories_result = 0;

let protein_in_selected_product = "";
let protein_result = 0;

let fat_in_selected_product = "";
let fat_result = 0;

let carbo_in_selected_product = "";
let carbo_result = 0;

let salt_in_selected_product = "";
let salt_result = 0;

let own_product_flag = 0;
let data_for_LocalStorage = [];
let data_for_LocalStorage_array = [];
var table_of_products;
var summary_table_of_products;
var comment_of_selected_product;
var serving_for_product;

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
    load_data();
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
            newButton.className = "btn3d btn3d-select";
            newButton.textContent = Element;
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
document.getElementById('layer_adding_product').style.display = "block";
update_Salt_text ();

}

function update_Salt_text () {

const selectElement = document.getElementById('product-select');
const result = document.getElementById('salt_in_product'); 
const comment_on_product = document.getElementById('product_comment'); 
const serving_of_product = document.getElementById('quantity_consumed'); 
const unit_of_measure_of_product = document.getElementById('unit_of_measure'); 


    for (let a of rows) {
        if (a[0] == selectElement.value) {
    calories_in_selected_product = a[2];        
    protein_in_selected_product = a[3];
    fat_in_selected_product = a[4];
    carbo_in_selected_product = a[5];
    salt_in_selected_product = a[6];
    comment_of_selected_product = a[7];
    serving_for_product = a[8];
    unit_of_measure = a[9];
        }
    }
  result.textContent = `K:${calories_in_selected_product} - Б:${protein_in_selected_product} - Ж:${fat_in_selected_product} - У:${carbo_in_selected_product} - C:${salt_in_selected_product}`;
  comment_on_product.textContent = comment_of_selected_product;
  serving_of_product.value = serving_for_product;
  unit_of_measure_of_product.textContent = unit_of_measure;
};

function add_product_to_the_table() {
var added_product = document.getElementById('product-select').value;
var added_product_quantity = document.getElementById('quantity_consumed').value / 100;

if (own_product_flag == 1) {
added_product = document.getElementById('own-product-select').value;
calories_in_selected_product = document.getElementById('own_calories_in_product');
protein_in_selected_product = document.getElementById('own_protein_in_product');
fat_in_selected_product = document.getElementById('own_fat_in_product');
carbo_in_selected_product = document.getElementById('own_carbo_in_product');
salt_in_selected_product = document.getElementById('own_salt_in_product');
};

var quantity_validation=isNumber(added_product_quantity);
var calories_validation=isNumber(calories_in_selected_product);
var protein_validation=isNumber(protein_in_selected_product);
var fat_validation=isNumber(fat_in_selected_product);
var carbo_validation=isNumber(carbo_in_selected_product);
var salt_validation=isNumber(salt_in_selected_product);

if (!quantity_validation || !salt_validation || !protein_validation || !fat_validation || !carbo_validation || !calories_validation )
    {alert("Цифрами, плиз!");}
else {
var added_product_calories = added_product_quantity * calories_in_selected_product;
var added_product_protein = added_product_quantity * protein_in_selected_product;
var added_product_fat = added_product_quantity * fat_in_selected_product;
var added_product_carbo = added_product_quantity * carbo_in_selected_product;
var added_product_salt = added_product_quantity * salt_in_selected_product;

table_of_products = document.getElementById('table_of_products');

var newrow = document.createElement('tr');
newrow.innerHTML = `<tr><td>${added_product}</td><td>${(added_product_quantity*100).toFixed(0)}</td><td>${added_product_calories.toFixed(0)}</td><td>${added_product_protein.toFixed(0)}</td><td>${added_product_fat.toFixed(0)}</td><td>${added_product_carbo.toFixed(0)}</td><td>${added_product_salt.toFixed(2)}</td></tr>`;
table_of_products.append(newrow);

salt_result = salt_result + added_product_salt;
calories_result = calories_result + added_product_calories;
protein_result = protein_result + added_product_protein;
fat_result = fat_result + added_product_fat;
carbo_result = carbo_result + added_product_carbo;

summary_table_of_products = document.getElementById('summary_table_of_products');

var newsummaryrow = document.createElement('table');
newsummaryrow.innerHTML = `<tr><td>K - ${calories_result.toFixed(0)}</td></tr><tr><td>Б - ${protein_result.toFixed(0)}</td></tr><tr><td>Ж - ${fat_result.toFixed(0)}</td></tr><tr><td>У - ${carbo_result.toFixed(0)}</td></tr><tr><td>Соль - ${salt_result.toFixed(2)}</td></tr>`;
summary_table_of_products.innerHTML = ``;
summary_table_of_products.append(newsummaryrow);

document.getElementById('layer_summary_table').style.display = "block";

let new_element_for_array = {added_product,added_product_quantity,added_product_calories,added_product_protein, added_product_fat, added_product_carbo, added_product_salt};
data_for_LocalStorage_array.push(new_element_for_array);
save_data();

};
}

function clean_the_dishes() {
    localStorage.clear();
    window.location.reload(true);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function save_data() {
localStorage.setItem('Salt_products', JSON.stringify(data_for_LocalStorage_array));
}

function load_data() {
    const data_for_LocalStorage_json = localStorage.getItem('Salt_products');
    data_for_LocalStorage_array = data_for_LocalStorage_json ? JSON.parse(data_for_LocalStorage_json) : []
    table_of_products = document.getElementById('table_of_products');
    table_of_products.innerHTML = `
                <tr>
                <td>Что</td>
                <td>Гр.</td>
                <td>K</td> 
                <td>Б</td>
                <td>Ж</td>
                <td>У</td>                                                
                <td>Salt</td>
            </tr>`
if (data_for_LocalStorage_array.length !== 0) {
salt_result = 0;
for (let a of data_for_LocalStorage_array) {
var newrow = document.createElement('tr');
newrow.innerHTML = `<tr><td>${a.added_product}</td><td>${a.added_product_quantity.toFixed(0)}</td><td>${a.added_product_calories.toFixed(0)}</td><td>${a.added_product_protein.toFixed(0)}</td><td>${a.added_product_fat.toFixed(0)}</td><td>${a.added_product_carbo.toFixed(0)}</td><td>${a.added_product_salt.toFixed(2)}</td></tr>`;
table_of_products.append(newrow);

salt_result = salt_result + a.added_product_salt;
calories_result = calories_result + a.added_product_calories;
protein_result = protein_result + a.added_product_protein;
fat_result = fat_result + a.added_product_fat;
carbo_result = carbo_result + a.added_product_carbo;
}

document.getElementById('layer_summary_table').style.display = "block";   
summary_table_of_products = document.getElementById('summary_table_of_products');

var newsummaryrow = document.createElement('table');
newsummaryrow.innerHTML = `<tr><td>Kалорий - ${calories_result.toFixed(0)}</td></tr><tr><td>Белок - ${protein_result.toFixed(0)}</td></tr><tr><td>Жиров - ${fat_result.toFixed(0)}</td></tr><tr><td>Углеводов - ${carbo_result.toFixed(0)}</td></tr><tr><td>Соли - ${salt_result.toFixed(2)}</td></tr>`;
summary_table_of_products.innerHTML = ``;
summary_table_of_products.append(newsummaryrow);  
}
    }

function add_own_product_to_the_table () {
    own_product_flag = 1;
    var Parent = document.getElementById('layer_adding_product');
    var Child = Parent.getElementsByTagName("label"); 
    Child[0].style.display = "none";

    document.getElementById('product-select').style.display = "none";
    document.getElementById('own-product-select').style.display = "flex";

    var Child1 = Parent.getElementsByTagName("div"); 
    Child1[1].style.display = "none";
    Child1[5].style.display = "none";
    Child1[4].style.display = "flex";

    document.getElementById('own_product_switcher').innerHTML = "назад в меню";
    document.getElementById('own_product_switcher').onclick = back_to_menu;
}   

function back_to_menu () {
    own_product_flag = 0;
    var Parent = document.getElementById('layer_adding_product');
    var Child = Parent.getElementsByTagName("label"); 
    Child[0].style.display = "block";

    document.getElementById('product-select').style.display = "flex";
    document.getElementById('own-product-select').style.display = "none";

    var Child1 = Parent.getElementsByTagName("div"); 
    Child1[1].style.display = "flex";
    Child1[5].style.display = "flex";
    Child1[4].style.display = "none";

    document.getElementById('own_product_switcher').innerHTML = "+ свой продукт";
    document.getElementById('own_product_switcher').onclick = add_own_product_to_the_table;
}  