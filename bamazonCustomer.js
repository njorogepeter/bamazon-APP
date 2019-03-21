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

function customerPrompt(inventory){
    inquirer.prompt({
        type: "input",
        name: "choice",
        message: "Enter ID of purchase item"
    })
    .then(function(answer){
        var productId = parseInt(answer.choice);
        var product = inventoryCheck(productId, inventory);
         console.log(productId);
         //if the product is there ask the customer for quantity
         //prompt user for quantity
         if(product){
             quantityPrompt(product);
         }
         else{
             console.log("Item does not exist");
             readProducts();
         }
        
    });
}
//function for prompt user for quantity
function quantityPrompt(product){
    inquirer
    .prompt({
        type: "input",
        name: "quantity",
        message: "Enter how many you want"
    })
    .then(function(answer){
         //quantity variable
         var quantity = parseInt(answer.quantity);
        //quantity check if the product is enough
        if(quantity > product.stock_quantity){
            console.log("Insufficient quantity!");
            readProducts();
        }
        //buy if quantity is enough
        else {
            //buy the chosen item and quantity
            buy(product, quantity);
        }
    })
   
}

//validate the user choice from choice prompt

//allow the user to exit anytime during the purchase
//inventory check
function inventoryCheck(productId, inventory){
    for(var i = 0; i < inventory.length; i++){
        //check if item exits
        if(inventory[i].item_id === productId){
            return inventory[i]
        }
    }
    return null;
}
//buying item
function buy(product, quantity){
    var query = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?";
    connection.query(query, [quantity, product.price * quantity, product.item_id], function(err, res){
        console.log("Total cost $ " + quantity * product.price);
        readProducts();
    })
}

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      //prompt user for product of their choice
      customerPrompt(res);
    //   connection.end();
    });
  }
// ask customer if they want to do another purchase