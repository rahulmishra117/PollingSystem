const OPTON=require('../../../model/Options');
const question=require('../../../model/Question');

module.exports.createOption=async (req,res)=>
{
     try{
        const question=req.question;
        req.body.question=question._id;
        console.log(question._id);
        let opt=await OPTON.create(req.body);

        question.options.push(opt);

        await opt.save();
        return res.status(200).json({
            message:'Option is created',
            data:opt
        })

     }catch(err){
         console.log(err);
         res.status(500).json({
             message:'Internal Server Error'
         })
     }
}