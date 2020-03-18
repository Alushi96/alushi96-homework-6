var time = moment().format('MM-DD-YYYY');


var area = document.querySelector("#area");
var temp = document.querySelector("#temp");
var humid = document.querySelector("#humid");
var wind = document.querySelector("#wind");
var uvi = document.querySelector("#uvi");
var icon = document.querySelector("#icon");
var local = document.querySelector("#local");
var submit = document.querySelector("#submit");

//Day 2 Variables
var Tdate = document.querySelector("#Tdate");
var Ticon = document.querySelector("#Ticon");
var Ttemp = document.querySelector("#Ttemp");
var Thumid = document.querySelector("#Thumid");

//Day 3 Variables
var Mdate = document.querySelector("#Mdate");
var Micon = document.querySelector("#Micon");
var Mtemp = document.querySelector("#Mtemp");
var Mhumid = document.querySelector("#Mhumid");

//Day 4 Variables
var Fdate = document.querySelector("#Fdate");
var Ficon = document.querySelector("#Ficon");
var Ftemp = document.querySelector("#Ftemp");
var Fhumid = document.querySelector("#Fhumid");

//Day 5 Variables
var Vdate = document.querySelector("#Vdate");
var Vicon = document.querySelector("#Vicon");
var Vtemp = document.querySelector("#Vtemp");
var Vhumid = document.querySelector("#Vhumid");

//Day 6 Variables
var Gdate = document.querySelector("#Gdate");
var Gicon = document.querySelector("#Gicon");
var Gtemp = document.querySelector("#Gtemp");
var Ghumid = document.querySelector("#Ghumid");

var locate = "";
console.log(locate);

$(submit).on("click", function(event) {
    locate = local.value + ",US";
    console.log(locate);
    ajx();
})