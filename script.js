let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV string into rows
let rows = csvString.split('\n');

// Determine the number of columns based on the first row
let headings = rows[0].split(',');
let numColumns = headings.length;

// Initialize a two-dimensional array to store the CSV data
let csvData = [];

// Loop through each row and split by commas
for (let i = 0; i < rows.length; i++) {
    let columns = rows[i].split(',');
    csvData.push(columns);
}

// Cache the array for later use
let cachedData = csvData;

// Log the array of arrays
console.log(cachedData);

// Initialize an array to store the objects
let objectData = [];

// Loop through each row starting from the second row
for (let i = 1; i < csvData.length; i++) {
    let row = csvData[i];
    let obj = {};
    for (let j = 0; j < numColumns; j++) {
        obj[headings[j].toLowerCase()] = row[j];
    }
    objectData.push(obj);
}

// Log the array of objects
console.log(objectData);

// Remove the last element
objectData.pop();

// Insert a new object at index 1
objectData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end of the array
objectData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Log the updated array of objects
console.log(objectData);

// Calculate the average age
let totalAge = 0;
for (let i = 0; i < objectData.length; i++) {
    totalAge += parseInt(objectData[i].age);
}
let averageAge = totalAge / objectData.length;

// Log the average age
console.log("Average age:", averageAge);

// Initialize an array to store CSV rows
let csvArray = [];

// Add the header row
csvArray.push(headings.join(','));

// Add each row as a CSV string
for (let i = 0; i < objectData.length; i++) {
    let row = [];
    for (let j = 0; j < numColumns; j++) {
        row.push(objectData[i][headings[j].toLowerCase()]);
    }
    csvArray.push(row.join(','));
}

// Join all rows into a single CSV string
let finalCSV = csvArray.join('\n');

// Log the final CSV string
console.log(finalCSV);
