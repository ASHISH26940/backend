// const asyncHandler = (fn) =>async (req, res, next) => {    
//     try{
//         await fn(req, res, next);
//     }catch(error){
//         res.status(error.status || 500).json({
//              success: false,
//              message: error.message
//      })
//     }
// };

const asyncHandler = (fn) => (req, res, next) => {
    (req, res, next)=>{
        Promise.resolve(fn(req, res, next))
        .catch((err)=>next(err));
    }
}

export { asyncHandler}

//extracting the req,res,next from the function passed in the asyncHandler

