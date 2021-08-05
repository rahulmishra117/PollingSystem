const express=require('express');
const { route } = require('.');
const router=express.Router();
const questiont=require('../../../controller/api/v1/Question_Api');
const optiont=require('../../../controller/api/v1/Option_Api');

router.post('/create',questiont.create);
router.get('/:id',questiont.getQuestionById);

router.post('/create/option',optiont.createOption);

module.exports=router;