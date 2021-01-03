// from data.js
var tableData = data;

// <tbody> in index.html
const tbody = d3.select("tbody");

function btnClick() {
const myDate = d3.select("datetime").property("value");
    console.log("myDate");
    console.log("myDate");

    if (myDate) {
        filteredRows = tableData.filter(row => row.datetime === myDate);
    } else {
        //first time page load or no date is provided
        filteredRows = tableData
    }

    console.log("filteredRows")
    console.log(fileteredRows)

    //Wipe out any row data
    tbody.html("");
}

// YOUR CODE HERE!
































d3.selectALL("#filter-btn").on("cklick", btnClick)
