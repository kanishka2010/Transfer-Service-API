# Transfer-Service-API
REST API designed to transfer money between accounts.

# Software requirements

- Node JS
- Visual Studio Code
- Postman or any supporting software to generate post request

# Methodology

- Run terminal command = "npm install"
- Run terminal command = "npm start"

This initializes and runs the API

# Functioning of the Code

## server.js
  - This code section creates a server through express.js and initiates routes
  - line 9 specifies that JSON data is to be used for the application
  - line 11 listens to incoming requests through the specified port  

## transfers.js  
  - Three routes have been defined for : User descriptions, transaction history and POST request handling
  - Initializes the router through express.Router() function [line 2]
  - Required POST and GET methods have been defined in order to perform and view transactions between selected accounts
  - Models created in models.js are imported for use within this script

## models.js
  - This section creates users as a representation of the users schema. 
  - Users are defined as objects as opposed to a database. 
  - Users are pre-defined and can be manually added to this script

# Conditions
 - The user-entered source account and destination accounts are verified against the existing accounts prior to the transaction
 - The source account balance is ensured to always be above the entered transaction amount


# Testing
 
*Browsers can only make GET requests. Hence external softwares such as POSTMAN (in this application) is used to test the API by enlisting other requests such as POST*
 ![WhatsApp Image 2022-10-21 at 14 33 15](https://user-images.githubusercontent.com/116296589/197167613-554b75f4-9063-4302-b469-d199c22aaa85.jpg)

Through POSTMAN, a POST request must be sent to the following URL in order to initialize a transaction as per the above format in the image
 - **http://localhost:5000/transaction**


To view user accounts and transaction history (GET request)
- **http://localhost:5000/transactionhistory** - To view transaction history
- **http://localhost:5000/users** - To view avalable user accounts

***If a source account and/or destination accounts are not verified, the following response is generated***
![src](https://user-images.githubusercontent.com/116296589/197173596-566b6300-5279-4bc1-87d1-1ed820d8be25.jpg)

![dst](https://user-images.githubusercontent.com/116296589/197173665-b1e466da-c856-4de7-940a-47270b3238b7.jpg)

***If the transaction amount exceeds the source account balance, the following response is generated***
![trns](https://user-images.githubusercontent.com/116296589/197173694-998c900c-c703-440f-a076-a9e7dd52d9fd.jpg)



