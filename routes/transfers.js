import express from 'express';
const router = express.Router();

import {users,transactions} from '../models/model.js';

router.get('/users',(req,res) => {
    res.send(users);
});

router.get('/transactionhistory',(req,res) => {
    res.send(transactions);
});

router.post('/transaction',(req,res) => {
    const transaction = req.body;
    

    //under the assumption of the account number is unique to a person

    if(users.find((users)=> users.Account_Number == transaction.Source_Account_No)){
        const sourceaccount = users.find((users)=> users.Account_Number == transaction.Source_Account_No);
        if(users.find((users)=> users.Account_Number == transaction.Destination_Acc_No)){
            const destinationaccount = users.find((users)=> users.Account_Number == transaction.Destination_Acc_No);
            if(transaction.Amount < sourceaccount.Balance){
                sourceaccount.Balance = sourceaccount.Balance - transaction.Amount;
                destinationaccount.Balance = destinationaccount.Balance + transaction.Amount;
                transactions.push(transaction);
                res.send(`Transaction completed between ${sourceaccount.Account_Number} and ${destinationaccount.Account_Number}.`);
                }
            else{
                res.send("Transaction Amount should not exceed your account balance");
            }
        }
        else {
            res.send(`The Destination Account Number ${transaction.Destination_Acc_No} doesn't match with a account.`); 
        }
    } else {
        res.send(`The source Account Number ${transaction.Source_Account_No} doesn't match with a account.`);
    }
    

    
});

export default router;