import express = require('express');
import {doMath, registerUser} from '../modules/module1/module1';
import { operation, responseOperation, userModel } from '../modules/module1/Imodule1';
import { User } from '../entity/User';

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message: "welcome to user index"});
});

router.post('/register', async function(req, res, next) {
  try {
    const user: userModel = req.body;

    const result: responseOperation = doMath(operation.ADDITION, {a:5,b:3});

    if(result.errorCode) {
      res.status(400).json(result);
    }
    else {    
      await registerUser(user);
      res.json({user: user, math: result});
    }
  } catch(e) {
    const err = e as Error;
    res.status(400).json(err);
  }
});

export = router;
