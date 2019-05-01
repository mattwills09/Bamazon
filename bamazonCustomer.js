
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
    showItems();
});

function showItems() {
    console.log("--- ALL AVAILABLE ITEMS ARE LISTED BELOW: ---\n");

    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
    //   var saleItems = results;
    // console.log(results);
    console.log("==================================================");
    console.log("==================================================\n" + results.length + " Items Available!\n");
        for (var i = 0; i < results.length; i++) {
            console.log(i+1 + ".)" + " Item: " + results[i].product_name + "| Department: " + results[i].department_name + "| Price: " + results[i].price + "| Inventory: " + results[i].stock_quantity);
        }
        console.log("\n==================================================");
        console.log("==================================================");
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var itemsArray = [];
                    for (var i = 0; i < results.length; i++) {
                      itemsArray.push(results[i].product_name);
                    }
                    return itemsArray;
                },
                message: "\nWhat item are you interestd in purchasing?"
            },
            {
                name: "buyNum",
                type: "input",
                message: "How many would you like to purchase?"
            }
            ]).then(function(answer) {
                var chosenItem = "";
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.choice) {
                        chosenItem = results[i];
                        var product = results[i].product_name;
                    }
                }
                console.log("\nYou selected " + answer.buyNum + " " + product + "'s, Good Choice\n");

                if (chosenItem.stock_quantity >= parseInt(answer.buyNum)) {
                    var newQuantity = chosenItem.stock_quantity - answer.buyNum;
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: newQuantity
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function(err) {
                        if (err) throw err;
                        console.log("Item Purchased Successfully!");
                        console.log("\n==================================================\n");
                        // showItems();

                        inquirer.prompt([
                            {
                                name: "shopMore",
                                type: "confirm",
                                message: "Would you like to continue shopping?"
                            }
                        ]).then(function(keepShopping) {
                            if (keepShopping.shopMore === true) {
                                showItems();
                            }
                            else {
                                endShop();
                            }
                        });
                    }
                    );
                }
                else {
                    console.log("Sorry, not enough items in inventory!  Please try again.\n");
                    showItems();
                }
            });
    });
}

function endShop() {
    console.log("Thanks for visiting, come back soon!");
    connection.end();
}