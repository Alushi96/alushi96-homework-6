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

function ajx () {

    var APIKey = "c1c87793aba6a378ee77da807ea2f5c4";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?&uvi&q="+locate+"&units=imperial&appid=" + APIKey + "&cnt=60";
   

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            console.log(response);
            console.log(response.list[0].weather[0].icon);
            console.log(response.list[0].main.temp);
            console.log(area);
            console.log(response.city.country)

            //Current Day
            var img = response.list[0].weather[0].icon;
            var iconURL =  "https://openweathermap.org/img/wn/" + img + ".png";
            var tempF = (response.list[0].main.temp);
            var tempFF = (response.list[0].main.humidity);
            var tempFN = (response.list[0].wind.speed);

            $(icon).attr("src", iconURL);
            $(temp).text("Temperature: " + tempF.toFixed(0) + "F");
            $(area).text(response.city.name +" (" + time + ")");  
            $(humid).text("Humidty: " + tempFF + "%"); 
            $(wind).text("Wind Speed: " + tempFN + "MPH");  
            local.value = "";

            //Day 2 Data
            var Timg = response.list[8].weather[0].icon;
            var TiconURL = "https://openweathermap.org/img/wn/" + Timg + ".png";
            var TtempF = (response.list[8].main.temp);
            var Thum = response.list[8].main.humidity;
            var Tdat = response.list[8].dt;
            var d = new Date(Tdat * 1000).getDate();
            var y = new Date(Tdat * 1000).getFullYear();
            var m = new Date(Tdat * 1000).getMonth();
            

            $(Tdate).text("(" + m +"/" + d + "/" + y + ")");
            $(Ticon).attr("src", TiconURL);
            $(Ttemp).text("Temp: " + TtempF.toFixed(0) + "F");
            $(Thumid).text("Humidity: " + Thum + "%");

            //Day 3 Data
            var Mimg = response.list[16].weather[0].icon;
            var MiconURL = "https://openweathermap.org/img/wn/" + Mimg + ".png";
            var MtempF = (response.list[16].main.temp);
            var Mhum = response.list[16].main.humidity;
            var Mdat = response.list[16].dt;
            var Md = new Date(Mdat * 1000).getDate();
            var My = new Date(Mdat * 1000).getFullYear();
            var Mm = new Date(Mdat * 1000).getMonth();

            $(Mdate).text("(" + Mm +"/" + Md + "/" + My + ")");
            $(Micon).attr("src", MiconURL);
            $(Mtemp).text("Temp: " + MtempF.toFixed(0) + "F");
            $(Mhumid).text("Humidity: " + Mhum + "%");

            //Day 4 Data
            var Fimg = response.list[24].weather[0].icon;
            var FiconURL = "https://openweathermap.org/img/wn/" + Fimg + ".png";
            var FtempF = (response.list[24].main.temp);
            var Fhum = response.list[24].main.humidity;
            var Fdat = response.list[24].dt;
            var Fd = new Date(Fdat * 1000).getDate();
            var Fy = new Date(Fdat * 1000).getFullYear();
            var Fm = new Date(Fdat * 1000).getMonth();

            $(Fdate).text("(" + Fm +"/" + Fd + "/" + Fy + ")");
            $(Ficon).attr("src", FiconURL);
            $(Ftemp).text("Temp: " + FtempF.toFixed(0) + "F");
            $(Fhumid).text("Humidity: " + Fhum + "%");

            //Day 5 Data
            var Vimg = response.list[32].weather[0].icon;
            var ViconURL = "https://openweathermap.org/img/wn/" + Vimg + ".png";
            var VtempF = (response.list[32].main.temp);
            var Vhum = response.list[32].main.humidity;
            var Vdat = response.list[32].dt;
            var Vd = new Date(Vdat * 1000).getDate();
            var Vy = new Date(Vdat * 1000).getFullYear();
            var Vm = new Date(Vdat * 1000).getMonth();

            $(Vdate).text("(" + Vm +"/" + Vd + "/" + Vy + ")");
            $(Vicon).attr("src", ViconURL);
            $(Vtemp).text("Temp: " + VtempF.toFixed(0) + "F");
            $(Vhumid).text("Humidity: " + Vhum + "%");

            //Day 6 Data
            var Gimg = response.list[39].weather[0].icon;
            var GiconURL = "https://openweathermap.org/img/wn/" + Gimg + ".png";
            var GtempF = (response.list[39].main.temp);
            var Ghum = response.list[39].main.humidity;
            var Gdat = response.list[39].dt;
            var Gd = new Date(Gdat * 1000).getDate();
            var Gy = new Date(Gdat * 1000).getFullYear();
            var Gm = new Date(Gdat * 1000).getMonth();

            $(Gdate).text("(" + Gm +"/" + Gd + "/" + Gy + ")");
            $(Gicon).attr("src", GiconURL);
            $(Gtemp).text("Temp: " + GtempF.toFixed(0) + "F");
            $(Ghumid).text("Humidity: " + Ghum + "%");


            var lat = response.city.coord.lat;
            var lon = response.city.coord.lon;
            var querysURL = "http://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+lat+"&lon="+lon

            $.ajax({
                url:querysURL,
                method: "GET"
            })

                .then(function(response) {
                    console.log(response);
                    var rv = response.value;
                    $(uvi).text("UV Index: " + rv);

                    function updatecolor() {

                        if (rv > 6) {
                            $(uvi).attr("class", "bad")
                            console.log("print1")
                        }
                        else if (rv < 4) {
                            $(uvi).attr("class", "good")
                            console.log("pirnt2")
                        }
                        else {
                            $(uvi).attr("class", "moderate")
                            console.log("print3")
                        }
                        }
                        updatecolor();
                   
                   
                })
                var areaText = local.value.trim();
                areas.push(response.city.name);
                storeArea();
                renderAreas();
            })    
};

var pastArea = document.querySelector("#pastArea");
var areas = [];



function renderAreas() {
    pastArea.innerHTML = "";

    for (var i = 0; i<areas.length; i++) {
        var pAreas = areas[i];

        var button = document.createElement("button");
        button.textContent = pAreas;
        

        var div = document.createElement("div");
        div.textContent = "";
        div.setAttribute("data-index", i);
        div.appendChild(button);

        pastArea.appendChild(div);
    }
}

function init() {
    var storedArea = JSON.parse(localStorage.getItem("area"));

    if (storedArea !==null) {
        areas = storedArea;
    }
    locate = areas[areas.length - 1];
    console.log(locate);
    renderAreas();
}

init();
ajx();

function storeArea () {
    localStorage.setItem("area", JSON.stringify(areas));
}

pastArea.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
      var index = element.parentElement.getAttribute("data-index");
      locate = areas[index];
      console.log(index);
      console.log(locate);
      
    }
    storeArea();
    renderAreas();
    ajx();
});


var clearbtn = document.querySelector("#clearbtn");

clearbtn.addEventListener("click", function() {
    var element = event.target;

    areas.splice(areas);
    storeArea();
    renderAreas();
})
