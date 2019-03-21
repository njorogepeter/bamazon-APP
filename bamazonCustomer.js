var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "UCdavisboot",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

function userPrompt(){
    inquirer.prompt({
        type: "input",
        name: "choice",
        message: "Enter ID of purchase item"
    })
    .then(function(answer){
        var productId = parseInt(answer.choice);
         console.log(productId);
         //if the product is there ask the customer for quantity
         //prompt user for quantity
        
    });
}
//function for prompt user for quantity
    //quantity variable

    //quantity check if the product is enough
    //buy if quantity is enough

//buy the chosen item and quantity 

//validate the user choice from choice prompt

//allow the user to exit anytime during the purchase

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      //prompt user for product of their choice
      userPrompt();
      connection.end();
    });
  }