const mongoose=require('mongoose');


const QuestionSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[
        {
           type:mongoose.Schema.Types.ObjectId, 
           ref:'OPTON'
        }
    ]
})

const QUES=mongoose.model('QUES',QuestionSchema);
module.exports=QUES;