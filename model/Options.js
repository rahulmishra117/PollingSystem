const mongoose=require('mongoose');
const OptionSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    votes:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'QUES'
    }

})
const OPTON=mongoose.model('OPTON',OptionSchema);
module.exports=OPTON;