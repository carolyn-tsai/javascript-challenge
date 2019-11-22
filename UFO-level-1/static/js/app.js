// from data.js

var tableData = data;

console.log(tableData);

// Line 64 of index.html has <tbody> tag that needs to be selected
// The data will be inputted into the table body

var tbody = d3.select("tbody");

// Create a for each loop to get info from data.js
// For each entry in data.js, append the entries to the table

tableData.forEach(ufo_data => {
    console.log(ufo_data);
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function ([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select from line 44 of index.html id = "filter-btn" to get new input

var new_input = d3.select("#filter-btn");

// Select <tbody> tag for the new entry data

var new_entry = d3.select("tbody");

// Use ".on" to attach a click handler for the input

new_input.on("click", function(){

    // Clear the entries

    new_entry.html("");

    // Prevent the page to return to default

    d3.event.preventDefault();

    // Select the id = "datetime" on line 40 of index.html
    // User input will be set to input_date 

    var input_date = d3.select("#datetime").node().value;
    
    console.log(input_date);
    
    // Filter the data to get matching date value to the user date input

    var search_filter = tableData.filter(row => row.datetime === input_date);
    
    console.log(search_filter);

    // From the filtered date serach, add the filtered results to the table

    search_filter.forEach(function(filtered_data){
        console.log(filtered_data);
        var row = tbody.append("tr");
        Object.entries(filtered_data).forEach(function ([key,value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});


