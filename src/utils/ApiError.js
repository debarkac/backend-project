//read from nodejs api error
//nodejs gives an error class

class ApiError extends Error{
    constructor(//custom constructor
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""//error stack
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)//captures where there is error
        }
    }
}

export {ApiError}