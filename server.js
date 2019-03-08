// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
// =============================================================
var tables = [
  {
    name: "user1",
    phoneNum: "786.555.1212",
    email: "user1@gmail.com",
    uniqueID: 123
  }
];


$(document).on("click", ".submit", function () {

  event.preventDefault();
  alert("Yay! You are officially booked!");
  //populate tables array
  var iNext = tables.length;
  table[iNext].name = $('#reserve-name');
  table[iNext].phoneNum = $('#reserve-number');
  table[iNext].email = $('#reserve-email');
  table[iNext].uniqueID = $('#reserve-id');

  $('#reserve-name').empty();
  $('#reserve-number').empty();
  $('#reserve-email').empty();
  $('#reserve-id').empty();

});


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays a single character, or returns false
app.get("/api/tables/:name", function(req, res) {
  var chosen = req.params.name;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].name) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New table reservations - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});