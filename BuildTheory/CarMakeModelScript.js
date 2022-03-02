'use strict';

let makeObject = {
  "Toyota": {
    "4Runner (5th gen)": ["2022","2021","2020","2019","2018","2017","2016","2015","2015"],
    "Tacoma (3rd gen)": ["2022","2021","2020","2019","2018","2017","2016"]
  },
  "Jeep": {
    "Wrangler JK": ["2022","2021","2020","2019","2018"], 
    "Wrangler JL": ["2017","2016","2015","2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"]
  }
}


window.onload = function() {
  var makeSel = document.getElementById("makeSel"),
    modelSel = document.getElementById("modelSel"),
    yearSel = document.getElementById("yearSel");
  for (var make in makeObject) {
    makeSel.options[makeSel.options.length] = new Option(make, make);
  }
  makeSel.onchange = function() {
    modelSel.length = 1; // remove all options bar first
    yearSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done   
    for (var model in makeObject[this.value]) {
      modelSel.options[modelSel.options.length] = new Option(model, model);
    }
  }
  makeSel.onchange(); // reset in case page is reloaded
  modelSel.onchange = function() {
    yearSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done   
    var years = makeObject[makeSel.value][this.value];
    for (var i = 0; i < years.length; i++) {
      yearSel.options[yearSel.options.length] = new Option(years[i], years[i]);
    }
  }
}


// function buildUrl() {
//   var url = "http://www.darspoilers.com/";
//   var make = document.querySelector('#makeSel').value;
//   var model = document.querySelector('#modelSel').value;
//   var year = document.querySelector('#yearSel').value;
//   var qs = encodeURIComponent(make + ' ' + model + ' ' + year);
//   if (qs.length > 0) {
//     url = url + "search?q=" + qs;
//   }
//   return url;
// }

