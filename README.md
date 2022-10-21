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

# Testing
 
*Browsers can only make GET requests. Hence external softwares such as POSTMAN (in this application) is used to test the API by enlisting other requests such as POST*
 ![WhatsApp Image 2022-10-21 at 14 33 15](https://user-images.githubusercontent.com/116296589/197167613-554b75f4-9063-4302-b469-d199c22aaa85.jpg)

Through POSTMAN, a POST request must be sent to the following URL in order to initialize a transaction
  **http://localhost:5000/transaction**


To view user accounts and transaction history (GET request)
- **http://localhost:5000/transactionhistory** - To view transaction history
- **http://localhost:5000/users** - To view avalable user accounts
