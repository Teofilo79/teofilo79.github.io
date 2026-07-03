// Load campaigns on start
document.addEventListener('DOMContentLoaded', function() {
loadCampaigns();
pageRefresh (0);

})

// Showing the dialogue for input form
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".start-button");
openModal.addEventListener("click", () => {
  modal.showModal();
document.getElementById("modalSubmitButton").focus();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.close();
  }
}

// Here is initial declaration of array for Campaigns
var Campaigns_Storage = [];

// Set today's date
var Today = new Date().getTime();

// Campaign object constructor here
class TheCampaign {
  constructor(campaign_name, campaign_id, campaign_cdo, campaign_proofs, campaign_test_canvas, campaign_jira_link, campaign_retail, kick_off_plan, ocm_plan_start, ocm_plan_end, build_plan_start, build_plan_end, qa_plan_start, qa_plan_end, approvals_plan_start, approvals_plan_end, launch_plan, kick_off_fact, ocm_fact_start, ocm_fact_end, build_fact_start, build_fact_end, qa_fact_start, qa_fact_end, approvals_fact_start, approvals_fact_end, launch_fact, archive) {
    this.campaign_name = campaign_name,
    this.campaign_id = campaign_id;
    this.campaign_cdo = campaign_cdo;
    this.campaign_proofs = campaign_proofs,
    this.campaign_test_canvas = campaign_test_canvas;
    this.campaign_jira_link = campaign_jira_link;    
    this.campaign_retail = campaign_retail;    
    this.kick_off_plan = new Date(kick_off_plan);
    this.ocm_plan_start = new Date(ocm_plan_start);
    this.ocm_plan_end = new Date(ocm_plan_end);
    this.build_plan_start = new Date(build_plan_start);
    this.build_plan_end = new Date(build_plan_end);
    this.qa_plan_start = new Date(qa_plan_start);
    this.qa_plan_end = new Date(qa_plan_end);
    this.approvals_plan_start = new Date(approvals_plan_start); 
    this.approvals_plan_end = new Date(approvals_plan_end);
    this.launch_plan = new Date(launch_plan);     
    this.kick_off_fact = new Date(kick_off_fact);
    this.ocm_fact_start = new Date(ocm_fact_start);
    this.ocm_fact_end = new Date(ocm_fact_end);
    this.build_fact_start = new Date(build_fact_start);
    this.build_fact_end = new Date(build_fact_end);
    this.qa_fact_start = new Date(qa_fact_start);
    this.qa_fact_end = new Date(qa_fact_end);
    this.approvals_fact_start = new Date(approvals_fact_start); 
    this.approvals_fact_end = new Date(approvals_fact_end);     
    this.launch_fact = new Date(launch_fact);
    this.archive = archive;
  } 
}

