export {asyncHandler}

//const asyncHandler=()=>{}
//const asyncHandler=(func)=>()=>{}
//const asyncHandler=(func)=>async()=>{}
//same thing is done below

const asyncHandler=(fn)=>async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}


/*done using promises
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch(err)=>next(err))
    }
}
*/