const QUES=require('../../../model/Question');
const { options } = require('../../../routes');




// Creating the Question 

module.exports.create=async(req,res)=>{
    try{
        let question = new QUES(req.body);
        if(!question){
            res.status(400).send('Question is not created');
        }else{
            await question.save();
            res.send(question);
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

// Getting Question by id

module.exports.getQuestionById= async (req,res)=>{
   try{
       let d1=await QUES.findById(req.params.id).populate('options');
       if(d1){
           console.log('Question is show by this id',d1);
           res.send(d1);
       }else{
           res.status(404).json({
               message:'Question not Found'
           })     
       }
   }catch(err){
       console.log(err);
       return res.status(500).json({
           message:'Internal Server Error'
       })
   }
}