// This function adds new campaign
function addCampaign () {


	// event.preventDefault();
    var campaign_name = document.querySelector("#campaign_name");
    var input_campaign_name = campaign_name.value;

    var campaign_id = document.querySelector("#campaign_id");
    var input_campaign_id = campaign_id.value;

    var campaign_cdo = document.querySelector("#campaign_cdo");
    var input_campaign_cdo = campaign_cdo.value;

    var campaign_proofs = document.querySelector("#campaign_proofs");
    var input_campaign_proofs = campaign_proofs.value;

    var campaign_jira_link = document.querySelector("#campaign_jira_link");
    var input_campaign_jira_link = campaign_jira_link.value;

    var campaign_retail = document.querySelector("#campaign_retail");
    var input_campaign_retail = (campaign_retail.checked) ? "Retail" : "Non-Retail";

    var campaign_test_canvas = document.querySelector("#campaign_test_canvas");
    var input_campaign_test_canvas = campaign_test_canvas.value;    

    var kick_off_plan = document.querySelector("#kick_off_plan");
    var input_kick_off_plan = new Date(kick_off_plan.value);

    var ocm_plan_start = document.querySelector("#ocm_plan_start");
    var input_ocm_plan_start = new Date(ocm_plan_start.value);
    
    var ocm_plan_end = document.querySelector("#ocm_plan_end");
    var input_ocm_plan_end = new Date(ocm_plan_end.value);
    
    var build_plan_start = document.querySelector("#build_plan_start");
    var input_build_plan_start = new Date(build_plan_start.value);
    
    var build_plan_end = document.querySelector("#build_plan_end");
    var input_build_plan_end = new Date(build_plan_end.value);
    
    var qa_plan_start = document.querySelector("#qa_plan_start");
    var input_qa_plan_start = new Date(qa_plan_start.value);
    
    var qa_plan_end = document.querySelector("#qa_plan_end");
    var input_qa_plan_end = new Date(qa_plan_end.value);

    var approvals_plan_start = document.querySelector("#approvals_plan_start");
    var input_approvals_plan_start = new Date(approvals_plan_start.value);
    
    var approvals_plan_end = document.querySelector("#approvals_plan_end");
    var input_approvals_plan_end = new Date(approvals_plan_end.value);

    var launch_plan = document.querySelector("#launch_plan");
    var input_launch_plan = new Date(launch_plan.value);    

    var kick_off_fact = document.querySelector("#kick_off_fact");
    var input_kick_off_fact = new Date(kick_off_fact.value);    

    var ocm_fact_start = document.querySelector("#ocm_fact_start");
    var input_ocm_fact_start = new Date(ocm_fact_start.value);
    
    var ocm_fact_end = document.querySelector("#ocm_fact_end");
    var input_ocm_fact_end = new Date(ocm_fact_end.value);
    
    var build_fact_start = document.querySelector("#build_fact_start");
    var input_build_fact_start = new Date(build_fact_start.value);
    
    var build_fact_end = document.querySelector("#build_fact_end");
    var input_build_fact_end = new Date(build_fact_end.value);
    
    var qa_fact_start = document.querySelector("#qa_fact_start");
    var input_qa_fact_start = new Date(qa_fact_start.value);
    
    var qa_fact_end = document.querySelector("#qa_fact_end");
    var input_qa_fact_end = new Date(qa_fact_end.value);

    var approvals_fact_start = document.querySelector("#approvals_fact_start");
    var input_approvals_fact_start = new Date(approvals_fact_start.value);
    
    var approvals_fact_end = document.querySelector("#approvals_fact_end");
    var input_approvals_fact_end = new Date(approvals_fact_end.value);
    
    var launch_fact = document.querySelector("#launch_fact");
    var input_launch_fact = new Date(launch_fact.value);

    var input_archive = 0;

    if (!isNaN(input_launch_fact)) {input_archive = 1};

    var campaign_created = new TheCampaign(input_campaign_name, input_campaign_id, input_campaign_cdo, input_campaign_proofs, input_campaign_test_canvas, input_campaign_jira_link, input_campaign_retail, input_kick_off_plan, input_ocm_plan_start, input_ocm_plan_end, input_build_plan_start, input_build_plan_end, input_qa_plan_start, input_qa_plan_end, input_approvals_plan_start, input_approvals_plan_end, input_launch_plan, input_kick_off_fact, input_ocm_fact_start, input_ocm_fact_end, input_build_fact_start, input_build_fact_end, input_qa_fact_start, input_qa_fact_end, input_approvals_fact_start, input_approvals_fact_end, input_launch_fact, input_archive); 

var mode_for_submit_CTA = "new data";
var indexofcampaign = "";
	Campaigns_Storage.forEach((item) => {
  if(item.campaign_id == input_campaign_id) {
    mode_for_submit_CTA = "edit";
    indexofcampaign = Campaigns_Storage.indexOf(item);
  }});

if (mode_for_submit_CTA == "edit") {Campaigns_Storage[indexofcampaign] = campaign_created;}
else {Campaigns_Storage.push(campaign_created);}


saveCampaigns();
pageRefresh(0);

}

