# Bamazon

For this project we were tasked with creating a storefront type (amazon) application that would be run from the terminal using Node, and linked to a SQL database.  When the user places an order of a specific item, the stock quantity of the item will also be deducted from the database.  Screenshots of the SQL database is found below:

![SQL Products Database](images/bamazonSQL-dB.jpg)

Screenshots for the javascript code and terminal store are found below here, and after the activities in class, this part of the project was not that difficult.  The most bugs I had were making sure that the correct callback functions were inside the correct parent functions so that everything would go smoothly.  I had sat with Aaron and Bryan briefly after class and was able to get everything in order.

![1-bamazonCustomer-showItems](images/1-bamazonCustomer-showItems.jpg)
![1-bamazonCustomer-showItems(2)](images/1-bamazonCustomer-showItems(2).jpg)
![1-bamazonCustomer-showItems(3)](images/1-bamazonCustomer-showItems(3).jpg)
![1-bamazonCustomer-showItems(4)](images/1-bamazonCustomer-showItems(4).jpg)
![1-bamazonCustomer-showItems(5)](images/1-bamazonCustomer-showItems(5).jpg)

That was the first part of the project, with optional bonus level options to be added.  The additions were another .js file for a Manager of the bamazon terminal store, that would be able to view products for sale, view products with a low inventory (under 5), add to inventory (stock quantity), and add new products to the database.  Creating the 'view products for sale' and 'view low inventory', I was able to create without too many issues going back to the bamazonCustomer.js code, as well as past activities such as the GreatBay and topSongs.  I was able to also get the 'add to inventory' part of the project working, however, I will still need to figure out why the stock inventory is not being added to the stock in the database.  For the last function, the 'add new product' function is working fine, where the Manager is able to add a new product, along with its price, department, and number of the product in the inventory to the original SQL database.  Lastly, the only bugs I still have right now was with the 'add to inventory' function as I mentioned before, but I'm sure with a little more fine tuning it will be up and running (however I am running out of time here).  Screenshots are found below, and more time will be put into the remaining function to get it working.

![bamazonManager-InitialRun](images/bamazonManager-InitialRun.jpg)
![bamazonManager-InitialRun2](images/bamazonManager-InitialRun2.jpg)
![bamazonManager-viewProducts](images/bamazonManager-viewProducts.jpg)
![bamazonManager-viewLowInventory](images/bamazonManager-viewLowInventory.jpg)
![bamazonManager-addInventory-1](images/bamazonManager-addInventory-1.jpg)
![bamazonManager-addInventory-2](images/bamazonManager-addInventory-2.jpg)
![2-bamazonManager-addProducts(1)](images/2-bamazonManager-addProducts(1).jpg)
![2-bamazonManager-addProducts(2)](images/2-bamazonManager-addProducts(2).jpg)

Lastly, two new variables were made that were trying to add the input of the new inventory to the database of the product name, however both of those variables did not update the new total in the database.  This project needs to be submitted, but I will speak with Bryan or one of the TA's tomorrow to finish this aspect of the project.  Screenshots of the update is below:

![bamazonManager-addInventory-reTry(1)](images/bamazonManager-addInventory-reTry(1).jpg)