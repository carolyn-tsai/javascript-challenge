// from data.js

var tableData = data;

console.log(tableData);

// Line 64 of index.html has <tbody> tag that needs to be selected
// The data will be inputted into the table body

var tbody = d3.select("tbody");

// Create a function that builds table based on data
function create_table(d) {

    // Get rid of existing data for clean table

    tbody.html("");

    // Create a for each loop to get info from data.js
    // For each entry in data.js, append the entries to the table 
    
    d.forEach(t_row => {
        var row = tbody.append("tr");
        Object.values(t_row).forEach((entry) => {
            var t_cell = row.append("td");
            t_cell.text(entry);
        });
    
    });
}