function saveCampaigns() {
//	localStorage.clear();
    localStorage.setItem('Campaigns_Storage', JSON.stringify(Campaigns_Storage));
}

function loadCampaigns() {
    const Campaigns_Storage_from_Local = localStorage.getItem('Campaigns_Storage');
    Campaigns_Storage = Campaigns_Storage_from_Local ? JSON.parse(Campaigns_Storage_from_Local) : []
}

function showcampaign_cdo(id) {
  let selected_text_frame = document.getElementById(id);
  let user = Campaigns_Storage.find(u => u.campaign_id == id)
  selected_text_frame.innerHTML = `<div class="campaign_status_screen"><div>${user.campaign_cdo}</div></div>`;
}

// Page refresh with the actual data from arrays.
function pageRefresh(mode) {
if(Campaigns_Storage.length !== 0) {
	document.getElementById("campaigns_block").innerHTML="";  // delete the content of the box

// fill the campaign box with the data from the object - START
	Campaigns_Storage.forEach((item) => {
    if(item.archive == mode) {

// calculations - START
var date1 = new Date();
var date2 = new Date(item.launch_plan);
var date3 = new Date(item.kick_off_plan);
var Days_on_status_screen = "";
var Text_on_status_screen = "";
var color_for_Days_on_status_screen = "";
var campaign_status_button_color = "";

var total_number_of_days = (date2.valueOf() - date3.valueOf()) / 86400000;
var days_between_start_and_today = (date1.valueOf() - date3.valueOf()) / 86400000;

var month_number = date3.getMonth() + 1

var campaign_grid_layout_row0 = `<div>&nbsp;&nbsp;&nbsp;&nbsp;</div>`;
var campaign_grid_layout_row1 = `<div>&nbsp;</div>`;
var campaign_grid_layout_row2 = `<div>&nbsp;&nbsp;&nbsp;Plan&nbsp;</div>`;
var campaign_grid_layout_row3 = `<div>&nbsp;&nbsp;&nbsp;Fact&nbsp;</div>`;

var previous_value_for_the_cell = "";
var previous_value_for_the_cell_fact = "";
var cell_border = "";

if (total_number_of_days >=60) {var counter_for_line = (total_number_of_days - 60)} else {var counter_for_line = 0}

for (var i=counter_for_line; i <= total_number_of_days; i++) { 

  date1 = new Date(date3.valueOf()+86400000*i);

  var weekend_day = date1.getDay();
  var class_for_the_cell = "";
  var value_for_the_cell = "";
  var class_for_the_cell_fact = "";
  var value_for_the_cell_fact = "";

  var class_for_the_month_cell = "";

  if (weekend_day !== 0 & weekend_day !== 6) 
    {var class_for_the_cell = "";
      var class_for_the_cell_fact = "";
    }
  else 
    {var class_for_the_cell = "weekend";
      class_for_the_cell_fact = "weekend";
    };

  var ProcessSteps = ["ocm","build","qa","approvals"];
  var Today_Date = new Date();
    var archive_status = item.archive;

  ProcessSteps.forEach((step) => {
    text_to_display = "";     
    let step_name1 = step+"_plan_start";
    let step_name2 = step+"_plan_end";
    let step_name3 = step+"_planned";
    let step_name1f = step+"_fact_start";
    let step_name2f = step+"_fact_end";    
    if(item[step_name1]){var date4 = new Date(item[step_name1])};
    if(item[step_name2]){var date5 = new Date(item[step_name2])};
    if(item[step_name1f]){var date4f = new Date(item[step_name1f])};
    if(item[step_name2f]){var date5f = new Date(item[step_name2f])};   


if (!isNaN(date4) & !isNaN(date5) & date1 >= date4 & date1 <= date5) {
  if (previous_value_for_the_cell != step) {value_for_the_cell = step; previous_value_for_the_cell = value_for_the_cell; cell_border="border_cell";} else {value_for_the_cell = ""; cell_border="no_border_cell"}
  class_for_the_cell = class_for_the_cell + " " + cell_border + " " + step_name3;
}; 
    
if (!isNaN(date4) & isNaN(date4f) & Days_on_status_screen==="") {
Days_on_status_screen = Math.ceil((date4.valueOf() - Today_Date.valueOf()) / 86400000);
Text_on_status_screen = "days till start of " + step;
}

if (!isNaN(date5) & isNaN(date5f) & !isNaN(date4f) & Days_on_status_screen==="") {
Days_on_status_screen = Math.ceil((date5.valueOf() - Today_Date.valueOf()) / 86400000);
Text_on_status_screen = "days left to finish " + step;
}

if (Days_on_status_screen <= -1) {
  color_for_Days_on_status_screen = "darkred";
  campaign_status_button_color = "campaign_status_button_color_red";
} 
else if (Days_on_status_screen >= 1) {
  color_for_Days_on_status_screen = "grey";
  campaign_status_button_color = "campaign_status_button_color_green";
} 
else if ( archive_status == 1) {
  color_for_Days_on_status_screen = "grey";
  campaign_status_button_color = "campaign_status_button_color_grey";
} 
else if (Days_on_status_screen == 0) {
  color_for_Days_on_status_screen = "grey";
  campaign_status_button_color = "campaign_status_button_color_yellow";
} 
else {
  color_for_Days_on_status_screen = "grey";
  campaign_status_button_color = "campaign_status_button_color_grey";
};

  });

    ProcessSteps.forEach((step) => {
    text_to_display = "";  
    let step_name4 = step+"_fact_start";
    let step_name5 = step+"_fact_end";
    let step_name6 = step+"_fact";
    if(item[step_name4]){var date6 = new Date(item[step_name4])};    
    if(item[step_name5]){var date7 = new Date(item[step_name5])}; 
    if(item["kick_off_plan"]){var date8 = new Date(item["kick_off_plan"])};     
    if(item["kick_off_fact"]){var date9 = new Date(item["kick_off_fact"])};
    if(item["launch_plan"]){var date10 = new Date(item["launch_plan"])};     
    if(item["launch_fact"]){var date11 = new Date(item["launch_fact"])}; 
    if(item["approvals_fact_end"]){var date12 = new Date(item["approvals_fact_end"])};   

    if ((date1 >= date6 & date1 <= date7) || (date1 >= date6 & isNaN(date7) & date1 <= Today_Date)) {
      if (previous_value_for_the_cell_fact != step) {value_for_the_cell_fact = step; previous_value_for_the_cell_fact = value_for_the_cell_fact; cell_border="border_cell";} else {value_for_the_cell_fact = ""; cell_border="no_border_cell"}
      class_for_the_cell_fact = class_for_the_cell_fact + " " + cell_border + " " + step_name6;    
    };  

    if (isNaN(date9)) {
    Days_on_status_screen = Math.ceil((date8.valueOf() - Today_Date.valueOf()) / 86400000);
    Text_on_status_screen = "days till kick-off meeting";
    campaign_status_button_color = "campaign_status_button_color_grey";
    }    

    if (isNaN(date11) & !isNaN(date12)) {
    Days_on_status_screen = Math.ceil((date10.valueOf() - Today_Date.valueOf()) / 86400000);
    Text_on_status_screen = "days till launch";
    }       
    
  // kick-off highlight - START


  if (date1.getDate() == date8.getDate() & date1.getMonth() == date8.getMonth()) {
      class_for_the_cell = class_for_the_cell + " " + cell_border + " " + "kick_off_plan";
      value_for_the_cell = "▶";
    };  

  if (!isNaN(date9)) {
    if (date1.getDate() == date9.getDate() & date1.getMonth() == date9.getMonth()) {
      class_for_the_cell_fact = class_for_the_cell_fact +" " + cell_border +" " + "kick_off_fact";
      value_for_the_cell_fact = "▶";
    };          
  };

  if (date1.getDate() == date10.getDate() & date1.getMonth() == date10.getMonth()) {
      class_for_the_cell = class_for_the_cell +" " + cell_border +" " + "launch_plan";
      value_for_the_cell = "☑";
    };  

  if (!isNaN(date11)) {
    if (date1.getDate() == date11.getDate() & date1.getMonth() == date11.getMonth()) {
      class_for_the_cell_fact = class_for_the_cell_fact +" " + cell_border +" " + "launch_fact";
      value_for_the_cell_fact = "☑";
    };   
  };    
  
  if (!isNaN(date11)) {
    if (date1.getDate() == date11.getDate() & date1.getMonth() == date11.getMonth()) {
      class_for_the_cell_fact = class_for_the_cell_fact +" " + cell_border +" " + "launch_fact";
      value_for_the_cell_fact = "☑";
    };   
  };  

    if (date1.getDate() == Today_Date.getDate() & date1.getMonth() == Today_Date.getMonth()) {
    class_for_the_cell = class_for_the_cell + " " + "today";
    class_for_the_month_cell = "today";
    class_for_the_cell_fact = class_for_the_cell_fact +" " + cell_border + " " + "today";  
  };
  // kick-off highlight - END  

  });

  if (date1.valueOf() == date3.valueOf()) 
    {month_number = date1.getMonth()}
  else if (date1.getDate() == 1) 
    {month_number = date1.getMonth()}
  else  
    {month_number = "12"};

  if (value_for_the_cell == "ocm") {value_for_the_cell = "O"};
  if (value_for_the_cell == "qa") {value_for_the_cell = "Q"};
  if (value_for_the_cell_fact == "ocm") {value_for_the_cell_fact = "O"};
  if (value_for_the_cell_fact == "qa") {value_for_the_cell_fact = "Q"};
  if (value_for_the_cell == "build") {value_for_the_cell = "B"};
  if (value_for_the_cell == "approvals") {value_for_the_cell = "A"};
  if (value_for_the_cell_fact == "build") {value_for_the_cell_fact = "B"};
  if (value_for_the_cell_fact == "approvals") {value_for_the_cell_fact = "A"};

 const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "&nbsp;"];
 var month_text = monthNames[month_number]; 

  campaign_grid_layout_row0 = campaign_grid_layout_row0+`<div class="${class_for_the_month_cell}">${month_text}</div>`  
  campaign_grid_layout_row1 = campaign_grid_layout_row1+`<div class="${class_for_the_cell}">${date1.getDate()}</div>`  
  campaign_grid_layout_row2 = campaign_grid_layout_row2+`<div class="${class_for_the_cell}">${value_for_the_cell.toUpperCase()}</div>`
  campaign_grid_layout_row3 = campaign_grid_layout_row3+`<div class="${class_for_the_cell_fact}">${value_for_the_cell_fact.toUpperCase()}</div>`
}

var spinner_content = `<div class="spinner"><div>On</div><div>Attnt</div><div>Off</div><div>Risk</div></div>`

  // hide certain elements when viewing archive
var class_hide_or_show = "";
var simple_campaign_layout = ""

if (mode == 1) {
class_hide_or_show = "hide";
simple_campaign_layout = "simple"
}   


// calculations - END

        let added_content = document.createElement("div");
        added_content.className="campaign " + simple_campaign_layout;
        added_content.innerHTML = `
 
        <div class="campaign_name" id="${item.campaign_id}"><div class="campaign_status_screen"><div>${item.campaign_name}</div><div>${item.campaign_id} / ${item.campaign_retail}<br>CDO: ${item.campaign_cdo}<br>PROOFS: ${item.campaign_proofs}</div></div></div>
        <div class="campaign_id"><a class="metal_button" id="test_canvas" target="_blank" href="${item.campaign_test_canvas}">Assets</a><a class="metal_button" id="jira_link" target="_blank" href="${item.campaign_jira_link}">Jira</a><button class="metal_button" onclick="editCampaign('${item.campaign_id}')">Update</button></div>
        <div class="campaign_status ${class_hide_or_show}"><div style="color:${color_for_Days_on_status_screen}">${Days_on_status_screen}</div><div>${Text_on_status_screen}</div></div>
        <div class="campaign_status_button ${class_hide_or_show} ${campaign_status_button_color}">${spinner_content}</div>         
        <div class="campaign_timeline ${class_hide_or_show}">
        <div class="campaign_month">${campaign_grid_layout_row0}</div>  
        <div class="campaign_plan">${campaign_grid_layout_row2}</div>         
        <div class="campaign_dates">${campaign_grid_layout_row1}</div>              
        <div class="campaign_fact">${campaign_grid_layout_row3}</div>
        </div></div>`;

        document.getElementById("campaigns_block").append(added_content);        

     

// if (days_between_start_and_today >=15) {
        // this one to scroll to the end of timeline
        const containers = document.querySelectorAll('.campaign_month');
        containers.forEach(container => {
        var divs = container.getElementsByClassName("today");
        var lastDiv = divs[0];
        if (lastDiv) {
          lastDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });
        };
});
// };

    }




	  }
