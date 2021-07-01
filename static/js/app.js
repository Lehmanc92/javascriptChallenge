// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Defining function to render new data to table

function tableDraw(data) {
    data.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
};

tableDraw(tableData);

// Function to filter table

function filterData() {
    d3.event.preventDefault();
    var inputSelect = d3.select("input");
    var inputValue = inputSelect.property("value");
    var newData = tableData.filter((row) => row.datetime === inputValue);
    tbody.html("");
    tableDraw(newData);
};

// filterData();

var button = d3.select("#filter-btn");

var form = d3.select("#dateSelect");

button.on("click", filterData);
form.on("submit", filterData);