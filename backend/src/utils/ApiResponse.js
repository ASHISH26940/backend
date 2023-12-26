class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        //this.success=success;
        this.data=data;
        this.message=message;
        this.success=statusCode<400;
    }
    super
}

export {ApiResponse};