// fill the campaign box with the data from the object - END    
 
    );
	}

window.scrollTo(0, document.body.scrollHeight);  
}

function DatetoNormalInput(date) { 

  var d = new Date(date);
  yyyy = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  return(yyyy);

}

function editCampaign(campaign_id_to_edit) {

if(Campaigns_Storage.length !== 0) {
	Campaigns_Storage.forEach((item) => {
    
  if(item.campaign_id == campaign_id_to_edit) {
    
      var campaign_name = document.querySelector("#campaign_name");
      campaign_name.value = "";
      if (item.campaign_name){campaign_name.value = item.campaign_name};

      var campaign_id = document.querySelector("#campaign_id"); 
      campaign_id.value = "";
      if (item.campaign_id){campaign_id.value = item.campaign_id};       

      var campaign_cdo = document.querySelector("#campaign_cdo");
      campaign_cdo.value = "";
      if (item.campaign_cdo){campaign_cdo.value = item.campaign_cdo};        

      var campaign_proofs = document.querySelector("#campaign_proofs");
      campaign_proofs.value = "";
      if (item.campaign_proofs){campaign_proofs.value = item.campaign_proofs};       

      var campaign_test_canvas = document.querySelector("#campaign_test_canvas");
      campaign_test_canvas.value = "";
      if (item.campaign_test_canvas){campaign_test_canvas.value = item.campaign_test_canvas};        

      var campaign_jira_link = document.querySelector("#campaign_jira_link");
      campaign_jira_link.value = "";
      if (item.campaign_jira_link){campaign_jira_link.value = item.campaign_jira_link};      

      var campaign_retail = document.querySelector("#campaign_retail");
      var campaign_nonretail = document.querySelector("#campaign_nonretail");    
      if (item.campaign_retail == "Retail") {campaign_retail.checked = true} else {campaign_nonretail.checked = true};

      var kick_off_plan = document.querySelector("#kick_off_plan");
      kick_off_plan.value = "";
      if (item.kick_off_plan){kick_off_plan.value = DatetoNormalInput(item.kick_off_plan)};

      var ocm_plan_start = document.querySelector("#ocm_plan_start");
      ocm_plan_start.value = "";
      if (item.ocm_plan_start){ocm_plan_start.value = DatetoNormalInput(item.ocm_plan_start)};
      
      var ocm_plan_end = document.querySelector("#ocm_plan_end");
      ocm_plan_end.value = "";
      if (item.ocm_plan_end){ocm_plan_end.value = DatetoNormalInput(item.ocm_plan_end)};      
      
      var build_plan_start = document.querySelector("#build_plan_start");
      build_plan_start.value = "";
      if (item.build_plan_start){build_plan_start.value = DatetoNormalInput(item.build_plan_start)};       
      
      var build_plan_end = document.querySelector("#build_plan_end");
      build_plan_end.value = "";
      if (item.build_plan_end){build_plan_end.value = DatetoNormalInput(item.build_plan_end)};        
      
      var qa_plan_start = document.querySelector("#qa_plan_start");
      qa_plan_start.value = "";
      if (item.qa_plan_start){qa_plan_start.value = DatetoNormalInput(item.qa_plan_start)};        
      
      var qa_plan_end = document.querySelector("#qa_plan_end");
      qa_plan_end.value = "";
      if (item.qa_plan_end){qa_plan_end.value = DatetoNormalInput(item.qa_plan_end)};       

      var approvals_plan_start = document.querySelector("#approvals_plan_start");
      approvals_plan_start.value = "";
      if (item.approvals_plan_start){approvals_plan_start.value = DatetoNormalInput(item.approvals_plan_start)};       
      
      var approvals_plan_end = document.querySelector("#approvals_plan_end");
      approvals_plan_end.value = "";
      if (item.approvals_plan_end){approvals_plan_end.value = DatetoNormalInput(item.approvals_plan_end)};        

      var launch_plan = document.querySelector("#launch_plan");
      launch_plan.value = ""
      if (item.launch_plan){launch_plan.value = DatetoNormalInput(item.launch_plan)};           

      var kick_off_fact = document.querySelector("#kick_off_fact");
      kick_off_fact.value = "";
      if (item.kick_off_fact){kick_off_fact.value = DatetoNormalInput(item.kick_off_fact)};         

      var ocm_fact_start = document.querySelector("#ocm_fact_start");
      ocm_fact_start.value = "";
      if (item.ocm_fact_start){ocm_fact_start.value = DatetoNormalInput(item.ocm_fact_start)};         
      
      var ocm_fact_end = document.querySelector("#ocm_fact_end");
      ocm_fact_end.value = "";
      if (item.ocm_fact_end){ocm_fact_end.value = DatetoNormalInput(item.ocm_fact_end)};        
      
      var build_fact_start = document.querySelector("#build_fact_start");
      build_fact_start.value = "";
      if (item.build_fact_start){build_fact_start.value = DatetoNormalInput(item.build_fact_start)};       
      
      var build_fact_end = document.querySelector("#build_fact_end");
      build_fact_end.value = "";
      if (item.build_fact_end){build_fact_end.value = DatetoNormalInput(item.build_fact_end)};       
      
      var qa_fact_start = document.querySelector("#qa_fact_start");
      qa_fact_start.value = "";
      if (item.qa_fact_start){qa_fact_start.value = DatetoNormalInput(item.qa_fact_start)};          
      
      var qa_fact_end = document.querySelector("#qa_fact_end");
      qa_fact_end.value = "";
      if (item.qa_fact_end){qa_fact_end.value = DatetoNormalInput(item.qa_fact_end)};          

      var approvals_fact_start = document.querySelector("#approvals_fact_start");
      approvals_fact_start.value = "";
      if (item.approvals_fact_start){approvals_fact_start.value = DatetoNormalInput(item.approvals_fact_start)};         
      
      var approvals_fact_end = document.querySelector("#approvals_fact_end");
      approvals_fact_end.value = "";
      if (item.approvals_fact_end){approvals_fact_end.value = DatetoNormalInput(item.approvals_fact_end)};        
      
      var launch_fact = document.querySelector("#launch_fact");
      launch_fact.value = "";
      if (item.launch_fact){launch_fact.value = DatetoNormalInput(item.launch_fact)};

modal.showModal();
document.getElementById("modalSubmitButton").focus();
  }
  })
}


}