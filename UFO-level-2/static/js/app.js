// from data.js

var tableData = data;

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

// Create variable for filters

var UFO_filters = {};

// Create funtion to update all user filters

function user_filters() {

    // Once filter is changed, save the element, value, and ID

    var new_element = d3.select(this).select("input");
    var new_value = new_element.property("value");
    var new_ID = new_element.attr("id");

    // Once new filter value is entered in the search, add the ID and value to UFO_filters list
    // If there is no filter added, clear the field

    if (new_value) {
        UFO_filters[new_ID] = new_value;
    }
    else {
        delete UFO_filters[new_ID];
    }

    // Apply the function so that all filters will be used to create the updated table

    user_filters();

}

// Create function to create the filtered table

function filter_table() {

    let filter_data = tableData;

    // Create loop that goes through all filters and keeps the data that matches the filter values

    Object.entires(filter).forEach(([key, value]) => {
        filter_data = filter_data(row => row[key] === value);
    });

    // Once new filtered data is updated, create new table with those values

    create_table(filter_data);
}

// Create an event to listen for new filter changes

d3.selectAll(".filter").on("change", user_filters);

// When the page loads, the table will be created

create_table(tableData);




