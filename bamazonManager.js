
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "KendallJane87",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID: ") + connection.threadId;
    viewOptions();
});

function viewOptions() {
    console.log("[--------------------------------------------------]");
    console.log("[ ----- *MANAGER VIEW*  -----  SELECT OPTION: ---- ]");
    console.log("[--------------------------------------------------]\n");

    inquirer.prompt([
        {
            name: "managerChoice",
            type: "list",
            message: "Please Select Option:",
            choices: ["View Products For Sale", "View Low Inventory", "Add To Inventory", "Add New Product"]
        }
    ]).then(function(answer) {

        if (answer.managerChoice == "View Products For Sale") {
            viewProducts();
        }
        else if (answer.managerChoice == "View Low Inventory") {
            viewInventory();
        }
        else if (answer.managerChoice == "Add To Inventory") {
            addInventory();
        }
        else {
            addProduct();
        }
    });
}

function viewProducts() {
    console.log("\n==========================================================");
    console.log("\n----- *MANAGER VIEW*  -----  VIEW PRODUCTS FOR SALE: -----");
    console.log("----------------------------------------------------------\n");
    // console.log("\n==========================================================");

    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;

    console.log(results.length + " Products Available For Sale:\n");

        for (var i = 0; i < results.length; i++) {
            console.log(i+1 + ".)" + " Item: " + results[i].product_name + "| Department: " + results[i].department_name + "| Price: " + results[i].price + "| Inventory: " + results[i].stock_quantity);
        }
        console.log("\n==========================================================");

        inquirer.prompt([
            {
                name: "backToMenu",
                type: "input",
                message: "Press M To Return To Menu",
                choices: ["M"]
            }
        ]).then(function() {
            viewOptions();
        });
    })
}

function viewInventory() {
    console.log("\n======================================================");
    console.log("\n----- *MANAGER VIEW*  -----  VIEW LOW INVENTORY: -----");
    console.log("------------------------------------------------------\n");

    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err, results) {
        if (err) throw err;

    console.log("Products With Low Inventory (less than 5 left):\n");

        for (var i = 0; i < results.length; i++) {
            console.log(i+1 + ".)" + " Item: " + results[i].product_name + "| Department: " + results[i].department_name + "| Price: " + results[i].price + "| Inventory: " + results[i].stock_quantity);
        }
    console.log("\n==========================================================");

    inquirer.prompt([
        {
            name: "backToMenu",
            type: "input",
            message: "Press M To Return To Menu",
            choices: ["M"]
        }
    ]).then(function() {
        viewOptions();
    });
    });
}

function addInventory() {
    console.log("\n==========================================================");
    console.log("\n----- *MANAGER VIEW*  -----  ADD TO INVENTORY: -----");
    console.log("----------------------------------------------------------\n");

    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;

    console.log("Please Select Product To Add Inventory To:\n");

        for (var i = 0; i < results.length; i++) {
            console.log(i+1 + ".)" + " Item: " + results[i].product_name + "| Department: " + results[i].department_name + "| Price: " + results[i].price + "| Inventory: " + results[i].stock_quantity);
        }
        console.log("\n==========================================================");

        inquirer.prompt([
        {
            name: "item",
            type: "list",
            choices: function() {
                var itemsArray = [];
                for (var i = 0; i < results.length; i++) {
                  itemsArray.push(results[i].product_name);
                }
                return itemsArray;
            },
            message: "\nWhich product would you like to add more of?",
        },
        {
            name: "addNum",
            type: "input",
            message: "How many would you like to add?"
        }
    ]).then(function(answer) {
        var chosenProduct = "";
        var newTotal = results.stock_quantity;
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.item) {
                chosenProduct = results[i];
            }
        }

        connection.query(
            "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: answer.addNum + newTotal,
          },
          {
            product_name: chosenProduct.name
          }
        ],
        function(err) {
            if (err) throw err;

            console.log("\nConfirmed.  " + answer.item + " has been updated.");
            viewOptions();
        }
        )});
    });
}
    

function addProduct() {
    console.log("\n==========================================================");
    console.log("\n----- *MANAGER VIEW*  -----  ADD NEW PRODUCT: -----");
    console.log("----------------------------------------------------------\n");

    inquirer.prompt([
        {
            name: "newItem",
            type: "input",
            message: "\nWhat product would you like to add?",
        }
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO products SET ?",
          {
            product_name: chosenProduct.name
          },
        function(err) {
            if (err) throw err;

            console.log("\nConfirmed.  New item has been added.");

            inquirer.prompt([
                {
                    name: "managerMore",
                    type: "confirm",
                    message: "Would you like to continue editing inventory?"
                }
            ]).then(function(keepEditing) {
                if (keepEditing.managerMore === true) {
                    viewOptions();
                }
                else {
                    endManager();
                }
            });
        }
    )});
}

function endManager() {
    console.log("Thank you.  Goodbye.");
    connection.end();
}